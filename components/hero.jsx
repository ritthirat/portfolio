import { motion } from 'framer-motion';
export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <motion.span
              className="text-gray-800 dark:text-gray-100 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm
            </motion.span>{" "}
            <motion.span
              className="text-indigo-600 dark:text-indigo-400 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Big
            </motion.span>
          </h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Frontend Developer
          </motion.p>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            I create beautiful and functional websites with modern technologies, focusing on responsive design and user experience.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgb(99, 102, 241)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="w-64 h-64 bg-indigo-600/20 dark:bg-indigo-600/40 rounded-full flex items-center justify-center relative"
            animate={{ boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0.4)", "0 0 0 20px rgba(99, 102, 241, 0)"] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            {/* Replace with your profile image */}
            <motion.div
              className="w-56 h-56 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-gray-500 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/profile.jpg" alt="Profile" width={100} height={100} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
}