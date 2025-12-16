import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

// Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    const scrollToForm = () => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white">
            {/* Bright Tech Background */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <img
                    src="/main-coming-soon-photo.jpg"
                    alt="Modern Bright Office Infrastructure"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
            </motion.div>

            {/* Navigation Layer */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-10">
                <div className="container mx-auto">
                    <Logo />
                </div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 relative z-10 pt-32">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl"
                >
                    <motion.div variants={fadeInUp} className="mb-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase  shadow-sm">
                            Launch in Progress
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className=" font-bold text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-8 drop-shadow-sm"
                    >
                        Intelligent Systems. <br />
                        <span className="text-blue-600">Ever Evolving.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className=" text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl leading-relaxed"
                    >
                        We are architecting the next generation of secure, scalable ICT infrastructure for modern enterprises.
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <button
                            onClick={scrollToForm}
                            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full  font-bold text-lg shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center gap-3"
                        >
                            Request Early Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;