import taImg from "../assets/ExperiencePic1.png";
import snImg from "../assets/ExperiencePic2.png";
import cdImg from "../assets/ExperiencePic3.png";
import yesImg from "../assets/ExperiencePic4.png";

export default function Experience() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 text-slate-200">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center text-white px-2">
                    Experience and <span className="text-transparent bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text">Achievements</span>
                </h2>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block -translate-x-1/2 opacity-30 blur-sm"></div>
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-blue-400 via-purple-400 to-blue-400 hidden md:block -translate-x-1/2"></div>

                    <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">

                        <div className="relative md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
                            <div className="md:pr-8 lg:pr-12 mb-6 md:mb-0">
                                <div className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                                    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6">
                                        <div className="shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                                            <img
                                                src={taImg}
                                                alt="Teaching Assistant"
                                                className="w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/20 rounded-full text-[10px] sm:text-xs text-blue-300 mb-2 sm:mb-3 border border-blue-500/30">
                                                Academic
                                            </div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-blue-400 transition-colors">
                                                Teaching Assistant - Introduction to Programming
                                            </h3>
                                            <p className="text-slate-400 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                                                International University of Sarajevo
                                            </p>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                                Assisted students in mastering C++ fundamentals and object-oriented programming.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block"></div>

                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="w-4 lg:w-6 h-4 lg:h-6 bg-blue-500 rounded-full border-2 lg:border-4 border-slate-900 shadow-lg shadow-blue-500/50 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="relative md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
                            <div className="hidden md:block"></div>

                            <div className="md:pl-8 lg:pl-12 mb-6 md:mb-0">
                                <div className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                                    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6">
                                        <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
                                            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 rounded-full text-[10px] sm:text-xs text-purple-300 mb-2 sm:mb-3 border border-purple-500/30">
                                                Professional
                                            </div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-purple-400 transition-colors">
                                                ServiceNow Academy – Deloitte
                                            </h3>
                                            <p className="text-slate-400 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                                                Academy Participant
                                            </p>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                                Worked on weekly JavaScript-based projects and developing solutions on the ServiceNow platform during the Deloitte ServiceNow Academy.
                                                Improved teamwork and time management skills while balancing academic responsibilities.
                                            </p>
                                        </div>

                                        <div className="shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 border-purple-500/30 group-hover:border-purple-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 order-1 sm:order-2">
                                            <img
                                                src={snImg}
                                                alt="ServiceNow Academy"
                                                className="w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="w-4 lg:w-6 h-4 lg:h-6 bg-purple-500 rounded-full border-2 lg:border-4 border-slate-900 shadow-lg shadow-purple-500/50 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="relative md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
                            <div className="md:pr-8 lg:pr-12 mb-6 md:mb-0">
                                <div className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                                    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6">
                                        <div className="shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                                            <img
                                                src={cdImg}
                                                alt="CoderDojo"
                                                className="w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="flex-1 text-center sm:text-left">
                                            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/20 rounded-full text-[10px] sm:text-xs text-cyan-300 mb-2 sm:mb-3 border border-cyan-500/30">
                                                Mentorship
                                            </div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                                CoderDojo BitAlliance
                                            </h3>
                                            <p className="text-slate-400 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                                                Mentor
                                            </p>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                                Taught Python fundamentals to elementary and high school students, developing strong mentoring and communication skills.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block"></div>

                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="w-4 lg:w-6 h-4 lg:h-6 bg-cyan-500 rounded-full border-2 lg:border-4 border-slate-900 shadow-lg shadow-cyan-500/50 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="relative md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
                            <div className="hidden md:block"></div>

                            <div className="md:pl-8 lg:pl-12">
                                <div className="group relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 sm:hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

                                    <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6">
                                        <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
                                            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/20 rounded-full text-[10px] sm:text-xs text-purple-300 mb-2 sm:mb-3 border border-purple-500/30">
                                                Scholarship
                                            </div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-white group-hover:text-purple-300 transition-colors">
                                                YES Program Alumni
                                            </h3>
                                            <p className="text-slate-400 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
                                                Scholarship Student
                                            </p>
                                            <p className="text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm">
                                                Lexington, VA, USA
                                            </p>

                                            <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                                                <div className="flex items-start gap-1.5 sm:gap-2">
                                                    <span className="text-pink-400 mt-0.5 sm:mt-1">•</span>
                                                    <p>Completed junior year of high school as a scholarship student in the USA.</p>
                                                </div>
                                                <div className="flex items-start gap-1.5 sm:gap-2">
                                                    <span className="text-pink-400 mt-0.5 sm:mt-1">•</span>
                                                    <p>Received Honor Certificate of Distinction.</p>
                                                </div>
                                                <div className="flex items-start gap-1.5 sm:gap-2">
                                                    <span className="text-purple-400 mt-0.5 sm:mt-1">•</span>
                                                    <p>30+ hours of volunteer work.</p>
                                                </div>
                                                <div className="flex items-start gap-1.5 sm:gap-2">
                                                    <span className="text-purple-400 mt-0.5 sm:mt-1">•</span>
                                                    <p>Named Best Basketball Player of the Year.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shrink-0 overflow-hidden rounded-lg sm:rounded-xl border-2 border-purple-400 group-hover:border-purple-400/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 order-1 sm:order-2">
                                            <img
                                                src={yesImg}
                                                alt="YES Program"
                                                className="w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="w-4 lg:w-6 h-4 lg:h-6 bg-purple-400 rounded-full border-2 lg:border-4 border-slate-900 shadow-lg shadow-pink-500/50 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}