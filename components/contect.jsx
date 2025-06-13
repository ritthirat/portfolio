
import { motion } from "framer-motion";
export default function Contect() {
    return (
        <motion.div
            className="max-w-6xl mx-auto px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >Contact Me</motion.h2>
            <motion.p
                className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >Have a project in mind or want to work together? Feel free to reach out using the form below or through my contact details.</motion.p>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                {/* Contact Form */}
                <motion.div
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                    <motion.h3
                        className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >Send a Message</motion.h3>
                    <form>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                            <motion.input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="John Doe"
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <motion.input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="john@example.com"
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1.0 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                            <motion.input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Project Inquiry"
                                whileFocus={{ scale: 1.01 }}
                            />
                        </motion.div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 1.1 }}
                            viewport={{ once: true }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <motion.textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Your message here..."
                                whileFocus={{ scale: 1.01 }}
                            ></motion.textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                        >Send Message</motion.button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className="flex flex-col justify-between"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                    <div>
                        <motion.h3
                            className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                        >Contact Information</motion.h3>
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="font-medium text-lg">Email</p>
                                    <motion.a
                                        href="mailto:yourname@example.com"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >yourname@example.com</motion.a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="font-medium text-lg">Phone</p>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="font-medium text-lg">Location</p>
                                    <p>San Francisco, California</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                viewport={{ once: true }}
                            >Follow Me</motion.h3>
                            <motion.div
                                className="flex space-x-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.3 }}
                                viewport={{ once: true }}
                            >
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors duration-300"
                                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors duration-300"
                                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors duration-300"
                                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.3 10.3 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.82 4.82 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition-colors duration-300"
                                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}