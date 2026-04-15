const testimonials = [
  {
    name: "Nadia",
    text: "Rotinya lembut banget dan tampilannya cantik. Cocok buat hampers juga.",
  },
  {
    name: "Rizky",
    text: "Croissant-nya enak, flaky, dan butter-nya terasa. Udah repeat order beberapa kali.",
  },
  {
    name: "Salsa",
    text: "Packaging rapi, rasa premium, dan adminnya responsif pas order lewat WhatsApp.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Testimoni
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Apa kata pelanggan kami
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-orange-100 bg-orange-50 p-6 shadow-sm"
            >
              <div className="mb-4 text-2xl text-orange-500">★★★★★</div>
              <p className="text-gray-700 leading-7">“{item.text}”</p>
              <p className="mt-5 font-bold text-gray-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
