import React from 'react';

const LOGO_IMG_SRC = "/transparent_main_logo.png";

const Logo = () => {
    // You can replace this string with `import logo from '../assets/logo/insyver-logo.svg'`
    // const LOGO_IMG_SRC = "https://via.placeholder.com/150";
    //const LOGO_IMG_SRC = "assets/images/transparent_main_logo.png";
    return (
        <div className="flex items-center gap-3 cursor-pointer group select-none">
            <div className="relative">
                <img
                    src={LOGO_IMG_SRC}
                    alt="Insyver Technologies"
                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

            <div className="flex flex-col items-center justify-center text-slate-900">
                <h1 className="text-lg md:text-2xl font-bold leading-none tracking-tight font-old-standard">
                    Insyver Technologies
                </h1>
                {/* <div className="flex flex-col leading-none mt-1"> */}
                <span className="-mt-1 text-[10px] md:text-xs font-bold tracking-wide font-joly-text text-slate-600">
                    (OPC) Pvt. Ltd.
                </span>
                {/* <span className=" text-[9px] md:text-[10px] font-bold tracking-widest uppercase font-old-standard text-blue-600">
                    An ICT Infrastructure Company
                </span> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Logo;