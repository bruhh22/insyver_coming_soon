import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle2 } from 'lucide-react';
import { sendLeadData } from '../services/emailService';

const LeadForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data) => {
        await sendLeadData(data);
        setIsSubmitted(true);
    };

    return (
        <section id="lead-form" className="py-24 relative overflow-hidden">
            {/* Background Abstract shapes */}
            <div className="absolute inset-0 bg-white z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50">

                    <div className="text-center mb-10">
                        <h2 className=" font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                            Be the First to Transform
                        </h2>
                        <p className=" text-xl text-slate-600">
                            Join our exclusive list for early access and priority consultation.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-10"
                            >
                                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className=" font-bold text-2xl text-slate-900">Thank You!</h3>
                                <p className=" text-lg text-slate-600 mt-2">We will be in touch shortly.</p>
                                <button
                                    onClick={() => { setIsSubmitted(false); reset(); }}
                                    className="mt-6 text-blue-600 font-bold hover:underline"
                                >
                                    Send another request
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <div className="col-span-1">
                                    <label className="block text-sm  font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-sm  font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1">Valid email required</span>}
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm  font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Name</label>
                                    <input
                                        {...register("company")}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Insyver Corp"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2 mt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-slate-900 hover:bg-blue-600 text-white  font-bold text-lg py-4 rounded-lg shadow-lg transition-colors duration-300"
                                    >
                                        Notify Me
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default LeadForm;