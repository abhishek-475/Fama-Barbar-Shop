const Reviews = () => (
  <section className="py-16 px-6 md:px-20 bg-black text-white">
    <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">Customer Reviews</h2>
    
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <p className="text-lg italic">“Great service and friendly staff. Highly recommended!”</p>
        <p className="text-sm text-yellow-400 mt-2">– John Doe</p>
      </div>

      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <p className="text-lg italic">“Clean space, talented barbers, and good vibes. Best place in Denton!”</p>
        <p className="text-sm text-yellow-400 mt-2">– Maria Lopez</p>
      </div>

      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <p className="text-lg italic">“I always leave with a perfect fade. Professional and on time.”</p>
        <p className="text-sm text-yellow-400 mt-2">– James Brown</p>
      </div>

      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
        <p className="text-lg italic">“My go-to for both haircuts and beauty services. The team knows what they’re doing.”</p>
        <p className="text-sm text-yellow-400 mt-2">– Aaliyah Mitchell</p>
      </div>
    </div>
  </section>
);

export default Reviews;
