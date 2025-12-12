"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-20 relative px-6">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-6 rounded-2xl md:text-lg leading-relaxed text-gray-300">
                            <p className="mb-4">
                                I am a passionate <span className="text-secondary font-bold">Software Engineer</span> and <span className="text-accent font-bold">AI Enthusiast</span> specialized in building intelligent systems.
                            </p>
                            <p className="mb-4">
                                My journey spans from low-level programming in <code className="bg-primary/20 px-1 rounded text-primary">C++</code> to modern full-stack web apps with <code className="bg-secondary/20 px-1 rounded text-secondary">Next.js</code>.
                            </p>
                            <p>
                                Currently diving deep into <b>Generative AI</b> and <b>RAG Pipelines</b>.
                            </p>
                        </div>

                        {/* Learning Focus */}
                        <div className="glass-card p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4 text-white">Current Focus</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>Advanced System Design</li>
                                <li>Cloud Native Architecture</li>
                                <li>AI-powered EdTech Solutions</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, borderColor: skill.color }}
                                className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-transparent hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all"
                                style={{ "--hover-color": skill.color } as React.CSSProperties} // Custom property approach or just use inline style for border/shadow if complexity increases
                            >
                                <span className="font-bold text-lg" style={{ color: skill.color }}>{skill.name}</span>
                                <span className="text-xs text-gray-500">{skill.level}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
