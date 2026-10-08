/**
 * SmartNetwork TJKT - Learning Center & Tutorials Module
 */

export const tutorialsData = [
  {
    id: 'tut-1',
    title: 'Cara Membuat & Merancang Topologi LAN dari Nol',
    category: 'Networking',
    readTime: '8 Menit Baca',
    level: 'Pemula',
    summary: 'Panduan lengkap perencanaan jaringan lokal (LAN), pemilihan kabel Cat6, crimping T568B, hingga pengujian ping antar workstation.',
    content: `
      <h3>1. Pendahuluan Topologi LAN</h3>
      <p>Topologi Star (Bintang) adalah standar paling populer dalam pembuatan LAN modern karena kemudahan isolasi troubleshooting. Pada topologi ini, semua perangkat klien terhubung ke satu perangkat pusat yaitu Switch.</p>
      
      <h3 style="margin-top: 1.5rem;">2. Alat & Bahan yang Dibutuhkan</h3>
      <ul>
        <li>Kabel UTP Cat6 & Connector RJ-45</li>
        <li>Crimping Tool & Cable Stripper</li>
        <li>Switch Unmanaged / Managed 8-Port</li>
        <li>LAN Cable Tester</li>
      </ul>

      <h3 style="margin-top: 1.5rem;">3. Urutan Standar Kabel T568B (Straight-Through)</h3>
      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        1. Putih-Oranye | 2. Oranye<br>
        3. Putih-Hijau  | 4. Biru<br>
        5. Putih-Biru   | 6. Hijau<br>
        7. Putih-Cokelat| 8. Cokelat
      </div>

      <h3 style="margin-top: 1.5rem;">4. Langkah Konfigurasi IP Client</h3>
      <p>Buka Control Panel ➔ Network and Sharing Center ➔ Change Adapter Settings ➔ Ethernet Properties ➔ IPv4 Properties. Masukkan static IP:</p>
      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-emerald); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        IP Address   : 192.168.1.10<br>
        Subnet Mask  : 255.255.255.0<br>
        Default Gateway: 192.168.1.1
      </div>
    `
  },
  {
    id: 'tut-2',
    title: 'Dasar Konfigurasi MikroTik RouterOS Pertama Kali',
    category: 'MikroTik',
    readTime: '10 Menit Baca',
    level: 'Pemula - Menengah',
    summary: 'Langkah awal setup MikroTik via Winbox: IP Address, Default Gateway, DNS, NAT Masquerade, & DHCP Server.',
    content: `
      <h3>1. Membuka Winbox & Connect MAC Address</h3>
      <p>Unduh Winbox dari website resmi MikroTik, hubungkan PC ke port ether2 MikroTik, lalu klik tab Neighbors dan pilih MAC Address router.</p>

      <h3 style="margin-top: 1.5rem;">2. Skrip Konfigurasi Dasar MikroTik CLI</h3>
      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        # 1. Setting IP WAN & LAN<br>
        /ip address add address=192.168.100.2/24 interface=ether1-WAN<br>
        /ip address add address=192.168.1.1/24 interface=ether2-LAN<br><br>
        # 2. Setting Gateway ISP<br>
        /ip route add gateway=192.168.100.1<br><br>
        # 3. Setting DNS Resolver<br>
        /ip dns set servers=8.8.8.8,1.1.1.1 allow-remote-requests=yes<br><br>
        # 4. Enable NAT Masquerade agar LAN bisa internetan<br>
        /ip firewall nat add chain=srcnat out-interface=ether1-WAN action=masquerade
      </div>

      <h3 style="margin-top: 1.5rem;">3. Verifikasi Koneksi Internet</h3>
      <p>Jalankan perintah <code>/ping 8.8.8.8</code> di New Terminal MikroTik. Jika status reply, maka router sudah terhubung internet.</p>
    `
  },
  {
    id: 'tut-3',
    title: 'Memahami IP Address Kelas A, B, C & CIDR',
    category: 'Networking',
    readTime: '6 Menit Baca',
    level: 'Pemula',
    summary: 'Penjelasan struktur IP Address 32-bit, oktet, alamat publik vs privat, dan penulisan notasi CIDR (Classless Inter-Domain Routing).',
    content: `
      <h3>1. Anatomi IP Address 32-Bit</h3>
      <p>IP Address versi 4 (IPv4) terdiri dari 32-bit biner yang dibagi menjadi 4 oktet (masing-masing 8-bit) dipisahkan titik. Contoh: <code>192.168.1.1</code>.</p>

      <h3 style="margin-top: 1.5rem;">2. Rentang IP Privat (RFC 1918)</h3>
      <ul>
        <li><strong>Kelas A:</strong> 10.0.0.0 s/d 10.255.255.255 (/8)</li>
        <li><strong>Kelas B:</strong> 172.16.0.0 s/d 172.31.255.255 (/12)</li>
        <li><strong>Kelas C:</strong> 192.168.0.0 s/d 192.168.255.255 (/16)</li>
      </ul>

      <h3 style="margin-top: 1.5rem;">3. Apa itu Notasi CIDR?</h3>
      <p>CIDR ditulis dengan tanda garis miring di akhir IP (contoh <code>/24</code>). Angka 24 menunjukkan bahwa 24-bit pertama adalah Network ID (NetID), sedangkan 8-bit sisanya adalah Host ID (HostID).</p>
    `
  },
  {
    id: 'tut-4',
    title: 'Panduan Praktis Subnetting Jaringan Komputer',
    category: 'Networking',
    readTime: '12 Menit Baca',
    level: 'Menengah',
    summary: 'Trik cepat menghitung jumlah subnet, jumlah host valid, subnet mask, alamat network, dan broadcast tanpa menghitung biner rumit.',
    content: `
      <h3>1. Rumus Utama Subnetting</h3>
      <p>Untuk mencari jumlah host per subnet: <code>2^(32 - CIDR) - 2</code>.</p>
      
      <h3 style="margin-top: 1.5rem;">2. Contoh Soal Subnetting /26</h3>
      <p>IP Network: <code>192.168.1.0/26</code></p>
      <ul>
        <li>Bit host = 32 - 26 = 6 bit.</li>
        <li>Jumlah host per subnet = 2^6 - 2 = 64 - 2 = <strong>62 Host</strong>.</li>
        <li>Blok Subnet = 256 - 192 = <strong>64</strong>.</li>
      </ul>

      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        Subnet 1 : 192.168.1.0 s/d 192.168.1.63 (Host: 1.1 - 1.62)<br>
        Subnet 2 : 192.168.1.64 s/d 192.168.1.127 (Host: 1.65 - 1.126)<br>
        Subnet 3 : 192.168.1.128 s/d 192.168.1.191 (Host: 1.129 - 1.190)<br>
        Subnet 4 : 192.168.1.192 s/d 192.168.1.255 (Host: 1.193 - 1.254)
      </div>
    `
  },
  {
    id: 'tut-5',
    title: 'Cara Troubleshooting Jaringan: Diagnosa Runtut Layer 1-7',
    category: 'Troubleshooting',
    readTime: '9 Menit Baca',
    level: 'Menengah',
    summary: 'Metode sistematik penyelesaian masalah jaringan komputer saat koneksi terputus (Request Timed Out, Destination Host Unreachable, DNS Probe Finished).',
    content: `
      <h3>1. Alur Diagnosa Bottom-Up (Layer OSI)</h3>
      <p>Mulai pemeriksaan dari fisik kabel/sinyalWi-Fi sebelum menyalahkan konfigurasi router/DNS server.</p>

      <h3 style="margin-top: 1.5rem;">2. Langkah-Langkah Command Line Test</h3>
      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        # 1. Cek IP & Gateway lokal<br>
        ipconfig /all (Windows) atau ip a (Linux)<br><br>
        # 2. Ping Gateway lokal<br>
        ping 192.168.1.1<br><br>
        # 3. Ping IP Publik (Bypass DNS)<br>
        ping 8.8.8.8<br><br>
        # 4. Ping Domain (Cek DNS Server)<br>
        ping google.com / nslookup google.com<br><br>
        # 5. Traceroute untuk melihat lokasi hop yang putus<br>
        tracert google.com
      </div>
    `
  },
  {
    id: 'tut-6',
    title: 'Konsep VLAN & Trunking pada Switch Cisco & MikroTik',
    category: 'Cisco',
    readTime: '11 Menit Baca',
    level: 'Lanjutan',
    summary: 'Pembahasan Virtual Local Area Network (802.1Q), keunggulan segmentasi keamanan, port access, port trunk, dan inter-VLAN routing.',
    content: `
      <h3>1. Mengapa Perlu VLAN?</h3>
      <p>Tanpa VLAN, semua port switch berada dalam satu broadcast domain. Jika terjadi masalah broadcast storm atau virus di satu PC, seluruh jaringan sekolah/kantor akan lumpuh. VLAN memisahkan domain tersebut secara logikal pada switch fisik yang sama.</p>

      <h3 style="margin-top: 1.5rem;">2. Konfigurasi VLAN pada Switch Cisco CLI</h3>
      <div style="background: rgba(15, 23, 42, 0.9); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color); margin: 0.75rem 0;">
        Switch# configure terminal<br>
        Switch(config)# vlan 10<br>
        Switch(config-vlan)# name GURU<br>
        Switch(config)# vlan 20<br>
        Switch(config-vlan)# name SISWA<br><br>
        # Assign Port Access<br>
        Switch(config)# interface fastEthernet 0/1<br>
        Switch(config-if)# switchport mode access<br>
        Switch(config-if)# switchport access vlan 10<br><br>
        # Assign Port Trunk ke Router<br>
        Switch(config)# interface gigabitEthernet 0/1<br>
        Switch(config-if)# switchport mode trunk
      </div>
    `
  }
];

