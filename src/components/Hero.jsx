import heroImage from '../assets/hero.jpg';

const Hero = () => (
  <section className="h-screen bg-black text-white flex flex-col md:flex-row">
    {/* Left Side - Text Content */}
    <div className="flex-1 flex items-center justify-center px-6 md:px-12">
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Fama Barber Shop and Beauty Salon
        </h1>
        <p className="text-xl mb-8 text-yellow-500">Elevate Your Style, Every Visit</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="tel:+19406129127"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-300 ease-in-out"
          >
            Call Now
          </a>
          <a
            href="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="flex-1 flex items-center justify-center px-6 md:px-12">
      <img
        src={heroImage}
        alt="Interior of Fama Barber Shop and Beauty Salon"
        className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  </section>
);

export default Hero;
