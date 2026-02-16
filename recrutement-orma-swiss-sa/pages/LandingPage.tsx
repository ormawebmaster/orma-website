
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { JOB_POSTS, getIcon } from '../constants';
import { ArrowRight, ChevronDown, Send, Volume2, VolumeX, Play, Pause } from 'lucide-react';

const Logo = ({ className = "h-8" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    {/* Utilisation d'une représentation textuelle stylisée si l'image n'est pas chargée, 
        mais on prévoit l'emplacement pour le logo.png fourni par l'utilisateur */}
    <img
      src="/logo.png"
      alt="ORMA Swiss"
      className="h-full object-contain"
      onError={(e) => {
        // Fallback au cas où l'URL externe ne fonctionne pas immédiatement
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-900 font-black tracking-tighter text-xl italic">ORMA<span class="text-[8px] block tracking-[0.3em] font-normal not-italic opacity-60">SWISS 1948</span></span>';
      }}
    />
  </div>
);

const StoryOverlay = () => (
  <div className="absolute top-0 left-0 right-0 z-30 p-4 pt-6 md:pt-8">
    <div className="flex space-x-1.5 mb-4 md:mb-5">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-0.5 md:h-1 flex-1 bg-white/25 rounded-full overflow-hidden">
          <div className={`h-full bg-white transition-all duration-[6000ms] linear ${i === 1 ? 'w-full' : 'w-0'}`} />
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#CC2128] p-0.5 bg-white shadow-lg flex items-center justify-center overflow-hidden">
          <img src="/logo.png" alt="ORMA" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="text-white text-[10px] md:text-xs font-black drop-shadow-md">Orma France</p>
          <p className="text-white/70 text-[8px] md:text-[9px] font-bold uppercase tracking-widest drop-shadow-md">Amancey • France</p>
        </div>
      </div>
      <div className="flex space-x-2 md:space-x-3">
        <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white/80" />
        <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>
    </div>
  </div>
);

const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* Navigation Minimaliste */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Logo className="h-10 md:h-12" />

      </nav>

      {/* Hero Section Immersive */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden py-24 md:py-32">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#CC2128]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-20 z-10">
          {/* Titres - En premier sur mobile */}
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-1 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-[#CC2128] font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
              🚀 Recrutement 2026
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
              BÂTIR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC2128] via-gray-800 to-[#CC2128]">
                L'EXCEPTION
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Depuis 1948, ORMA conçoit des espaces de prestige. Rejoignez notre pôle d'excellence à Amancey (25).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 md:px-10 py-4 md:py-5 bg-[#CC2128] text-white rounded-2xl font-black text-base md:text-lg hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(204,33,40,0.3)] flex items-center justify-center group cursor-pointer"
              >
                Voir toutes nos offres d'emplois <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Vidéo Mobile Style - En deuxième sur mobile */}
          <div className="flex-1 flex justify-center order-2 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
            <div className="relative w-full aspect-[9/18.5] bg-[#111] rounded-[40px] md:rounded-[50px] border-[6px] md:border-[10px] border-gray-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-gray-900 rounded-b-2xl z-40" />
              <StoryOverlay />
              <div className="absolute inset-0 z-10">
                <video ref={videoRef} className="w-full h-full object-cover brightness-110" loop playsInline>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20" />
              </div>
              {/* Play/Pause & Mute/Unmute Controls */}
              <div className="absolute bottom-[100px] md:bottom-[130px] right-3 md:right-4 z-30 flex flex-col gap-2">
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
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-8 text-center pb-8 md:pb-10">
                <div className="mb-4 md:mb-6">
                  {/* Text removed as per user request */}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('offres')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full py-3 md:py-4 bg-[#CC2128] hover:bg-red-700 text-white font-black text-xs md:text-sm rounded-xl transition-all shadow-xl animate-pulse cursor-pointer"
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
            <p className="text-lg md:text-xl text-gray-500 font-medium italic">"L'exigence du détail, la force du collectif."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {JOB_POSTS.map((job) => (
              <Link
                key={job.id}
                to={`/job/${job.id}`}
                className="group relative bg-gray-50 rounded-[30px] md:rounded-[40px] p-8 md:p-10 border border-transparent transition-all duration-500 hover:bg-[#CC2128] hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200"
              >
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-[#CC2128] shadow-sm group-hover:scale-110 transition-transform">
                    {getIcon(job.iconName)}
                  </div>
                  <div className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-gray-100 rounded-full text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:bg-red-900 group-hover:text-white transition-colors">
                    {job.contractType}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 group-hover:text-white transition-colors leading-tight">
                  {job.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-8 md:mb-10 line-clamp-2 group-hover:text-red-50 transition-colors">
                  {job.description}
                </p>
                <div className="flex items-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#CC2128] group-hover:text-white transition-colors">
                  Voir la fiche <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Officiel */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12">
          <div className="hover:scale-105 transition-all">
            <img
              src="/logo.png"
              alt="Logo Orma"
              className="h-20 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl font-black text-gray-900 italic tracking-tighter">ORMA<div class="h-0.5 bg-gray-300 my-2 w-full"></div><div class="text-xs uppercase tracking-[0.5em] font-normal not-italic">swiss 1948</div></div>';
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 border-t border-gray-200 pt-12">
            <div className="text-left">
              <p className="font-black text-gray-900">Orma Swiss SA / France</p>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Atelier d'Amancey (25)</p>
            </div>
            <p className="text-gray-400 text-[10px] md:text-sm font-bold">© {new Date().getFullYear()} — Tous droits réservés.</p>
            <div className="flex space-x-6">
              <a href="mailto:info@orma.ch" className="text-[#CC2128] font-black text-xs uppercase tracking-widest hover:underline">info@orma.ch</a>
              <span className="text-gray-300">|</span>
              <a href="https://orma.ch" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-900">orma.ch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
