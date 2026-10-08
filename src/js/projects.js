/**
 * SmartNetwork TJKT - Portfolio Projects Module
 */

export const projectsData = [
  {
    id: 'project-1',
    number: 'PROJECT 01',
    title: 'School High-Speed Network Infrastructure',
    category: 'LAN',
    tags: ['LAN', 'VLAN', 'Cisco', 'Server'],
    shortDesc: 'Perancangan ulang dan instalasi topologi LAN untuk 500+ unit PC lab komputer sekolah dengan segmentasi VLAN.',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    details: {
      client: 'SMK Negeri TJKT Center',
      duration: '2 Minggu Implementation',
      objective: 'Mengatasi bottleneck trafik lab CBT ujian online dan mengisolasi virus antar lab.',
      architecture: 'Core Switch Cisco Catalyst 3850 + 8x Access Switches 2960. 4 Subnet VLAN terpisah (VLAN 10 CBT, VLAN 20 Admin, VLAN 30 WiFi, VLAN 40 Server).',
      result: 'Konektivitas 100% stabil saat 500 siswa bersamaan ujian CBT online dengan latensi di bawah 2ms.'
    }
  },
  {
    id: 'project-2',
    number: 'PROJECT 02',
    title: 'Enterprise Office Multi-SSID WiFi System',
    category: 'WiFi',
    tags: ['WiFi', 'Ubiquiti', 'Mesh', 'VLAN'],
    shortDesc: 'Deployment 16 unit Access Point Ubiquiti UniFi U6 Pro dengan fitur Fast Roaming 802.11r di gedung 4 lantai.',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
    details: {
      client: 'PT Smart Tech Indonesia',
      duration: '1 Minggu Deployment',
      objective: 'Cakupan Wi-Fi tanpa blank spot dengan perpindahan koneksi nirkabel tanpa putus saat berjalan antar lantai.',
      architecture: '16x UniFi U6 Pro + UniFi Cloud Gateway Max + Bandwidth Limit per Guest.',
      result: 'Pengguna dapat melakukan video call Zoom saat berjalan antar gedung tanpa disconnec.'
    }
  },
  {
    id: 'project-3',
    number: 'PROJECT 03',
    title: 'MikroTik Multi-WAN Load Balance & QoS',
    category: 'MikroTik',
    tags: ['MikroTik', 'LoadBalance', 'QoS', 'PCC'],
    shortDesc: 'Penggabungan 3 provider ISP (Indihome, Biznet, MyRepublic) menggunakan skema Per Connection Classifier (PCC).',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    details: {
      client: 'Coworking Hub TJKT',
      duration: '3 Hari Configuration',
      objective: 'Memaksimalkan total bandwidth hingga 900 Mbps dan otomatis beralih rute jika salah satu ISP mati.',
      architecture: 'MikroTik CCR2004 + PCC Load Balance + Priority Queue Tree untuk memisahkan trafik VoIP/Zoom dari Download HD.',
      result: 'Uptime jaringan meningkat menjadi 99.9% tanpa dampak jika terjadi salah satu ISP blackout.'
    }
  },
  {
    id: 'project-4',
    number: 'PROJECT 04',
    title: 'Proxmox Server Virtualization Data Center',
    category: 'Server',
    tags: ['Server', 'Proxmox', 'Linux', 'Virtualization'],
    shortDesc: 'Implementasi kluster server Proxmox VE untuk migrasi server fisik ke Virtual Machines & LXC Containers.',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    details: {
      client: 'Regional Tech Server Farm',
      duration: '2 Minggu Setup',
      objective: 'Menghemat biaya konsumsi daya server fisik dan menyediakan fitur snapshot backup otomatis.',
      architecture: '2x Dell PowerEdge Server Dual Xeon + Proxmox VE Cluster + ZFS Storage RAID 10.',
      result: 'Efisiensi penghematan listrik hingga 60% dan proses restore VM hanya membutuhkan waktu 2 menit.'
    }
  },
  {
    id: 'project-5',
    number: 'PROJECT 05',
    title: 'Surveillance IP Camera Isolated CCTV Network',
    category: 'Security',
    tags: ['Security', 'CCTV', 'PoE', 'VLAN'],
    shortDesc: 'Instalasi 32 unit IP Camera Hikvision 4K dengan PoE Switch dedicated dan isolasi VLAN khusus.',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    details: {
      client: 'Logistik Smart Center',
      duration: '5 Hari Installation',
      objective: 'Sistem pengawasan keamanan 24 jam dengan akses stream via smartphone yang aman.',
      architecture: '32x Hikvision 4MP IP Cameras + 2x 16-Port Gigabit PoE Switches + NVR 32CH 16TB.',
      result: 'Rekaman video jernih tanpa mengganggu bandwidth jaringan komputer operasional kantor.'
    }
  },
  {
    id: 'project-6',
    number: 'PROJECT 06',
    title: 'Zero-Trust WireGuard Site-to-Site VPN',
    category: 'Security',
    tags: ['Security', 'VPN', 'WireGuard', 'Firewall'],
    shortDesc: 'Koneksi terenkripsi aman antara Kantor Pusat dan 3 Kantor Cabang menggunakan WireGuard VPN RouterOS.',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    details: {
      client: 'Fintech Distro Group',
      duration: '4 Hari Implementation',
      objective: 'Menghubungkan basis data antarcabang secara aman tanpa mengekspos port database ke publik.',
      architecture: 'WireGuard Tunnel Key Pair + Layer 7 Stateful Firewall + Dynamic DNS Integration.',
      result: 'Transfer data antar kantor cabang 5x lebih cepat dari OpenVPN lama dan berenkripsi ChaCha20.'
    }
  }
];

