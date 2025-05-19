const InfoCard = () => (
  <section className="bg-black py-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center text-white shadow-md border-t border-yellow-500">
    <div>
      <p className="text-2xl font-extrabold text-yellow-400">⭐ 4.6</p>
      <p className="text-sm text-gray-400">116+ reviews</p>
    </div>
    <div>
      <p className="text-2xl font-extrabold text-green-400">Open</p>
      <p className="text-sm text-gray-400">Closes 7 pm</p>
    </div>
    <div>
      <a href="tel:+19406129127" className="text-xl font-semibold text-yellow-300 hover:underline">
        +1 940-612-9127
      </a>
      <p className="text-sm text-gray-400">Call Now</p>
    </div>
    <div>
      <a
        href="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
        target="_blank"
        rel="noreferrer"
        className="text-xl font-semibold text-yellow-300 hover:underline"
      >
        Get Directions
      </a>
      <p className="text-sm text-gray-400">Denton, TX</p>
    </div>
  </section>
);

export default InfoCard;
