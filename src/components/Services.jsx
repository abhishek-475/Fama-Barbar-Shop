import React from "react";

const services = [
  {
    title: "Haircuts",
    description:
      "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    offerings: ["Classic Cuts", "Modern Styles"],
  },
  {
    title: "Beard Services",
    description:
      "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
    offerings: ["Beard Trims"],
  },
  {
    title: "Premium Services",
    description:
      "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
    offerings: ["Hair Coloring"],
  },
];

const BarberServices = () => {
  return (
    <section className="bg-black py-16 px-6 min-h-screen">
      <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-12 tracking-wide">
        Our Barber Services
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-700 border border-yellow-600 rounded-2xl p-8 shadow-lg
                       hover:shadow-yellow-500/70 hover:scale-105 transform transition duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <ul className="list-disc list-inside text-yellow-300 space-y-1">
              {service.offerings.map((item, idx) => (
                <li key={idx} className="hover:text-yellow-400 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarberServices;
