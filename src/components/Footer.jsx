import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative text-slate-300 py-12 sm:py-16 md:py-20 text-center overflow-hidden">

            <div className="absolute inset-0 opacity-30">
                <div className="absolute bottom-0 left-0 right-0 h-[70%]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(168, 85, 247, 0.4) 2px, transparent 2px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.4) 2px, transparent 2px),
                            linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
                    }}>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60%]">
                <div className="absolute bottom-0 left-1/4 w-0.5 sm:w-1 h-full bg-linear-to-t from-purple-500/50 via-purple-500/20 to-transparent blur-sm"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 sm:w-1 h-full bg-linear-to-t from-purple-400/60 via-purple-400/30 to-transparent blur-md"></div>
                <div className="absolute bottom-0 left-3/4 w-0.5 sm:w-1 h-full bg-linear-to-t from-purple-500/50 via-purple-500/20 to-transparent blur-sm"></div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-10 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="absolute bottom-0 left-0 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-purple-500/50 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-purple-500/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">

                <div className="h-1 w-16 sm:w-20 md:w-24 bg-linear-to-r from-purple-300 to-purple-700 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg shadow-purple-500/50"></div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
                    Let's get in <span className="text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">touch</span>
                </h2>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto px-4">
                    Feel free to reach out for collaborations or opportunities
                </p>

                <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 flex-wrap px-2">
                    <a
                        href="https://github.com/farissikira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-purple-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
                        <div className="relative p-3 sm:p-4 md:p-5 bg-linear-to-br from-purple-500/10 to-pink-500/10 
                            border-2 border-purple-500/30 rounded-lg sm:rounded-xl
                            hover:border-purple-400 hover:scale-105 sm:hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <FaGithub className="text-xl sm:text-2xl md:text-3xl text-purple-300 group-hover:text-white transition-colors" />
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/faris-sikira-398436295/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:bg-blue-500/40 transition-all duration-300"></div>
                        <div className="relative p-3 sm:p-4 md:p-5 bg-linear-to-br from-blue-500/10 to-purple-500/10 
                            border-2 border-blue-500/30 rounded-lg sm:rounded-xl
                            hover:border-blue-400 hover:scale-105 sm:hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <FaLinkedin className="text-xl sm:text-2xl md:text-3xl text-blue-300 group-hover:text-white transition-colors" />
                        </div>
                    </a>

                    <a
                        href="https://www.instagram.com/fsikira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-purple-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:bg-purple-500/40 transition-all duration-300"></div>
                        <div className="relative p-3 sm:p-4 md:p-5 bg-linear-to-br from-pink-500/10 to-purple-500/10 
                            border-2 border-purple-300/30 rounded-lg sm:rounded-xl
                            hover:border-purple-200 hover:scale-105 sm:hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <FaInstagram className="text-xl sm:text-2xl md:text-3xl text-pink-300 group-hover:text-white transition-colors" />
                        </div>
                    </a>
                </div>

                <div className="h-px w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-linear-to-r from-transparent via-purple-500/30 to-transparent mb-6 sm:mb-8"></div>

                <div className="space-y-1 sm:space-y-2">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">
                        © 2026 Faris Sikira
                    </p>
                </div>
            </div>
        </footer>
    );
}