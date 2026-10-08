/**
 * SmartNetwork TJKT - Services Module
 */

export const servicesData = [
  {
    id: 'lan-installation',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
    title: 'Instalasi LAN Structured Wiring',
    shortDesc: 'Pemasangan kabel UTP/Cat6, patch panel, dan keystone jack rapi berstandar kabel struktur industri.',
    tech: ['Cat6', 'Patch Panel', 'Cable Management', 'RJ45'],
    fullDetail: {
      category: 'Infrastruktur Fisik',
      overview: 'Layanan pemasangan jaringan kabel LAN lokal berstandar industri dengan pengorganisasian kabel yang rapi, penglabelan otomatis, serta pengujian kelayakan saluran data menggunakan cable analyzer.',
      features: [
        'Instalasi Kabel Cat5e / Cat6 / Cat6A berstandar T568B',
        'Penataan Rack Server & Patch Panel dengan labeling profesional',
        'Fluke Testing & Wiremap Validation 1Gbps / 10Gbps',
        'Kerapian instalasi dengan Cable Duct / Conduit PVC'
      ],
      workflow: 'Survei lokasi ➔ Perancangan jalur kabel ➔ Tarik kabel & Crimping ➔ Testing & Labeling'
    }
  },
  {
    id: 'router-config',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/></svg>`,
    title: 'Konfigurasi Router Enterprise',
    shortDesc: 'Routing statis & dinamis (OSPF, BGP), NAT, IP Forwarding, dan manajemen lalu lintas gateway.',
    tech: ['Cisco', 'MikroTik', 'OSPF', 'NAT', 'BGP'],
    fullDetail: {
      category: 'Core Routing',
      overview: 'Pengaturan router tingkat lanjut untuk menghubungkan beberapa subnet dan jaringan eksternal/ISP dengan protokol routing dinamis tercepat dan otomatisasi failover.',
      features: [
        'Konfigurasi Static Routing & OSPF Multi-Area',
        'Dual WAN Failover & Load Balancing (PCC / ECMP)',
        'Source NAT, Destination NAT (Port Forwarding)',
        'Standard & Extended Access Control List (ACL)'
      ],
      workflow: 'Analisis subnet & Gateway ➔ Scripting Rule Router ➔ Implementation & Routing Test'
    }
  },
  {
    id: 'mikrotik-config',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    title: 'Konfigurasi MikroTik Advanced',
    shortDesc: 'Manajemen bandwidth Queue Tree, Hotspot Login Portal, Layer 7 Firewall, dan Mangle Rules.',
    tech: ['RouterOS', 'Simple Queue', 'Hotspot Portal', 'Layer7'],
    fullDetail: {
      category: 'Bandwidth & Access Management',
      overview: 'Solusi optimalisasi MikroTik RouterOS untuk sekolah, kantor, atau WISP. Mengatur pembagian bandwidth adil, mengunci serangan virus/spam, dan menyediakan Portal Hotspot profesional.',
      features: [
        'Bandwidth Management (Simple Queue & Queue Tree PCQ)',
        'Custom Hotspot Login Page dengan Voucher System',
        'Mangle Rule untuk memisahkan Trafik Game, Zoom, & Browsing',
        'MikroTik Cloud Backups & Auto Script Alerts'
      ],
      workflow: 'Audit trafik jaringan ➔ Perancangan Hierarchy Queue ➔ Deployment RouterOS ➔ Tuning'
    }
  },
  {
    id: 'access-point',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
    title: 'Instalasi Wireless Access Point',
    shortDesc: 'Perancangan sinyal Wi-Fi coverage, Roaming tanpa putus, SSID Segmentation, & AP Controller.',
    tech: ['Ubiquiti UniFi', 'Wi-Fi 6', 'Seamless Roaming', 'CapMan'],
    fullDetail: {
      category: 'Wireless Connectivity',
      overview: 'Pemasangan dan kalibrasi jaringan nirkabel (WLAN) untuk mencakup seluruh area gedung tanpa blank spot, dilengkapi fitur 802.11r/k Fast Roaming dan pemisahan Wi-Fi Tamu vs Wi-Fi Staf.',
      features: [
        'Site Survey & RF Heatmap Planning',
        'Centralized Controller (UniFi Controller / MikroTik CAPsMAN)',
        'Multi-SSID dengan Isolation VLAN (Guest & Admin Network)',
        'Optimasi Channel Wi-Fi & Power Output anti-interferensi'
      ],
      workflow: 'Heatmap Wireless ➔ Pemasangan AP ➔ Tuning Central Controller ➔ Test Signal'
    }
  },
  {
    id: 'switch-vlan',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8"/><line x1="10" y1="8" x2="10" y2="8"/><line x1="14" y1="8" x2="14" y2="8"/><line x1="18" y1="8" x2="18" y2="8"/></svg>`,
    title: 'Konfigurasi Managed Switch & VLAN',
    shortDesc: 'Segmen jaringan dengan VLAN 802.1Q, Trunking, Spanning Tree Protocol (STP), & Port Security.',
    tech: ['VLAN 802.1Q', 'Trunking', 'STP / RSTP', 'Port Security'],
    fullDetail: {
      category: 'Switching Infrastructure',
      overview: 'Penerapan isolasi broadcast domain menggunakan Virtual LAN (VLAN) untuk meningkatkan keamanan jaringan dan mencegah pembengkakan traffic broadcast pada switch managed.',
      features: [
        'Segmentasi VLAN ID (VLAN Guru, Siswa, Admin, Server)',
        'Config 802.1Q Trunk Port & Access Port',
        'Prevent Loop dengan RSTP / MSTP Protocol',
        'Port Security & MAC Address Binding'
      ],
      workflow: 'Perancangan VLAN Map ➔ Config Core & Access Switch ➔ Inter-VLAN Routing ➔ Test Segmen'
    }
  },
  {
    id: 'network-troubleshooting',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    title: 'Network Troubleshooting & Audit',
    shortDesc: 'Diagnosa masalah rontok sinyal, IP Conflict, High Latency, Packet Loss, dan bottleneck trafik.',
    tech: ['Wireshark', 'Ping / Traceroute', 'Packet Capture', 'IP Scanner'],
    fullDetail: {
      category: 'Support & Diagnostic',
      overview: 'Layanan cepat penanganan gangguan jaringan komputer yang macet, lambat, atau terputus. Menggunakan analisis layer 1 hingga layer 7 untuk menemukan akar permasalahan.',
      features: [
        'Penanganan IP Conflict & Rogue DHCP Server',
        'Deep Packet Analysis dengan Wireshark untuk deteksi anomaly',
        'Inspeksi kelayakan kabel LAN & keystone connector',
        'Laporan rekomendasi perbaikan infrastruktur'
      ],
      workflow: 'Laporan keluhan ➔ Remote/Onsite Audit ➔ Root Cause Identification ➔ Repair'
    }
  },
  {
    id: 'network-security',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Network Security & VPN',
    shortDesc: 'Proteksi jaringan dari DDoS, Port Scanning, Virus, dan setup VPN Encrypted Tunnel (WireGuard/IPSec).',
    tech: ['Firewall RAW', 'WireGuard', 'IPSec VPN', 'Port Scan Guard'],
    fullDetail: {
      category: 'Cybersecurity',
      overview: 'Perlindungan menyeluruh untuk pintu masuk jaringan internal Anda dari peretasan eksternal dan penyediaan akses jarak jauh yang aman terenkripsi untuk karyawan/admin.',
      features: [
        'Setup Filter Firewall RAW / Connection Tracking',
        'Pencegahan Brute Force, Port Scanner, & Syn Flood',
        'WireGuard / OpenVPN Site-to-Site & Remote Client VPN',
        'SSL Certificate & Router Hardening Audit'
      ],
      workflow: 'Vulnerability Scan ➔ Hardening Firewall Rules ➔ Setup Encrypted VPN ➔ Verification'
    }
  },
  {
    id: 'server-config',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    title: 'Server Infrastructure Configuration',
    shortDesc: 'Instalasi & Pengelolaan Linux/Windows Server, Domain Name System (DNS), DHCP Server, & Active Directory.',
    tech: ['Ubuntu Server', 'Windows Server', 'DNS/DHCP', 'Proxmox'],
    fullDetail: {
      category: 'Server Systems',
      overview: 'Konfigurasi server lokal atau virtualisasi cloud untuk penyedia layanan terpusat seperti penyimpanan file, otentikasi user, server DNS internal, dan web hosting sekolah/perusahaan.',
      features: [
        'Instalasi Linux Ubuntu/Debian Server & Windows Server',
        'Konfigurasi DHCP Server dengan static lease MAC Address',
        'Setup BIND9 DNS Local & Samba Active Directory User Control',
        'Virtualisasi Server Proxmox VE dengan High Availability'
      ],
      workflow: 'Spesifikasi hardware ➔ Instalasi Hypervisor ➔ Config Core Services ➔ Backup Schedule'
    }
  },
  {
    id: 'cctv-networking',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    title: 'CCTV IP Camera Networking',
    shortDesc: 'Integrasi kamera IP dengan NVR, PoE Switch, Port Isolation, & Remote Stream Access via Mobile.',
    tech: ['IP Camera', 'PoE Switch', 'NVR Integration', 'Port Forwarding'],
    fullDetail: {
      category: 'Surveillance Network',
      overview: 'Integrasi sistem keamanan kamera IP berbasis jaringan dengan pembagian bandwidth khusus agar rekaman CCTV berkualitas tinggi tidak mengganggu koneksi internet kantor/sekolah.',
      features: [
        'Penataan PoE Switch 8-Port / 24-Port khusus kamera',
        'VLAN Isolasi Trafik CCTV dari Jaringan Data Utama',
        'Setup NVR Storage Server & Cloud Backup Stream',
        'Konfigurasi Remote Mobile App View dengan enkripsi'
      ],
      workflow: 'Pemetaan posisi kamera ➔ Tarik kabel UTP PoE ➔ NVR Configuration ➔ App Pairing'
    }
  },
  {
    id: 'network-maintenance',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: 'Network Maintenance & Monitoring',
    shortDesc: 'Pemeliharaan berkala, update firmware router/switch, backup rutin skrip konfigurasi, & monitoring 24/7.',
    tech: ['Firmware Update', 'Auto Backup', 'System Log', 'Uptime Audit'],
    fullDetail: {
      category: 'Managed Services',
      overview: 'Layanan perawatan berkala infrastruktur jaringan secara periodik untuk memastikan perangkat bebas overheat, terbebas dari bug keamanan, dan selalu ter-backup.',
      features: [
        'Update Firmware Router & Switch secara berkala',
        'Pembersihan fisik Rack Server & Manajemen Suhu',
        'Auto Backup Script harian dikirim via Telegram/Email',
        'Laporan performa bulanan & health check audit'
      ],
      workflow: 'Jadwal rutin ➔ Backup status awal ➔ Firmware patch & Physical check ➔ Report'
    }
  }
];

