"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, MapPin, Send, Briefcase as BriefcaseIcon, Wrench, Hammer, Calculator, Cpu, Phone } from "lucide-react"
import { JOB_POSTS } from "@/lib/carriere-data"
import { NavbarGreenTopBar } from "@/components/navbar-green-topbar"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

const getIcon = (name: string) => {
    switch (name) {
        case 'Wrench': return <Wrench className="w-8 h-8" />;
        case 'Hammer': return <Hammer className="w-8 h-8" />;
        case 'Briefcase': return <BriefcaseIcon className="w-8 h-8" />;
        case 'Calculator': return <Calculator className="w-8 h-8" />;
        case 'Cpu': return <Cpu className="w-8 h-8" />;
        default: return <BriefcaseIcon className="w-8 h-8" />;
    }
};

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const job = JOB_POSTS.find(p => p.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <NavbarGreenTopBar />

            {/* Header Immersif */}
            <div className="bg-gray-50 text-gray-900 pt-28 pb-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CC2128]/5 blur-[100px] rounded-full" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="flex justify-between items-center mb-16">
                        <Link href="/carriere" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors text-[10px] font-black uppercase tracking-widest">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Retour aux offres
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <span className="px-4 py-1.5 bg-[#CC2128] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                                    {job.contractType}
                                </span>
                                <span className="text-gray-500 font-bold flex items-center text-sm">
                                    <MapPin className="w-4 h-4 mr-2 text-[#CC2128]" /> {job.location}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black leading-none tracking-tighter uppercase text-gray-900">{job.title}</h1>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+41848848849"
                                className="px-8 py-5 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-black text-lg hover:border-[#CC2128] hover:text-[#CC2128] transition-all flex items-center justify-center whitespace-nowrap"
                            >
                                <Phone className="mr-3 w-5 h-5" /> +41 848 848 849
                            </a>
                            <a
                                href={`mailto:info@orma.ch?subject=Candidature pour le poste de ${job.title}`}
                                className="px-10 py-5 bg-[#CC2128] text-white rounded-2xl font-black text-lg hover:bg-[#b02536] transition-all shadow-xl shadow-red-900/10 flex items-center justify-center whitespace-nowrap"
                            >
                                Postuler maintenant <Send className="ml-3 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu de l'annonce */}
            <div className="max-w-5xl mx-auto px-4 -mt-16 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100">

                            <section className="mb-16 pt-12">
                                <h2 className="text-xs font-black text-[#CC2128] uppercase tracking-[0.3em] mb-8">Votre Mission</h2>
                                <ul className="space-y-6">
                                    {job.missions.map((mission, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700 text-lg group">
                                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 mr-4 group-hover:bg-[#CC2128] group-hover:text-white transition-colors">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium pt-1">{mission}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-xs font-black text-[#CC2128] uppercase tracking-[0.3em] mb-8">Profil Recherché</h2>
                                <ul className="space-y-6">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-[#CC2128] mt-3 mr-6 shrink-0" />
                                            <span className="font-medium">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xs font-black text-[#CC2128] uppercase tracking-[0.3em] mb-8">Avantages & Cadre</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {job.benefits.map((benefit, idx) => (
                                        <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-gray-800 flex items-center">
                                            <span className="text-[#CC2128] mr-4">+</span> {benefit}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Section Candidature */}
                        <div id="postuler" className="bg-gray-950 rounded-[40px] p-8 md:p-16 text-white text-center">
                            <h2 className="text-4xl font-black mb-6">Rejoindre ORMA</h2>
                            <p className="text-gray-400 mb-12 text-lg font-medium">
                                Envoyez votre CV et motivation à <span className="text-[#CC2128] font-black">info@orma.ch</span>
                            </p>

                            <div className="flex flex-col gap-6 max-w-xl mx-auto">
                                <a
                                    href={`mailto:info@orma.ch?subject=Candidature pour le poste de ${job.title}`}
                                    className="w-full py-5 bg-[#CC2128] text-white rounded-2xl font-black text-xl hover:bg-red-700 transition-all flex items-center justify-center"
                                >
                                    Postuler par Email <Send className="ml-3 w-5 h-5" />
                                </a>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Réponse rapide garantie</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 sticky top-24">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#CC2128] shadow-sm mb-10">
                                {getIcon(job.iconName)}
                            </div>
                            <h3 className="text-xl font-black mb-8">Récapitulatif</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Entité</p>
                                    <p className="font-bold text-gray-900 uppercase tracking-tighter">Orma Swiss SA</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Localisation</p>
                                    <p className="font-bold text-gray-900">Amancey (Doubs, 25)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Secteur</p>
                                    <p className="font-bold text-gray-900 italic">Agencement de Prestige</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Mise en poste</p>
                                    <p className="font-bold text-gray-900">Immédiate</p>
                                </div>
                            </div>
                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <Link href="/">
                                    <img
                                        src="/logo-orma-1948.png"
                                        alt="ORMA"
                                        className="h-8 object-contain"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
