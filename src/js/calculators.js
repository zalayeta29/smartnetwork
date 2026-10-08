/**
 * SmartNetwork TJKT - Interactive Network Tools & Calculators
 */

import { showToast } from './toast.js';

export function initCalculators() {
  initToolTabs();
  initIpSubnetCalc();
  initPingSimulator();
  initBandwidthCalc();
  initNetworkPlanningCalc();
  initNetworkInfo();
}

function initToolTabs() {
  const tabs = document.querySelectorAll('.tool-tab-btn');
  const panels = document.querySelectorAll('.tool-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget.getAttribute('data-tool');
      
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.style.display = 'none');

      e.currentTarget.classList.add('active');
      const activePanel = document.getElementById(`tool-panel-${target}`);
      if (activePanel) activePanel.style.display = 'block';
    });
  });
}

/* 1. IP & Subnet Calculator */
function initIpSubnetCalc() {
  const ipInput = document.getElementById('calc-ip');
  const cidrInput = document.getElementById('calc-cidr');
  const btn = document.getElementById('btn-calc-ip');

  if (!btn) return;

  function calculate() {
    const ip = (ipInput.value || '192.168.1.50').trim();
    const cidr = parseInt(cidrInput.value || '24');

    if (!isValidIp(ip)) {
      showToast('Format IP Address tidak valid! (Contoh: 192.168.1.50)', 'error');
      return;
    }

    const ipArr = ip.split('.').map(Number);
    const maskArr = cidrToMask(cidr);
    const netArr = ipArr.map((octet, i) => octet & maskArr[i]);
    const wildArr = maskArr.map(octet => 255 - octet);
    const bcastArr = netArr.map((octet, i) => octet | wildArr[i]);

    const firstHostArr = [...netArr];
    firstHostArr[3] += 1;

    const lastHostArr = [...bcastArr];
    lastHostArr[3] -= 1;

    const totalHosts = Math.max(0, Math.pow(2, 32 - cidr) - 2);

    document.getElementById('out-net-addr').textContent = netArr.join('.');
    document.getElementById('out-bcast-addr').textContent = bcastArr.join('.');
    document.getElementById('out-first-host').textContent = totalHosts > 0 ? firstHostArr.join('.') : 'N/A';
    document.getElementById('out-last-host').textContent = totalHosts > 0 ? lastHostArr.join('.') : 'N/A';
    document.getElementById('out-total-hosts').textContent = totalHosts.toLocaleString('id-ID');
    document.getElementById('out-subnet-mask').textContent = maskArr.join('.');
    document.getElementById('out-ip-class').textContent = getIpClass(ipArr[0]);
    document.getElementById('out-binary-mask').textContent = maskArr.map(o => o.toString(2).padStart(8, '0')).join('.');
  }

  btn.addEventListener('click', calculate);
  calculate(); // run initial
}

function isValidIp(ip) {
  const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (!regex.test(ip)) return false;
  return ip.split('.').every(num => parseInt(num) >= 0 && parseInt(num) <= 255);
}

function cidrToMask(cidr) {
  let mask = [];
  for (let i = 0; i < 4; i++) {
    let n = Math.min(cidr, 8);
    mask.push(256 - Math.pow(2, 8 - n));
    cidr -= n;
  }
  return mask;
}

function getIpClass(firstOctet) {
  if (firstOctet >= 1 && firstOctet <= 126) return 'Class A (Large Networks)';
  if (firstOctet >= 128 && firstOctet <= 191) return 'Class B (Medium Networks)';
  if (firstOctet >= 192 && firstOctet <= 223) return 'Class C (Local/LAN Networks)';
  if (firstOctet >= 224 && firstOctet <= 239) return 'Class D (Multicast)';
  return 'Class E (Experimental)';
}

/* 2. Ping Simulator */
function initPingSimulator() {
  const hostInput = document.getElementById('ping-host');
  const btn = document.getElementById('btn-run-ping');
  const terminal = document.getElementById('ping-terminal');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const host = (hostInput.value || '8.8.8.8').trim();
    terminal.innerHTML = `<span style="color: var(--accent-cyan);">PING ${host} 56(84) bytes of data...</span><br>`;
    btn.disabled = true;

    let seq = 1;
    let times = [];

    const interval = setInterval(() => {
      const ms = (Math.random() * 12 + 8).toFixed(2);
      times.push(parseFloat(ms));
      terminal.innerHTML += `64 bytes from ${host}: icmp_seq=${seq} ttl=57 time=${ms} ms<br>`;
      terminal.scrollTop = terminal.scrollHeight;
      seq++;

      if (seq > 4) {
        clearInterval(interval);
        btn.disabled = false;
        const avg = (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2);
        terminal.innerHTML += `<br><span style="color: var(--accent-emerald);">--- ${host} ping statistics ---<br>4 packets transmitted, 4 received, 0% packet loss<br>rtt min/avg/max = ${Math.min(...times)}/${avg}/${Math.max(...times)} ms</span>`;
      }
    }, 600);
  });
}