export function renderTutorials() {
  const container = document.getElementById('tutorials-grid');
  const searchInput = document.getElementById('search-tutorial-input');

  if (!container) return;

  function displayItems(query = '') {
    const q = query.toLowerCase().trim();
    const filtered = tutorialsData.filter(t => 
      t.title.toLowerCase().includes(q) || 
      t.category.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Tidak ada artikel tutorial yang sesuai dengan kata kunci "${query}".</div>`;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="glass-card tutorial-card">
        <div>
          <div class="tutorial-meta">
            <span class="badge-tag" style="font-size: 0.7rem;">${item.category}</span>
            <span>⏱️ ${item.readTime} • ${item.level}</span>
          </div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem;">${item.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${item.summary}</p>
        </div>
        <button class="btn btn-secondary btn-sm read-tutorial-btn" data-id="${item.id}" style="width: 100%;">
          Baca Tutorial Lengkap 📖
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.read-tutorial-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const tut = tutorialsData.find(t => t.id === id);
        if (tut) openTutorialModal(tut);
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      displayItems(e.target.value);
    });
  }

  displayItems('');
}

function openTutorialModal(tut) {
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
      <span class="badge-tag">${tut.category} • ${tut.level}</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.75rem;">${tut.title}</h2>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Estimasi Waktu Baca: ${tut.readTime}</div>
    </div>

    <div class="tutorial-reading-content" style="color: var(--text-primary); line-height: 1.7; font-size: 0.95rem;">
      ${tut.content}
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem;">
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('global-modal').classList.remove('active')">
        Tutup Artikel
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
}
