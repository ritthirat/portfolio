import { motion } from 'framer-motion';
export default function Skill() {
    return (
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Technical Skills */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                    >Technical Skills</motion.h3>

                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">HTML & CSS</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-red-200 dark:border-red-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Semantic markup, responsive layouts, animations</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">JavaScript & TypeScript</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-yellow-200 dark:border-yellow-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">ES6+, async/await, type safety, DOM manipulation</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 7H7v6h6V7z" />
                                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">React & Next.js</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-blue-200 dark:border-blue-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Hooks, context API, server components, SSR/SSG</p>
                            </div>
                        </motion.div>

                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">Node.js & Express</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-green-200 dark:border-green-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">REST APIs, middleware, authentication, WebSockets</p>
                            </div>
                        </div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">Tailwind CSS</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-teal-200 dark:border-teal-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Utility-first approach, responsive design, custom themes</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                    </svg>
                                </div>
                                <h4 className="font-medium">MongoDB & SQL</h4>
                            </div>
                            <div className="mt-2 pl-3 border-l-2 border-purple-200 dark:border-purple-700/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Data modeling, indexing, queries, aggregation pipelines</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                    className="md:w-1/2 mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        viewport={{ once: true }}
                    >Professional Skills</motion.h3>

                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold">UI/UX Design</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">Creating intuitive interfaces with focus on user experience and accessibility.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold">Project Management</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">Managing projects, team collaboration, agile methodology, and meeting delivery timelines.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold">Communication</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">Clear and effective communication with clients and team members.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold">Problem Solving</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">Creative solutions to complex challenges through analytical thinking.</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            className="text-xl font-semibold mb-4 border-l-4 border-indigo-600 pl-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >Tools & Software</motion.h3>
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, staggerChildren: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2 }}
                                viewport={{ once: true }}
                            >VS Code</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.05 }}
                                viewport={{ once: true }}
                            >Figma</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                viewport={{ once: true }}
                            >Adobe XD</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.15 }}
                                viewport={{ once: true }}
                            >Git</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.2 }}
                                viewport={{ once: true }}
                            >GitHub</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.25 }}
                                viewport={{ once: true }}
                            >Docker</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.3 }}
                                viewport={{ once: true }}
                            >Webpack</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.35 }}
                                viewport={{ once: true }}
                            >Firebase</motion.span>
                            <motion.span
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.2, delay: 0.4 }}
                                viewport={{ once: true }}
                            >AWS</motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="mt-16 text-center">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                    <span>Check out my work</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}