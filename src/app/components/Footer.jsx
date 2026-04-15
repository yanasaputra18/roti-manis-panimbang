export default function Footer() {
  return (
    <footer id="footer" className="bg-[#2d1f16] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-2xl font-bold text-orange-400">RotiManis</h3>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Toko roti homemade dengan cita rasa premium, fresh setiap hari, dan
            cocok untuk semua momen spesial.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Menu</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#products">Produk</a>
            </li>
            <li>
              <a href="#testimonials">Testimoni</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Kontak</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>WhatsApp: 0815-1180-8837</li>
            <li>Instagram: @rotimanis.id</li>
            <li>Email: hello@rotimanis.id</li>
            <li>
              <a
                href="https://maps.google.com/?q=Jl.+Mawar+No.+12,+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                Alamat: Jl. Mawar No. 12, Jakarta Selatan, Indonesia
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Order Sekarang</h4>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Mau pesan untuk harian, hampers, atau acara? Langsung hubungi kami.
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="mt-5 inline-block rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/60">
        © 2026 RotiManis. All rights reserved.
      </div>
    </footer>
  );
}