export function renderProjects() {
  const container = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container) return;

  function displayItems(filter = 'All') {
    const filtered = filter === 'All' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter || p.tags.includes(filter));

    container.innerHTML = filtered.map(item => `
      <div class="glass-card project-card">
        <div class="project-img-box">
          ${item.icon}
        </div>
        <div class="project-body">
          <span class="project-number">${item.number}</span>
          <h3 class="project-title">${item.title}</h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${item.shortDesc}</p>
          <div class="tech-tags" style="margin-bottom: 1.25rem;">
            ${item.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm project-modal-btn" data-id="${item.id}" style="width: 100%;">
            Lihat Detail Proyek ➔
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners for detail modal
    container.querySelectorAll('.project-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const proj = projectsData.find(p => p.id === id);
        if (proj) openProjectModal(proj);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-filter');
      displayItems(cat);
    });
  });

  displayItems('All');
}

function openProjectModal(proj) {
  const modalOverlay = document.getElementById('global-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="badge-tag">${proj.number} • ${proj.category}</span>
      <h2 style="font-size: 1.8rem; margin-top: 0.75rem;">${proj.title}</h2>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(30, 41, 59, 0.5); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <span style="font-size: 0.75rem; color: var(--text-muted);">KLIEN / INSTANSI:</span>
        <div style="font-weight: 700; color: var(--accent-cyan);">${proj.details.client}</div>
      </div>
      <div style="background: rgba(30, 41, 59, 0.5); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <span style="font-size: 0.75rem; color: var(--text-muted);">DURASI PENGERJAAN:</span>
        <div style="font-weight: 700; color: var(--accent-cyan);">${proj.details.duration}</div>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h4 style="color: var(--accent-cyan); margin-bottom: 0.35rem;">Tujuan Proyek:</h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary);">${proj.details.objective}</p>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h4 style="color: var(--accent-cyan); margin-bottom: 0.35rem;">Arsitektur & Spesifikasi:</h4>
      <p style="font-size: 0.95rem; color: var(--text-secondary);">${proj.details.architecture}</p>
    </div>

    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
      <h4 style="color: var(--accent-emerald); margin-bottom: 0.35rem;">Hasil Implementation:</h4>
      <p style="font-size: 0.95rem; color: var(--text-primary);">${proj.details.result}</p>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
      <button class="btn btn-secondary btn-sm" onclick="document.getElementById('global-modal').classList.remove('active')">
        Tutup
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
}
