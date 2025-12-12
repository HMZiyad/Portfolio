"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Work <span className="text-secondary">Experience</span>
                </motion.h2>

                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#ff0080]" />

                            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-secondary" />
                                        {item.role}
                                    </h3>
                                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                        {item.period}
                                    </span>
                                </div>

                                <h4 className="text-lg text-secondary font-semibold mb-2">{item.company}</h4>
                                <p className="text-gray-300 leading-relaxed mb-2">{item.description}</p>
                                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
                                    {item.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
