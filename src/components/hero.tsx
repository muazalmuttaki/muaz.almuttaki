
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white text-gray-900 min-h-[90vh] flex items-center pt-20 lg:pt-0 lg:mt-10">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight root">
            Hi I'm{" "}
            <span className="text-[#0148B9] whitespace-nowrap inline-block root">
              Muaz Al Muttaki
            </span>
          </h1>

          <motion.span
            className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 root"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Fullstack Web Developer
          </motion.span>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Building fast, modern, and scalable web applications
            with React, Next.js, Tailwind CSS, and Node.js.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="/portfolio"
              className="bg-[#0148b9] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#0148b9] border border-[#0148b9] transition-all duration-300 text-center"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-gray-900 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-[#0148b9] hover:text-white transition-all duration-300 text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-[#0148b9] opacity-10 blur-3xl rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="muaz.png"
                alt="Muaz Al Muttaki"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
