import { motion } from 'framer-motion';
export default function About() {
    return (
        <motion.div
            className="max-w-6xl mx-auto px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100 "
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >About Me</motion.h2>

            <motion.div
                className="flex flex-col md:flex-row gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="md:w-1/2 space-y-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        สวัสดีครับ! ผมเป็นนักพัฒนาเว็บไซต์ที่มุ่งเน้นด้าน Frontend Development โดยมีประสบการณ์ทำงานในการพัฒนาเว็บตามความต้องการของลูกค้า
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        ผมเชี่ยวชาญใน Next.js, React, JavaScript และ CSS ในการสร้างเว็บไซต์ที่ทันสมัยและตอบสนองความต้องการของผู้ใช้ นอกจากนี้ยังมีประสบการณ์ด้านการพัฒนาแอปพลิเคชันบนมือถือด้วย Swift 
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        เมื่อไม่ได้เขียนโค้ด คุณจะเห็นผมพัฒนาโครงการส่วนตัวเกี่ยวกับระบบรักษาความปลอดภัยภายในบ้านและแดชบอร์ดเว็บไซต์ 
                    </motion.p>

                    <motion.div
                        className="pt-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            className="text-xl font-semibold mb-4  text-gray-800 dark:text-gray-100"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 }}
                            viewport={{ once: true }}
                        >Personal Info</motion.h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.0 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a1 1 0 10-2 0v.5a1 1 0 01-1 1h-4.5a1 1 0 01-1-1v-3a1 1 0 011-1h3.5a1 1 0 011 1v1.5z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <p className="text-gray-700 dark:text-gray-300">ritthirat.m@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.1 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <p className="text-gray-700 dark:text-gray-300">098-659-0481</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.2 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                                    <p className="text-gray-700 dark:text-gray-300">127/4 บ้านแม่แพง  จ.เชียงราย</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 1.3 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div
                                    className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Freelance</p>
                                    <p className="text-gray-700 dark:text-gray-300">Frontend Developer</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 mt-10 md:mt-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                viewport={{ once: true }}
                            >2+ </motion.div>
                            <motion.h3
                                className="text-lg font-medium mb-1  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                            >ปีประสบการณ์</motion.h3>
                            <motion.p
                                className="text-gray-600 dark:text-gray-400 text-sm  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                viewport={{ once: true }}
                            >ในการพัฒนาเว็บไซต์</motion.p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2  "
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                            >4+</motion.div>
                            <motion.h3
                                className="text-lg font-medium mb-1  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                viewport={{ once: true }}
                            >โปรเจกต์ที่สำเร็จ</motion.h3>
                            <motion.p
                                className="text-gray-600 dark:text-gray-400 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                viewport={{ once: true }}
                            >ในหลากหลายอุตสาหกรรม</motion.p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                viewport={{ once: true }}
                            >99%</motion.div>
                            <motion.h3
                                className="text-lg font-medium mb-1  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                                viewport={{ once: true }}
                            >ความพึงพอใจของลูกค้า</motion.h3>
                            <motion.p
                                className="text-gray-600 dark:text-gray-400 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                viewport={{ once: true }}
                            >จากรีวิวของลูกค้า</motion.p>
                        </motion.div>

                        <motion.div
                            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                        >
                            <motion.div
                                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                viewport={{ once: true }}
                            >2+</motion.div>
                            <motion.h3
                                className="text-lg font-medium mb-1  text-gray-800 dark:text-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                viewport={{ once: true }}
                            >ปีที่เชี่ยวชาญการใช้ Next.js</motion.h3>
                            <motion.p
                                className="text-gray-600 dark:text-gray-400 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                                viewport={{ once: true }}
                            >การพัฒนาแอพพลิเคชั่นที่ทันสมัย</motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://drive.usercontent.google.com/u/1/uc?id=1VXcO7g9vZA65tqCEjrJ9N4GDKrmV0WZ4&export=download"
                            download="Rittirat_Moonwong_CV.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>ดาวน์โหลด CV</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}