const features = [
  {
    id: 1,
    title: "100% Genuine Products",
    desc: "Only authentic supplements sourced from verified distributors.",
    icon: "✔",
  },
  {
    id: 2,
    title: "Expert Guidance",
    desc: "Personalized advice from experienced fitness professionals.",
    icon: "🧠",
  },
  {
    id: 3,
    title: "Best Value",
    desc: "Competitive pricing with regular in-store offers.",
    icon: "₹",
  },
  {
    id: 4,
    title: "Wide Range",
    desc: "Protein, creatine, vitamins & accessories in one place.",
    icon: "🏋️",
  },
  {
    id: 5,
    title: "Trusted Locally",
    desc: "Preferred by gym trainers & fitness enthusiasts.",
    icon: "⭐",
  },
  {
    id: 6,
    title: "Easy Availability",
    desc: "Visit our store or contact us for product availability.",
    icon: "📍",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We focus on authenticity, expert guidance, and customer trust —
            because your health deserves the best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white text-xl font-bold mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
