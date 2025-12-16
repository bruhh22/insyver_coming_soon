// import React from 'react';
// import ContactInfo from './ContactInfo';
// import Logo from './Logo';

// const LOGO_IMG_SRC = "/transparent_main_logo.png";

// const Footer = () => {
//     return (
//         <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
//             <div className="container mx-auto px-6">
//                 <div className="flex flex-col md:flex-row justify-between items-center mb-8">

//                     <div className="relative">
//                         <img
//                             src={LOGO_IMG_SRC}
//                             alt="Insyver Technologies"
//                             className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
//                             onError={(e) => { e.target.style.display = 'none'; }}
//                         />
//                     </div>

//                     <div className="mb-4 md:mb-0 text-center md:text-left">
//                         <h4 className="font-old-standard font-bold text-xl text-slate-900">Insyver Technologies</h4>
//                         <p className="font-joly text-slate-500 text-sm">(OPC) Pvt. Ltd.</p>
//                     </div>
//                     {/* <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-10">
//                         <div className="container mx-auto">
//                             <Logo />
//                         </div>
//                     </div> */}

//                     {/* Imported Contact Info Component */}
//                     <ContactInfo />
//                 </div>

//                 <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-joly">
//                     <p>&copy; 2025 Insyver Technologies. All rights reserved.</p>
//                     <div className="flex gap-6 mt-4 md:mt-0">
//                         <a href="#" className="hover:text-slate-600">Privacy Policy</a>
//                         <a href="#" className="hover:text-slate-600">Terms of Service</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import ContactInfo from './ContactInfo';

// Note: Ensure this path is correct for your project setup
const LOGO_IMG_SRC = "/transparent_main_logo.png";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">

                    {/* --- FIX START: Group Image and Text together --- */}
                    <div className="flex items-center gap-4 mb-6 md:mb-0">
                        {/* Logo Image */}
                        <div className="relative">
                            <img
                                src={LOGO_IMG_SRC}
                                alt="Insyver Technologies"
                                className="h-10 md:h-12 w-auto object-contain"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>

                        {/* Logo Text */}
                        <div className="text-center items-center">
                            <h4 className="font-old-standard font-bold text-xl text-slate-900 leading-tight">
                                Insyver Technologies
                            </h4>
                            <p className="-mt-1 font-joly text-slate-500 text-sm">
                                (OPC) Pvt. Ltd.
                            </p>
                        </div>
                    </div>
                    {/* --- FIX END --- */}

                    {/* Contact Info stays separate so 'justify-between' pushes it to the right */}
                    <ContactInfo />
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 ">
                    <p>&copy; 2025 Insyver Technologies. (OPC) Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;