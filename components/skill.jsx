import { motion } from 'framer-motion';
import Htmlcon from './icons/Htmlcon';
import ReactIcon from './icons/ReactIcon';
import JavaIcon from './icons/JavaIcon';
import NodeIcon from './icons/NodeIcon';
import TailwindIcon from './icons/TailwindIcon';
import DatabaseIcon from './icons/DatabaseIcon';
export default function Skill() {
    const skills = [
        { name: "HTML & CSS", description: "Semantic markup, responsive layouts, animations", icon: <Htmlcon /> },
        { name: "JavaScript & TypeScript", description: "async/await, type safety, DOM manipulation", icon: <JavaIcon /> },
        { name: "React & Next.js", description: "Hooks, context API, server components, SSR/SSG", icon: <ReactIcon /> },
        { name: "Node.js", description: "REST APIs, middleware, authentication, WebSockets", icon: <NodeIcon /> },
        { name: "Tailwind CSS ", description: "Utility-first approach, responsive design, custom themes", icon: <TailwindIcon /> },
        { name: "SQL", description: "Data modeling, indexing, queries, aggregation pipelines", icon: <DatabaseIcon /> },
    ];

    const tools = [
        { name: "VS Code" },
        { name: "Canva" },
        { name: "Figma" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "WordPress" },
        { name: "Adobe Photoshop" },
        { name: "PostgreSQL" },
        { name: "phpMyAdmin" }
    ]

    return (
        <div className="max-w-6xl mx-auto px-6">
            <motion.h2
                className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >My Skills </motion.h2>

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
                        className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3 text-gray-800 dark:text-gray-100"
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
                        {skills.map((i, index) => (
                            <div
                                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
                                key={index}
                            >
                                <div className="flex items-center">
                                    {i.icon}
                                    <h4 className="font-medium dark:text-white text-black">{i.name}</h4>
                                </div>
                                <div className="mt-2 pl-3 border-l-2 border-red-200 dark:border-red-700/50">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{i.description}</p>
                                </div>
                            </div>
                        ))}


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
                        className="text-xl font-semibold mb-6 border-l-4 border-indigo-600 pl-3 text-gray-800 dark:text-gray-100"
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
                        <div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"

                        >
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">การออกแบบ UI/UX</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">สร้างอินเทอร์เฟซที่ใช้งานง่ายโดยเน้นประสบการณ์ของผู้ใช้และการเข้าถึง</p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">การจัดการโครงการ</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">บริหารโครงการ ร่วมมือกับทีม วิธีการ agile และการส่งมอบตามกำหนดเวลา</p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">การสื่อสาร</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">การสื่อสารที่ชัดเจนและมีประสิทธิภาพกับลูกค้าและทีมงาน</p>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border-t-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300 ">
                            <div className="flex items-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">การแก้ไขปัญหา</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">สร้างสรรค์วิธีแก้ปัญหาที่ซับซ้อนด้วยการคิดวิเคราะห์</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.h3
                            className="text-xl font-semibold mb-4 border-l-4 border-indigo-600 pl-3 text-gray-800 dark:text-gray-100"
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
                            {tools.map((tool, index) => (
                                <motion.span
                                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-100"
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                >{tool.name}</motion.span>
                            ))}
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