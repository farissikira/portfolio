import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

import hairImg from "../assets/Project1Pic.JPG";
import todoImg from "../assets/Project2Pic.JPG";
import snakeImg from "../assets/ProjectsPic3.jpg";

export default function Projects() {
    return (
        <section className="text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-center px-2">
                    Some of my interesting <span className="text-transparent bg-linear-to-r from-blue-400 to-blue-900 bg-clip-text">projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

                    <a
                        href="https://github.com/farissikira/Hair-Salon-Web-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-100 sm:h-112.5 md:h-125 lg:h-137.5 flex flex-col justify-between 
                                   transition-all duration-500 
                                   hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] md:hover:scale-[1.02]
                                   border-2 border-blue-500/30 hover:border-blue-400/60
                                   rounded-2xl sm:rounded-3xl shadow-2xl 
                                   hover:shadow-blue-500/40 hover:shadow-2xl
                                   overflow-hidden
                                   bg-linear-to-br from-slate-900/50 to-slate-800/50
                                   backdrop-blur-sm"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>

                        <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-blue-500/60 rounded-tl-2xl sm:rounded-tl-3xl"></div>

                        <div className="relative h-1/2 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                            <img
                                src={hairImg}
                                alt="Hair Salon"
                                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 
                                group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/60 transition-all duration-500"></div>

                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/30 backdrop-blur-md rounded-full 
                                border border-blue-400/50 text-[10px] sm:text-xs font-semibold text-blue-200">
                                Full-Stack
                            </div>
                        </div>

                        <div className="relative p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 bg-linear-to-b from-transparent to-black/20">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-blue-500 rounded-full mt-1"></div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                    Hair Salon Web App
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-blue-400 text-xl sm:text-2xl md:text-3xl">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <FaReact />
                                </div>
                                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <FaNodeJs />
                                </div>
                                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <SiMysql />
                                </div>
                                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <SiTailwindcss />
                                </div>
                            </div>

                            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                Full-stack booking system with online appointment scheduling,
                                built with scalable architecture and modern UI principles.
                            </p>
                        </div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 sm:gap-2 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 
                            bg-black/70 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-white/30
                            hover:bg-black/90 hover:border-blue-400/50">
                            <FaGithub className="text-white text-sm sm:text-base md:text-lg" />
                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold">View on GitHub</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>

                    <a
                        href="https://github.com/farissikira/to-do"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-100 sm:h-112.5 md:h-125 lg:h-137.5 flex flex-col justify-between 
                                   transition-all duration-500 
                                   hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] md:hover:scale-[1.02]
                                   border-2 border-cyan-500/30 hover:border-cyan-400/60
                                   rounded-2xl sm:rounded-3xl shadow-2xl 
                                   hover:shadow-cyan-500/40 hover:shadow-2xl
                                   overflow-hidden
                                   bg-linear-to-br from-slate-900/50 to-slate-800/50
                                   backdrop-blur-sm"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></div>

                        <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-cyan-500/60 rounded-tr-2xl sm:rounded-tr-3xl"></div>

                        <div className="relative h-1/2 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                            <img
                                src={todoImg}
                                alt="To Do App"
                                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 
                                group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/60 transition-all duration-500"></div>

                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/30 backdrop-blur-md rounded-full 
                                border border-cyan-400/50 text-[10px] sm:text-xs font-semibold text-cyan-200">
                                Frontend
                            </div>
                        </div>

                        <div className="relative p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 bg-linear-to-b from-transparent to-black/20">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-cyan-500 rounded-full mt-1"></div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    To-Do App
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-cyan-400 text-xl sm:text-2xl md:text-3xl">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <FaReact />
                                </div>
                                <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 
                                    hover:scale-110 transition-all duration-300">
                                    <SiTailwindcss />
                                </div>
                            </div>

                            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                Modern task management application built with reusable components
                                and clean React architecture.
                            </p>
                        </div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 sm:gap-2 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 
                            bg-black/70 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-white/30
                            hover:bg-black/90 hover:border-cyan-400/50">
                            <FaGithub className="text-white text-sm sm:text-base md:text-lg" />
                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold">View on GitHub</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>

                </div>

                <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
                    <a
                        href="https://github.com/farissikira/Snake-Game"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-100 sm:h-112.5 md:h-125 lg:h-137.5 w-full max-w-lg flex flex-col justify-between 
                                   transition-all duration-500 
                                   hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] md:hover:scale-[1.02]
                                   border-2 border-purple-500/30 hover:border-purple-400/60
                                   rounded-2xl sm:rounded-3xl shadow-2xl 
                                   hover:shadow-purple-500/40 hover:shadow-2xl
                                   overflow-hidden
                                   bg-linear-to-br from-slate-900/50 to-slate-800/50
                                   backdrop-blur-sm"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

                        <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-purple-500/60 rounded-tl-2xl sm:rounded-tl-3xl"></div>
                        <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-purple-500/60 rounded-tr-2xl sm:rounded-tr-3xl"></div>

                        <div className="relative h-1/2 w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                            <img
                                src={snakeImg}
                                alt="Snake Game"
                                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 
                                group-hover:from-black/40 group-hover:via-black/20 group-hover:to-black/60 transition-all duration-500"></div>

                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/30 backdrop-blur-md rounded-full 
                                border border-purple-400/50 text-[10px] sm:text-xs font-semibold text-purple-200">
                                Console Game
                            </div>
                        </div>

                        <div className="relative p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 bg-linear-to-b from-transparent to-black/20">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-purple-500 rounded-full mt-1"></div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                    Snake Game
                                </h3>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="px-3 sm:px-4 py-1 sm:py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 
                                    hover:bg-purple-500/20 hover:scale-105 transition-all duration-300">
                                    <p className="text-purple-400 text-lg sm:text-xl md:text-2xl font-bold">C#</p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                Classic Snake game implementation featuring collision detection,
                                smooth movement logic and score tracking.
                            </p>
                        </div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 sm:gap-2 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 
                            bg-black/70 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full border border-white/30
                            hover:bg-black/90 hover:border-purple-400/50">
                            <FaGithub className="text-white text-sm sm:text-base md:text-lg" />
                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold">View on GitHub</span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                </div>

            </div>
        </section>
    );
}