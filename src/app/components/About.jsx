export default function About() {
  const points = [
    "Bahan premium dan fresh setiap hari",
    "Cocok untuk sarapan, snack, hampers, dan acara",
    "Bisa custom order untuk ulang tahun dan event spesial",
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80"
            alt="Toko roti"
            className="h-[300px] w-full rounded-[28px] object-cover shadow-lg sm:h-[420px]"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Tentang Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Dibuat dengan resep terbaik dan sentuhan hangat rumahan
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            RotiManis hadir untuk memberikan pengalaman menikmati roti yang
            tidak hanya enak, tapi juga berkesan. Kami percaya bahwa roti yang
            baik dibuat dari bahan yang baik, proses yang teliti, dan rasa yang
            konsisten.
          </p>

          <div className="mt-6 space-y-4">
            {points.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm text-orange-600">
                  ✓
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
