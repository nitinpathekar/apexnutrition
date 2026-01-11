const brands = [
  {
    id: 1,
    name: "MuscleBlaze",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/MuscleBlaze_Logo.png",
  },
  {
    id: 2,
    name: "Optimum Nutrition",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Optimum_Nutrition_logo.png",
  },
  {
    id: 3,
    name: "BigMuscles",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/BigMuscles_logo.png",
  },
  {
    id: 4,
    name: "HealthKart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/HealthKart_logo.png",
  },
  {
    id: 5,
    name: "Fast&Up",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Fast%26Up_Logo.png",
  },
  {
    id: 6,
    name: "Himalayan Organics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Himalayan_Organics_logo.png",
  },
];

export default function PopularBrands() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Brands
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted brands we proudly offer
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center bg-gray-50 rounded-xl p-6 hover:shadow-md transition"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
