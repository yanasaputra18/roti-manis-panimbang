const products = [
  {
    name: "Croissant Butter",
    desc: "Pastry renyah dengan aroma butter yang kaya dan lembut di dalam.",
    price: "Mulai 18K",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Roti Coklat",
    desc: "Roti empuk dengan isian coklat lumer yang disukai semua usia.",
    price: "Mulai 12K",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Donat Gula",
    desc: "Donat lembut dengan taburan gula yang simpel tapi selalu nagih.",
    price: "Mulai 10K",
    image:
      "https://images.unsplash.com/photo-1607012657022-ed3df8c8f982?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop&w=1200&q=80",
  },
  {
    name: "Banana Bread",
    desc: "Cake pisang moist dengan rasa manis yang pas untuk teman kopi.",
    price: "Mulai 25K",
    image:
      "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop&w=1200&q=80",
  },
  {
    name: "Sourdough",
    desc: "Roti artisan dengan tekstur khas dan rasa yang lebih kompleks.",
    price: "Mulai 35K",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dessert Box",
    desc: "Dessert manis cantik untuk hadiah, acara, atau self reward.",
    price: "Mulai 20K",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Products() {
  const phoneNumber = "6281234567890"; // ganti dengan nomor WhatsApp kamu

  const createWhatsAppLink = (product) => {
    const message = `Halo, saya mau pesan produk ini:

Nama Produk: ${product.name}
Harga: ${product.price}
Deskripsi: ${product.desc}`;

    return `https://wa.me/${6281511408837}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="bg-orange-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Produk Favorit
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Pilihan roti dan pastry paling disukai pelanggan
          </h2>
          <p className="mt-4 text-gray-600">
            Semua dibuat fresh dan cocok untuk harian, hampers, atau kebutuhan
            acara spesial.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                    {item.price}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>

                <a
                  href={createWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Pesan Produk
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