export function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = servicesData.map(service => `
    <div class="glass-card service-card" data-id="${service.id}">
      <div>
        <div class="service-header">
          <div class="service-icon">${service.icon}</div>
          <span class="tech-tag">${service.fullDetail.category}</span>
        </div>
        <h3>${service.title}</h3>
        <p>${service.shortDesc}</p>
        <div class="tech-tags">
          ${service.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-secondary btn-sm service-detail-btn" data-id="${service.id}" style="width: 100%;">
        Pelajari Detail ➔
      </button>
    </div>
  `).join('');

  // Attach modal listeners
  document.querySelectorAll('.service-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const item = servicesData.find(s => s.id === id);
      if (item) openServiceModal(item);
    });
  });
}

function openServiceModal(item) {
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge-tag">${item.fullDetail.category}</span>
      <h2 style="font-size: 2rem; margin-top: 0.75rem;">${item.title}</h2>
    </div>
    
    <div style="background: rgba(30, 41, 59, 0.5); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">Ringkasan Solusi:</h4>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">${item.fullDetail.overview}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem;">Fitur & Kapabilitas Utama:</h4>
      <ul style="list-style-type: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${item.fullDetail.features.map(f => `
          <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
            <span style="color: var(--accent-cyan);">✓</span> ${f}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 0.5rem;">Tahapan Alur Kerja:</h4>
      <div style="background: rgba(15, 23, 42, 0.8); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); border: 1px solid var(--border-color);">
        ${item.fullDetail.workflow}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
      <a href="#contact" class="btn btn-primary btn-sm modal-close-trigger" onclick="document.getElementById('global-modal').classList.remove('active')">
        Konsultasikan Layanan Ini 💬
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
}
