import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="flex gap-6">
            <a href="mailto:info@insyver.com" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Mail size={20} />
            </a>
            <a href="tel:+919899213865" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Phone size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <MapPin size={20} />
            </a>
        </div>
    );
};

export default ContactInfo;