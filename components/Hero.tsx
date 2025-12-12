"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-20 blur-[128px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-20 blur-[128px] rounded-full animate-pulse delay-1000" />
            </div>

            <div className="z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary font-medium tracking-widest uppercase mb-4"
                >
                    Welcome to my portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-primary drop-shadow-lg"
                >
                    {personalInfo.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-300 font-light"
                >
                    I am a <span className="text-primary font-semibold">Software Engineer</span> &{" "}
                    <span className="text-accent font-semibold">AI Specialist</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex justify-center gap-4"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,128,0.5)]">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-secondary text-secondary font-bold hover:bg-secondary/10 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
