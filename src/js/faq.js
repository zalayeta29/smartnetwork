/**
 * SmartNetwork TJKT - FAQ Accordion Module
 */

export const faqData = [
  {
    q: 'Apa itu SmartNetwork TJKT?',
    a: 'SmartNetwork TJKT merupakan konsep dan platform informasi layanan teknologi jaringan komputer yang dikembangkan oleh siswa/infrastruktur TJKT (Teknik Jaringan Komputer dan Telekomunikasi). Platform ini memberikan panduan, kalkulasi, simulasi monitoring, serta solusi instalasi jaringan modern.'
  },
  {
    q: 'Apa itu TJKT (Teknik Jaringan Komputer dan Telekomunikasi)?',
    a: 'TJKT adalah jurusan keahlian tingkat SMK yang berfokus pada penguasaan infrastruktur teknologi informasi, perancangan topologi jaringan, administrator server, fiber optic, cybersecurity, nirkabel, dan perangkat keras komputer.'
  },
  {
    q: 'Apa perbedaan utama antara Router dan Switch?',
    a: 'Router berfungsi menghubungkan dua atau lebih jaringan berbeda subnet (seperti jaringan LAN lokal dengan WAN Internet) serta menentukan rute paket data. Sedangkan Switch berfungsi menghubungkan antar perangkat (PC, Laptop, Printer) dalam satu segmen jaringan LAN lokal yang sama.'
  },
  {
    q: 'Mengapa konfigurasi MikroTik sangat penting dalam jaringan?',
    a: 'MikroTik RouterOS menyediakan kontrol penuh terhadap alokasi bandwidth (QoS), keamanan firewall dari serangan virus/hackers, manajemen voucher hotspot, hingga penggabungan multiple ISP (Load Balancing) dengan harga yang efisien.'
  },
  {
    q: 'Apa manfaat utama mengimplementasikan VLAN pada switch?',
    a: 'VLAN (Virtual Local Area Network) memungkinkan pembagian satu switch fisik menjadi beberapa kelompok jaringan logis yang terisolasi. Manfaatnya: meningkatkan keamanan data (misal memisahkan jaringan Guru dan Siswa), mengurangi trafik broadcast storm, dan mempermudah manajemen IP.'
  },
  {
    q: 'Apa itu Subnetting dan mengapa diperlukan?',
    a: 'Subnetting adalah teknik memecah satu blok IP address besar menjadi beberapa blok subnet jaringan yang lebih kecil. Subnetting diperlukan untuk efisiensi alokasi IP Address privat dan membatasi broadcast domain agar tidak terjadi kemacetan trafik data.'
  },
  {
    q: 'Bagaimana cara mengatasi masalah jaringan "No Internet Access" (RTO)?',
    a: 'Langkah mendasar: 1) Cek fisik lampu indikator port kabel LAN / sinyal Wi-Fi. 2) Buka CMD dan lakukan ping 127.0.0.1 (cek NIC), ping IP Gateway Router, dan ping 8.8.8.8. 3) Bila ping 8.8.8.8 reply tetapi web tidak bisa dibuka, ganti DNS server ke 8.8.8.8 / 1.1.1.1. 4) Lakukan ipconfig /release dan ipconfig /renew.'
  },
  {
    q: 'Apa perbedaan antara jaringan LAN dan WLAN?',
    a: 'LAN (Local Area Network) menggunakan media transmisi fisik berupa kabel UTP/Cat6 dengan kecepatan transfer tinggi dan latensi sangat rendah. WLAN (Wireless LAN) menggunakan media sinyal radio Wi-Fi 2.4GHz/5GHz yang lebih fleksibel tanpa kabel.'
  },
  {
    q: 'Apa fungsi utama Access Point dalam infrastruktur nirkabel?',
    a: 'Access Point (AP) bertindak sebagai pemancar dan penerima sinyal nirkabel (Wi-Fi) yang mentransmisikan data antara perangkat mobile/laptop klien dengan jaringan kabel LAN utama.'
  },
  {
    q: 'Bagaimana SmartNetwork TJKT membantu perencanaan jaringan?',
    a: 'SmartNetwork menyediakan fitur Interactive Topology Map, Monitoring Simulator, IP/Subnet Calculator, dan Network Planning Calculator yang memungkinkan Anda menghitung estimasi alokasi IP, kebutuhan port switch, dan rekomendasi perangkat secara otomatis.'
  }
];

export function renderFaq() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  container.innerHTML = faqData.map((item, index) => `
    <div class="accordion-item" data-index="${index}">
      <button class="accordion-header">
        <span>${item.q}</span>
        <span class="accordion-icon">▼</span>
      </button>
      <div class="accordion-body">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');

  // Attach toggle listeners
  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', (e) => {
      const parent = e.currentTarget.parentElement;
      const isActive = parent.classList.contains('active');

      // Close others (optional smooth behavior)
      container.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
}
