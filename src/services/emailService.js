import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS keys from .env
// const SERVICE_ID = "YOUR_SERVICE_ID";
// const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendLeadData = async (data) => {
    try {
        // For now, we simulate the API call to match your current logical flow
        // To enable real sending, uncomment the emailjs block below

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            company: data.company,
            message: "New Lead from Coming Soon Page"
        };
        return await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);


        // Simulation
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         console.log("Lead Data Captured:", data);
        //         resolve({ status: 200, text: "OK" });
        //     }, 1000);
        // });

    } catch (error) {
        throw error;
    }
};