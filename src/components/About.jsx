const About = () => (
  <section className="py-16 px-6 md:px-20 bg-black text-white min-h-screen flex flex-col items-center text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-yellow-500">About Us</h2>

    <div className="space-y-6 text-lg max-w-3xl">
      <p>
        <strong className="text-yellow-500 text-xl">Fama Barber Shop & Beauty Salon</strong> in Denton, TX is where timeless tradition meets cutting-edge style. Whether you're looking for a quick trim, a complete transformation, or a relaxing grooming session, our experienced team delivers top-tier service tailored to you.
      </p>

      <p>
        From sharp fades and hot towel shaves to eyebrow threading and deep conditioning treatments, we offer a wide range of services for men, women, and kids — all in a clean, welcoming, and modern atmosphere.
      </p>

      <p>
        With a solid <span className="text-yellow-400 font-semibold">4.6-star rating</span> based on over <span className="text-yellow-400 font-semibold">116+ reviews</span>, our shop is trusted by the community for quality, consistency, and care. We’re open 7 days a week, so walk in or book your appointment and experience grooming the Fama way.
      </p>

      <p>
        Located at <span className="text-yellow-400">500 N Bell Ave #109, Denton, TX</span>, we’re just a call away at{' '}
        <a href="tel:+19406129127" className="text-yellow-300 underline hover:text-yellow-200">
          +1 940-612-9127
        </a>.
      </p>
    </div>
  </section>
);

export default About;
