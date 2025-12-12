"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        Let's Build the Future
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Open for collaborations, new opportunities, or just a chat about AI and Tech.
                    </p>

                    <a
                        href={personalInfo.socials.find(s => s.name === "Email")?.href || "mailto:contact@example.com"}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:scale-105 hover:shadow-[0_0_30px_#ff0080] transition-all"
                    >
                        <Mail size={20} />
                        Get In Touch
                    </a>
                </motion.div>

                <div className="flex justify-center gap-8 mb-12">
                    {personalInfo.socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-secondary transition-all"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    <p className="mt-2">Built with Next.js, TRPC, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
}
