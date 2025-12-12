"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Trophy } from "lucide-react";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Awards & <span className="text-primary">Achievements</span>
                </motion.h2>

                <div className="grid gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-6 rounded-xl flex items-center gap-6 border-l-4 border-l-primary group"
                        >
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Trophy size={24} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
