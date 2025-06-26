import { motion } from "framer-motion";

export default function Project() {
    return (
        <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >My Projects</motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >นี่คือโครงการล่าสุดของผมที่แสดงถึงทักษะและประสบการณ์ในการพัฒนาเว็บและการออกแบบ</motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >

          {/* Project 1 */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-indigo-600 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.2, rotate: 2 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-24 h-24 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <motion.h3
                  className="text-xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >ระบบจองห้องพักออนไลน์</motion.h3>
                <motion.span
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >PHP</motion.span>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >ระบบจองห้องพักออนไลน์ที่มีฟังก์ชันครบถ้วน รวมถึงการจัดการห้องพัก การจอง และการชำระเงิน</motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">PHP</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">MySQL</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">HTML5</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">CSS3</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">JavaScript</span>
              </motion.div>
              <div className="flex justify-between">
                <motion.a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>View Demo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-teal-600 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white text-5xl font-bold"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.2, rotate: 2 }}
                transition={{ duration: 0.5 }}
              >
                <motion.svg
                  className="w-24 h-24 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <motion.h3
                  className="text-xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >เว็บไซต์ขายสินค้าออนไลน์</motion.h3>
                <motion.span
                  className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs px-2 py-1 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >WordPress</motion.span>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >เว็บไซต์ขายสินค้าออนไลน์ที่สวยงามและใช้งานง่าย มีการจัดการสินค้า การชำระเงิน และการจัดส่ง</motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">WordPress</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">WooCommerce</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">Elementor</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">PHP</span>
              </motion.div>
              <div className="flex justify-between">
                <motion.a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>View Demo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-purple-600 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-5xl font-bold"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.2, rotate: 2 }}
                transition={{ duration: 0.5 }}
              >
                <motion.svg
                  className="w-24 h-24 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <motion.h3
                  className="text-xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >ระบบ LINE OA สำหรับธุรกิจ</motion.h3>
                <motion.span
                  className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >LINE API</motion.span>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >พัฒนาระบบ LINE OA ที่ช่วยในการตอบข้อความลูกค้าอัตโนมัติ การลงทะเบียน และการรีวิวสินค้า</motion.p>
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">LINE API</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">JavaScript</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">Webhook</span>
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs font-medium">PHP</span>
              </motion.div>
              <div className="flex justify-between">
                <motion.a
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>View Demo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </motion.div>
    );
}