/* 3. Bandwidth Calculator */
function initBandwidthCalc() {
  const sizeInput = document.getElementById('bw-size');
  const unitSelect = document.getElementById('bw-unit');
  const speedInput = document.getElementById('bw-speed');
  const btn = document.getElementById('btn-calc-bw');

  if (!btn) return;

  btn.addEventListener('click', () => {
    let sizeMb = parseFloat(sizeInput.value || '1000');
    const unit = unitSelect.value;
    if (unit === 'GB') sizeMb *= 1024;

    const speedMbps = parseFloat(speedInput.value || '100');
    if (speedMbps <= 0) return;

    // Convert size to Megabits (1 Byte = 8 bits)
    const sizeMbits = sizeMb * 8;
    const totalSeconds = sizeMbits / speedMbps;

    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.round(totalSeconds % 60);

    let resultStr = '';
    if (hours > 0) resultStr += `${hours} Jam `;
    if (mins > 0 || hours > 0) resultStr += `${mins} Menit `;
    resultStr += `${secs} Detik`;

    document.getElementById('out-download-time').textContent = resultStr;
    document.getElementById('out-eff-speed').textContent = `${(speedMbps / 8).toFixed(2)} MB/s`;
  });
}

/* 4. Network Planning Calculator */
function initNetworkPlanningCalc() {
  const pcInput = document.getElementById('plan-pc');
  const laptopInput = document.getElementById('plan-laptop');
  const cctvInput = document.getElementById('plan-cctv');
  const apInput = document.getElementById('plan-ap');
  const serverInput = document.getElementById('plan-server');
  const btn = document.getElementById('btn-calc-plan');

  if (!btn) return;

  function calculatePlan() {
    const pcs = parseInt(pcInput.value || 20);
    const laptops = parseInt(laptopInput.value || 15);
    const cctvs = parseInt(cctvInput.value || 8);
    const aps = parseInt(apInput.value || 4);
    const servers = parseInt(serverInput.value || 2);

    const totalDevices = pcs + laptops + cctvs + aps + servers;
    // Wired devices requiring switch ports
    const wiredDevices = pcs + cctvs + aps + servers;
    const switchPortsNeeded = Math.ceil(wiredDevices * 1.25); // 25% growth margin

    let subnetRec = '/24 (254 Usable IPs)';
    if (totalDevices > 250) subnetRec = '/23 (510 Usable IPs)';
    if (totalDevices > 500) subnetRec = '/22 (1022 Usable IPs)';

    let switchRec = '1x 24-Port Managed PoE+ Switch';
    if (switchPortsNeeded > 24 && switchPortsNeeded <= 48) {
      switchRec = '1x 48-Port Gigabit PoE+ Managed Switch';
    } else if (switchPortsNeeded > 48) {
      const switchesCount = Math.ceil(switchPortsNeeded / 48);
      switchRec = `${switchesCount}x 48-Port Managed PoE+ Switches (Stacked)`;
    }

    let bandwidthRec = '100 Mbps Dedicated Fiber ISP';
    if (totalDevices > 50) bandwidthRec = '300 Mbps Dedicated Fiber ISP';
    if (totalDevices > 150) bandwidthRec = '500 Mbps - 1 Gbps Dedicated Fiber ISP';

    document.getElementById('plan-total-dev').textContent = totalDevices;
    document.getElementById('plan-switch-ports').textContent = `${switchPortsNeeded} Ports (${wiredDevices} wired + buffer)`;
    document.getElementById('plan-subnet-rec').textContent = subnetRec;
    document.getElementById('plan-switch-rec').textContent = switchRec;
    document.getElementById('plan-bw-rec').textContent = bandwidthRec;
  }

  btn.addEventListener('click', calculatePlan);
  calculatePlan();
}

/* 5. Network Info */
function initNetworkInfo() {
  const statusEl = document.getElementById('info-online-status');
  const userAgentEl = document.getElementById('info-user-agent');
  const screenEl = document.getElementById('info-screen-res');

  if (statusEl) {
    statusEl.textContent = navigator.onLine ? 'ONLINE (Internet Accessible)' : 'OFFLINE';
    statusEl.style.color = navigator.onLine ? 'var(--accent-emerald)' : 'var(--accent-rose)';
  }
  if (userAgentEl) userAgentEl.textContent = navigator.userAgent;
  if (screenEl) screenEl.textContent = `${window.innerWidth} x ${window.innerHeight} px`;
}
