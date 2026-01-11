const categories = [
  {
    id: 1,
    title: "Protein",
    desc: "Whey, Isolate, Mass Gainers",
    icon: "💪",
  },
  {
    id: 2,
    title: "Creatine",
    desc: "Monohydrate, HCL, Micronized",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Pre Workout",
    desc: "Energy & Focus Boosters",
    icon: "🔥",
  },
  {
    id: 4,
    title: "Vitamins",
    desc: "Multivitamins & Minerals",
    icon: "💊",
  },
  {
    id: 5,
    title: "Fat Burners",
    desc: "Weight Loss & Metabolism",
    icon: "🏃‍♂️",
  },
  {
    id: 6,
    title: "Accessories",
    desc: "Shakers, Gloves, Gym Gear",
    icon: "🎒",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="mt-3 text-gray-600">
            Find the right supplements for your fitness goals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group cursor-pointer bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-900">
                {cat.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
