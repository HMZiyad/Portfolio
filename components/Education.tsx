"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    My <span className="text-secondary">Education</span>
                </motion.h2>

                <div className="grid gap-8">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary/10 rounded-full text-secondary group-hover:bg-secondary/20 transition-colors">
                                        <GraduationCap size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
                                        <p className="text-lg text-secondary">{item.degree}</p>
                                    </div>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300 font-medium whitespace-nowrap">
                                    {item.period}
                                </span>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
