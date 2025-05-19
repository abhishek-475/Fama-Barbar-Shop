import React from 'react';

const Contact = () => (
  <section className="py-12 px-6 md:px-16 bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Contact Info */}
    <div className="max-w-xl text-center md:text-left space-y-8">
      <h1 className="text-4xl font-bold text-yellow-500">Contact Us</h1>

      <div className="space-y-6 text-lg">
        <p>
          <strong className="text-yellow-500">📍 Location:</strong> 500 N Bell Ave #109, Denton, TX 76209, United States
        </p>

        <p>
          <strong className="text-yellow-500">📞 Phone:</strong>{' '}
          <a href="tel:+19406129127" className="text-yellow-400 underline hover:text-yellow-300 transition duration-300">
            +1 940-612-9127
          </a>
        </p>

        <p>
          <strong className="text-yellow-500">🕒 Hours:</strong> Monday – Saturday: 9:00 AM – 7:00 PM<br />
          Sunday: Closed
        </p>

        <p>
          <strong className="text-yellow-500">📧 Email:</strong>{' '}
          <a href="mailto:info@famabarber.com" className="text-yellow-400 underline hover:text-yellow-300 transition duration-300">
            info@famabarber.com
          </a>
        </p>

        <p>
          <strong className="text-yellow-500">🧭 Directions:</strong>{' '}
          <a
            href="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 underline hover:text-yellow-300 transition duration-300"
          >
            Google Maps
          </a>
        </p>
      </div>
    </div>

    {/* Google Map */}
    <div className="w-full max-w-xl h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg border border-yellow-500">
      <iframe
        title="Fama Barber Shop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.6515842313694!2d-97.11404118480877!3d33.212296980765634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7430f8aabf9d%3A0x92c297bde5e41256!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1694982485103!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);

export default Contact;
