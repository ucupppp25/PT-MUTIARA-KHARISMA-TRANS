tailwind.config = {
  darkMode: 'class',
};

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

const translations = {
  id: {
    title: "PT MUTIARA KHARISMA TRANS",
    subtitle: "Melayani pengiriman barang profesional, aman, dan tepat waktu ke seluruh Indonesia",
    about: "Tentang Kami",
    aboutContent: "Kami adalah perusahaan logistik yang berdedikasi untuk memberikan layanan terbaik.",
    products: "Transportasi",
    productsContent: "Daftar layanan transportasi kami.",
    testimonials: "Testimoni",
    testimonialsContent: "Ulasan dari pelanggan kami yang puas.",
    faq: "FAQ",
    faqContent: "Pertanyaan yang sering ditanyakan oleh pelanggan.",
    contact: "Kontak",
    contactContent: "Hubungi kami melalui email atau media sosial.",
    orderNow: "Pesan Sekarang",
    viewServices: "Lihat Layanan",
  },
  en: {
    title: "PT MUTIARA KHARISMA TRANS",
    subtitle: "Professional, safe, and on-time delivery services across Indonesia",
    about: "About Us",
    aboutContent: "We are a logistics company dedicated to providing the best service.",
    products: "Transportation",
    productsContent: "Our list of transportation services.",
    testimonials: "Testimonials",
    testimonialsContent: "Reviews from our satisfied customers.",
    faq: "FAQ",
    faqContent: "Frequently asked questions from our customers.",
    contact: "Contact",
    contactContent: "Reach us via email or social media.",
    orderNow: "Order Now",
    viewServices: "View Services",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
