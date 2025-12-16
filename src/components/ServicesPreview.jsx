import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, ShieldCheck, Code, Database, Cpu } from 'lucide-react';

const ServicesPreview = () => {
    const services = [
        {
            icon: <Server className="w-8 h-8" />,
            title: "Enterprise Network",
            desc: "Robust LAN/WAN design and infrastructure deployment."
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Solutions",
            desc: "Secure migration and multi-cloud management strategies."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Cybersecurity",
            desc: "Advanced threat detection and ethical hacking audits."
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Custom Development",
            desc: "Scalable web and mobile applications tailored to your needs."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Data Analytics",
            desc: "ERP, CRM, and BI dashboards for smarter decisions."
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Managed IT",
            desc: "24/7 Support and proactive system monitoring."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className=" font-bold text-4xl text-slate-900 mb-4">Our Core Capabilities</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-80" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className=" font-bold text-2xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className=" text-lg text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;