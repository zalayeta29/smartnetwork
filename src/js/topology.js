/**
 * SmartNetwork TJKT - Interactive Topology Module
 */

export const topologyNodes = {
  internet: {
    name: 'Internet Gateway (ISP)',
    type: 'WAN Edge Connection',
    icon: `🌐`,
    function: 'Menghubungkan jaringan lokal dengan jaringan publik global (Internet) melalui modem fiber optic ISP.',
    ip: '202.152.0.1 / 24 (Public IP)',
    status: 'CONNECTED (1 Gbps Fiber)',
    specs: 'FTTH Fiber Optic | Dual ISP Load Balance Support | Latency ~12ms',
    role: 'Menyediakan saluran komunikasi data eksternal utama.'
  },
  router: {
    name: 'Main Gateway Router',
    type: 'Core Router (MikroTik / Cisco)',
    icon: `📡`,
    function: 'Menghubungkan jaringan lokal dengan internet, mengarahkan rute paket data (Routing), NAT, serta mengamankan gateway via Firewall.',
    ip: '192.168.1.1 / 24',
    status: 'ONLINE (CPU Load: 4%)',
    specs: 'CCR2004-16G-2S+ | 16x GbE Ports, 2x 10G SFP+ | RouterOS v7',
    role: 'Routing, NAT, Bandwidth Management Queue, & Firewall Filters.'
  },
  switch: {
    name: 'Core Managed Switch',
    type: 'Layer 3 Managed Switch',
    icon: `🔀`,
    function: 'Menghubungkan berbagai perangkat dalam jaringan lokal (LAN) dengan kecepatan tinggi, serta mengisolasi trafik menggunakan VLAN.',
    ip: '192.168.1.2 / 24',
    status: 'ONLINE (24 Ports Gigabit Active)',
    specs: 'Cisco Catalyst 2960-X | 24 Gigabit Ports + 4x 10G SFP Uplink | VLAN 802.1Q Support',
    role: 'Switching Data Layer 2/3, Trunking, Port Security, Spanning Tree Protocol.'
  },
  server: {
    name: 'Main Data & App Server',
    type: 'Infrastructure Server',
    icon: `🖥️`,
    function: 'Menyimpan basis data terpusat, menyediakan layanan DNS internal, DHCP Lease Server, serta aplikasi cloud sekolah/kantor.',
    ip: '192.168.1.10 / 24 (Static)',
    status: 'ONLINE (Uptime: 45 Days)',
    specs: 'Proxmox VE Cluster | 64GB RAM | 4TB NVMe RAID-10 | Dual Gigabit NIC',
    role: 'Hosting Web Portal, Active Directory, Storage, & Internal Services.'
  },
  ap: {
    name: 'Wireless Access Point',
    type: 'Wi-Fi 6 Enterprise AP',
    icon: `📶`,
    function: 'Menyediakan koneksi jaringan nirkabel (Wi-Fi) berkecepatan tinggi dengan enkripsi WPA3 dan fitur multi-SSID.',
    ip: '192.168.1.20 / 24',
    status: 'ONLINE (38 Connected Clients)',
    specs: 'Ubiquiti UniFi U6 Pro | Dual-Band Wi-Fi 6 | 5.3 Gbps Total Bandwidth | PoE Powered',
    role: 'Penyiaran Sinyal Wi-Fi (Guru, Siswa, Guest) dengan Bandwidth Limitation.'
  },
  pc: {
    name: 'Workstation Client PC',
    type: 'Desktop LAN Client',
    icon: `💻`,
    function: 'Perangkat komputer klien yang terhubung melalui kabel Ethernet LAN untuk pekerjaan intensif bandwidth tinggi.',
    ip: '192.168.1.105 / 24 (DHCP)',
    status: 'ONLINE (Link Speed 1000 Mbps)',
    specs: 'Gigabit Ethernet Card | OS Windows 11 Pro | Static DHCP Lease',
    role: 'Perangkat kerja pengguna kantor/lab komputer sekolah.'
  },
  laptop: {
    name: 'Mobile Laptop Klien',
    type: 'Wireless Wi-Fi Client',
    icon: `📱`,
    function: 'Perangkat portabel klien yang terhubung nirkabel melalui Access Point secara fleksibel.',
    ip: '192.168.20.44 / 24 (Guest Subnet)',
    status: 'ONLINE (Signal Strength: -48 dBm)',
    specs: 'Wi-Fi 6 AX210 | WPA3 Enterprise Auth | Roaming Capable',
    role: 'Perangkat mobile pengguna internal/tamu.'
  }
};

export function initTopologySection() {
  const nodeButtons = document.querySelectorAll('.node-btn');
  const infoTitle = document.getElementById('topo-info-title');
  const infoType = document.getElementById('topo-info-type');
  const infoFunction = document.getElementById('topo-info-func');
  const infoIp = document.getElementById('topo-info-ip');
  const infoStatus = document.getElementById('topo-info-status');
  const infoSpecs = document.getElementById('topo-info-specs');

  if (!nodeButtons.length) return;

  function selectNode(key) {
    const data = topologyNodes[key];
    if (!data) return;

    nodeButtons.forEach(btn => {
      if (btn.getAttribute('data-node') === key) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });

    if (infoTitle) infoTitle.innerHTML = `${data.icon} ${data.name}`;
    if (infoType) infoType.textContent = data.type;
    if (infoFunction) infoFunction.textContent = data.function;
    if (infoIp) infoIp.textContent = data.ip;
    if (infoStatus) infoStatus.textContent = data.status;
    if (infoSpecs) infoSpecs.textContent = data.specs;
  }

  nodeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.currentTarget.getAttribute('data-node');
      selectNode(key);
    });
  });

  // Default select router
  selectNode('router');
}
