export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Toko Roti Homemade
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Roti fresh, lembut, dan bikin nagih di setiap gigitan
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Kami menghadirkan aneka roti, pastry, dan dessert dengan bahan
            berkualitas, rasa premium, dan tampilan yang cantik untuk camilan,
            hampers, maupun acara spesial.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://wa.me/6281511408837"
              target="_blank"
              className="rounded-full bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Order via WhatsApp
            </a>
            <a
              href="#products"
              className="rounded-full border border-orange-300 px-6 py-3 text-center font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Lihat Produk
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div>
              <p className="text-2xl font-bold text-orange-600">100%</p>
              <p className="text-sm text-gray-500">Fresh harian</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">50+</p>
              <p className="text-sm text-gray-500">Pelanggan puas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">20+</p>
              <p className="text-sm text-gray-500">Varian roti</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-orange-200 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-amber-200 blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
              alt="Aneka roti"
              className="relative z-10 h-[320px] w-full rounded-[28px] object-cover shadow-xl sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
