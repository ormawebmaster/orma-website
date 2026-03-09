"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Volume2, VolumeX, Play, Pause, Send, Wrench, Hammer, Briefcase, Calculator, Cpu, MapPin, Calendar, Clock, Phone } from "lucide-react"
import { JOB_POSTS } from "@/lib/carriere-data"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"

const getIcon = (name: string) => {
    switch (name) {
        case 'Wrench': return <Wrench className="w-8 h-8" />;
        case 'Hammer': return <Hammer className="w-8 h-8" />;
        case 'Briefcase': return <Briefcase className="w-8 h-8" />;
        case 'Calculator': return <Calculator className="w-8 h-8" />;
        case 'Cpu': return <Cpu className="w-8 h-8" />;
        default: return <Briefcase className="w-8 h-8" />;
    }
};

const StoryOverlay = () => null;

export default function CarrierePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (videoRef.current && videoRef.current.duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const newProgress = Math.max(0, Math.min(1, x / rect.width));
            videoRef.current.currentTime = newProgress * videoRef.current.duration;
            setProgress(newProgress * 100);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            {/* Navigation */}
            <NavbarGreenTopBar />

            {/* Hero Section Immersive */}
            <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden py-24 md:py-32">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#CC2128]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />

                <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20 z-10">
                    {/* Titres */}
                    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-1 max-w-2xl lg:max-w-none">
                        <div className="inline-flex items-center px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-[#CC2128] font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
                            🚀 Recrutement 2026
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                            BÂTIR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC2128] via-gray-800 to-[#CC2128]">
                                L&apos;EXCEPTION
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Depuis 1948, ORMA conçoit des espaces de prestige. Rejoignez notre pôle d&apos;excellence à Amancey (25).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button
                                onClick={() => {
                                    document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 md:px-10 py-4 md:py-5 bg-[#CC2128] text-white rounded-2xl font-black text-base md:text-lg hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(204,33,40,0.3)] flex items-center justify-center group cursor-pointer"
                            >
                                Voir toutes nos offres d&apos;emplois <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="tel:+41848848849"
                                className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-black text-base md:text-lg hover:border-[#CC2128] hover:text-[#CC2128] transition-all flex items-center justify-center group cursor-pointer"
                            >
                                <Phone className="mr-3 w-5 h-5" /> +41 848 848 849
                            </a>
                        </div>
                    </div>

                    {/* Vidéo Mobile Style */}
                    <div className="flex-1 flex justify-center order-2 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
                        <div className="relative w-full aspect-[9/18.5] bg-[#111] rounded-[40px] md:rounded-[50px] border-[6px] md:border-[10px] border-gray-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-gray-900 rounded-b-2xl z-40" />
                            <StoryOverlay />
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover brightness-105 pointer-events-auto"
                                    loop
                                    playsInline
                                    onTimeUpdate={handleTimeUpdate}
                                >
                                    <source src="/video2.mp4" type="video/mp4" />
                                </video>
                                {/* Removed the heavy dark gradient at the bottom so the text area isn't unnecessarily darkened */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                            {/* Controls Overlay */}
                            <div className="absolute bottom-[30px] md:bottom-[40px] left-4 right-4 z-30 flex flex-col gap-3">
                                <div className="flex justify-end gap-2 px-1">
                                    <button
                                        onClick={togglePlay}
                                        className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${isPlaying ? 'bg-black/50 backdrop-blur-md hover:bg-black/70' : 'bg-[#CC2128] animate-pulse shadow-[0_0_20px_rgba(204,33,40,0.6)]'}`}
                                    >
                                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>
                                    <button
                                        onClick={toggleMute}
                                        className="w-9 h-9 md:w-10 md:h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
                                    >
                                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div
                                    className="w-full flex items-center h-4 group cursor-pointer relative"
                                    onClick={handleSeek}
                                    onMouseDown={(e) => {
                                        // Optional: allow dragging in future
                                        handleSeek(e);
                                    }}
                                >
                                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden relative">
                                        <div className="absolute top-0 left-0 bottom-0 bg-[#CC2128] transition-all duration-75" style={{ width: `${progress}%` }} />
                                    </div>
                                    <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 -translate-y-1/2 shadow transition-all duration-75" style={{ left: `calc(${progress}% - 6px)` }} />
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-8 text-center pb-8 md:pb-10">
                                <div className="mb-4 md:mb-6" />
                                <button
                                    onClick={() => {
                                        document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hidden w-full py-3 md:py-4 bg-[#CC2128] hover:bg-red-700 text-white font-black text-xs md:text-sm rounded-xl transition-all shadow-xl animate-pulse cursor-pointer"
                                >
                                    POSTULER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#CC2128] to-transparent" />
                </div>
            </section>

            {/* Offres */}
            <section id="offres" className="py-24 md:py-32 px-6 bg-white rounded-t-[40px] md:rounded-t-[50px] relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24 space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase">
                            Recrutement
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-medium italic">&quot;L&apos;exigence du détail, la force du collectif.&quot;</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {JOB_POSTS.map((job) => (
                            <Link
                                key={job.id}
                                href={`/carriere/${job.id}`}
                                className="group relative bg-gray-50 rounded-[30px] md:rounded-[40px] p-8 md:p-10 border border-transparent transition-all duration-500 hover:bg-[#CC2128] hover:-translate-y-2 hover:shadow-xl hover:shadow-red-200 flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6 md:mb-8">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#CC2128] shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                                        {getIcon(job.iconName)}
                                    </div>
                                    <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-gray-100 rounded-full text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all">
                                        {job.contractType}
                                    </div>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                                        {job.title}
                                    </h3>

                                    {/* Infos Clés avec Icônes */}
                                    <div className="space-y-3 mb-6 pt-4 border-t border-gray-100 group-hover:border-white/10">
                                        <div className="flex items-center text-gray-500 group-hover:text-white/90 transition-colors">
                                            <MapPin className="w-4 h-4 mr-3 flex-shrink-0 text-[#CC2128] group-hover:text-white" />
                                            <span className="text-xs md:text-sm font-medium">{job.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500 group-hover:text-white/90 transition-colors">
                                            <Calendar className="w-4 h-4 mr-3 flex-shrink-0 text-[#CC2128] group-hover:text-white" />
                                            <span className="text-xs md:text-sm font-medium">{job.duration}</span>
                                        </div>
                                        <div className="flex items-center text-gray-500 group-hover:text-white/90 transition-colors">
                                            <Clock className="w-4 h-4 mr-3 flex-shrink-0 text-[#CC2128] group-hover:text-white" />
                                            <span className="text-xs md:text-sm font-medium">{job.activityRate}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm md:text-base line-clamp-2 group-hover:text-red-50 transition-colors">
                                        {job.description}
                                    </p>
                                </div>

                                <div className="flex items-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#CC2128] group-hover:text-white transition-colors mt-auto">
                                    Voir la fiche <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
