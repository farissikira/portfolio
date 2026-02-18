import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import uniBg from "../assets/AboutPic1.jpg";
import skillsBg from "../assets/AboutPic2.avif";
import improveskillsBg2 from "../assets/AboutPic3.webp";
import hobbyBg from "../assets/AboutPic5.jpg";
import goalBg from "../assets/AboutPic4.webp";
import { FiCopy } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";

export default function About() {
    const [copied, setCopied] = useState(false);
    const email = "faris.siki2@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

    };

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

                <div
                    className="group md:col-span-2 relative rounded-3xl shadow-2xl overflow-hidden flex items-end p-6 sm:p-8 md:p-10 min-h-62.5 sm:min-h-75 md:min-h-87.5 lg:min-h-100
                    border-2 border-blue-500/20 hover:border-blue-400/50 transition-all duration-500
                    hover:shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-1"
                    style={{
                        backgroundImage: `url(${uniBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20 
                        group-hover:from-black/70 transition-all duration-500"></div>

                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>

                    <div className="relative z-10 text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 
                            group-hover:text-blue-50 transition-colors duration-300
                            drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                            International University of Sarajevo
                        </h2>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="h-1 w-8 sm:w-10 md:w-12 bg-blue-500 rounded-full"></div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-bold
                                group-hover:text-blue-300 transition-colors duration-300
                                drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
                                Software Engineering
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:col-span-1">

                    <div
                        className="group relative rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 min-h-50 sm:min-h-62.5 md:min-h-75
                        border-2 border-blue-500/20 hover:border-blue-400/50 transition-all duration-500
                        hover:shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-1"
                        style={{
                            backgroundImage: `url(${skillsBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>

                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-blue-500 rounded-full"></div>
                                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl drop-shadow-lg">Tech Skills</h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    C++
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    C#
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    Java
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    React
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    Tailwind
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    SQL
                                </span>
                                <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-blue-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-blue-500/30 hover:border-blue-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    Git
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 min-h-45 sm:min-h-50 md:min-h-62.5
                        border-2 border-purple-500/20 hover:border-purple-400/50 transition-all duration-500
                        hover:shadow-purple-500/30 hover:shadow-2xl hover:-translate-y-1"
                        style={{
                            backgroundImage: `url(${improveskillsBg2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>

                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between h-full gap-4 sm:gap-6">
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4 md:mt-6">
                                <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium drop-shadow-lg">
                                    I constantly try to improve
                                </p>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-1.5 sm:w-2 h-6 sm:h-8 md:h-10 bg-purple-500 rounded-full"></div>
                                    <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl drop-shadow-lg">Tech Skills</h3>
                                </div>
                            </div>

                            <div className="flex flex-row md:flex-col gap-2 sm:gap-3 md:gap-4 justify-center md:items-end">
                                <span className="px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-purple-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-purple-500/30 hover:border-purple-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    Python
                                </span>
                                <span className="px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full border-2 border-purple-400/60 text-white font-semibold text-xs sm:text-sm
                                    bg-black/30 backdrop-blur-sm hover:bg-purple-500/30 hover:border-purple-300 
                                    hover:scale-110 transition-all duration-300 shadow-lg">
                                    Angular
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">

                <div
                    className="group relative rounded-3xl overflow-hidden p-6 sm:p-8 md:p-10 min-h-50 sm:min-h-62.5 md:min-h-75 w-full
    border-2 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500
    hover:shadow-cyan-500/30 hover:shadow-2xl hover:-translate-y-1"
                    style={{
                        backgroundImage: `url(${hobbyBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70
        group-hover:from-black/60 group-hover:via-black/40 transition-all duration-500"></div>

                    <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-cyan-500/60 rounded-tl-3xl"></div>

                    <div className="relative z-10 text-left flex flex-col items-center h-full">
                        <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 md:mt-4 leading-relaxed drop-shadow-lg
            group-hover:text-cyan-50 transition-colors text-center">
                            I focus on solving complex problems and building modern applications
                        </p>
                        <div className="h-0.5 w-12 sm:w-14 md:w-16 bg-cyan-500 my-3 sm:my-4 rounded-full"></div>
                        <p className="text-gray-200 font-medium text-base sm:text-lg md:text-xl mt-2 sm:mt-3 leading-relaxed drop-shadow-lg mb-6 text-center">
                            I value open communication and collaborative work to deliver impactful solutions
                        </p>

                        <button
                            onClick={copyEmail}
                            className="group/btn relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl
                border-2 border-blue-400/60 hover:border-blue-300
                text-white hover:text-white
                font-semibold text-sm sm:text-base
                transition-all duration-300 
                hover:shadow-lg hover:shadow-cyan-500/30
                
                overflow-hidden bg-transparent
                backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                            {copied ? (
                                <>
                                    <FaCheck className="text-sm sm:text-base relative z-10" />
                                    <span className="relative z-10">Email is copied!</span>
                                </>
                            ) : (
                                <>
                                    <FiCopy className="text-sm sm:text-base relative z-10" />
                                    <span className="relative z-10">Copy my email address</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className="group relative rounded-3xl overflow-hidden p-6 sm:p-8 md:p-10 min-h-50 sm:min-h-62.5 md:min-h-75 w-full
                    border-2 border-blue-500/20 hover:border-blue-400/50 transition-all duration-500
                    hover:shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-1"
                    style={{
                        backgroundImage: `url(${goalBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/70
                        group-hover:from-black/60 group-hover:via-black/40 transition-all duration-500"></div>

                    <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-blue-500/60 rounded-tr-3xl"></div>

                    <div className="relative z-10 text-left">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="w-1.5 sm:w-2 h-6 sm:h-8 md:h-10 bg-blue-500 rounded-full"></div>
                            <h3 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">Goals</h3>
                        </div>

                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                            <div className="flex items-start gap-2 sm:gap-3 group/item">
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform"></div>
                                <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg
                                    group-hover/item:text-blue-100 transition-colors">
                                    Continue to improve my technical skills in software engineering
                                </p>
                            </div>

                            <div className="flex items-start gap-2 sm:gap-3 group/item">
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform"></div>
                                <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg
                                    group-hover/item:text-blue-100 transition-colors">
                                    Contribute to open-source projects and collaborate with diverse teams
                                </p>
                            </div>

                            <div className="flex items-start gap-2 sm:gap-3 group/item">
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 group-hover/item:scale-150 transition-transform"></div>
                                <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-lg
                                    group-hover/item:text-blue-100 transition-colors">
                                    Build applications that solve real-world problems and make a positive impact
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}