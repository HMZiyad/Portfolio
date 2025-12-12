"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/data";
import { Users, Award, Star } from "lucide-react";

export default function Leadership() {
    return (
        <section id="leadership" className="py-20 px-6 relative bg-gradient-to-b from-transparent to-black/30">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Positions of <span className="text-accent">Responsibility</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all" />

                            <div className="relative z-10">
                                <div className="flex items-start gap-3 mb-4 text-accent">
                                    <Star size={28} className="mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.role}</h3>
                                        <h4 className="text-lg font-medium text-gray-400 mt-1">
                                            {item.organization}
                                        </h4>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-400 mb-4 bg-white/5 inline-block px-3 py-1 rounded-full">
                                    {item.period}
                                </p>

                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
