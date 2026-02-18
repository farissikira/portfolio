import { FaDownload, FaLaptopCode } from "react-icons/fa";
import cv from "../assets/CV Faris Sikira English.pdf";

export default function Header() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 overflow-hidden bg-black">

            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 right-0 h-[70%]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                    }}>
                </div>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%]">
                <div className="absolute top-0 left-1/4 w-0.5 sm:w-1 h-full bg-linear-to-b from-blue-500/50 via-blue-500/20 to-transparent blur-sm"></div>
                <div className="absolute top-0 left-1/2 w-0.5 sm:w-1 h-full bg-linear-to-b from-blue-400/60 via-blue-400/30 to-transparent blur-md"></div>
                <div className="absolute top-0 left-3/4 w-0.5 sm:w-1 h-full bg-linear-to-b from-blue-500/50 via-blue-500/20 to-transparent blur-sm"></div>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-blue-950/30 via-black/50 to-black pointer-events-none"></div>

            <div className="absolute top-10 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="absolute top-0 left-0 w-20 sm:w-40 h-20 sm:h-40 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-500/50 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-40 h-20 sm:h-40 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-blue-500/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center px-2 sm:px-4">

                <div className="inline-flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                    bg-linear-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm 
                    border border-blue-500/30 shadow-lg shadow-blue-500/20
                    hover:border-blue-400/50 transition-all duration-300">
                    <FaLaptopCode className="text-blue-400 text-lg sm:text-2xl animate-pulse" />
                    <h2 className="text-base sm:text-xl font-semibold text-blue-300 tracking-wide">Hi, I am</h2>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight relative">
                    <span className="relative inline-block">
                        <span className="absolute inset-0 blur-2xl bg-linear-to-r from-blue-500 to-blue-600 opacity-50"></span>
                        <span className="relative bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            Faris Sikira
                        </span>
                    </span>
                </h1>

                <div className="relative mb-6 sm:mb-8 px-2">
                    <p className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mb-4 leading-tight max-w-4xl">
                        <span className="text-blue-400">Creating efficient</span>,{" "}
                        <span className="text-blue-300">scalable,</span><span className="hidden xs:inline"> and</span>{" "}
                        <br className="hidden xs:block sm:hidden" />
                        <span className="text-blue-400">visually engaging</span>
                        <br className="hidden sm:block" />
                        <span className="text-white">software solutions</span>
                        <span className="text-blue-500">.</span>
                    </p>

                    <div className="relative h-1 w-20 sm:w-24 md:w-32 mx-auto">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-600 rounded-full blur-md opacity-70"></div>
                        <div className="relative h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>
                </div>

                <div className="mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10
                    hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300">
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                        Kakanj, Bosnia and Herzegovina
                    </p>
                </div>

                <a
                    href={cv}
                    download
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl
                    bg-linear-to-r from-blue-600 to-blue-700 
                    hover:from-blue-500 hover:to-blue-600
                    text-white font-bold text-sm sm:text-base md:text-lg
                    transition-all duration-300 
                    shadow-2xl shadow-blue-500/50
                    hover:shadow-blue-400/70 hover:scale-105
                    border-2 border-blue-400/50 hover:border-blue-300
                    overflow-hidden"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    <FaDownload className="text-base sm:text-lg md:text-xl relative z-10" />
                    <span className="relative z-10 font-medium">Download CV</span>

                    <div className="absolute -inset-1 rounded-xl blur-xl bg-blue-500/30 group-hover:bg-blue-400/50 transition-all -z-10"></div>
                </a>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-30 md:h-40 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
}