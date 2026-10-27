import React from 'react';
import type { NavigationPage } from '../types';


interface MeadowCaptureProps {
  onNavigate: (page: NavigationPage) => void;
}

export const MeadowCapture: React.FC<MeadowCaptureProps> = ({ onNavigate }) => {
  return (
    <footer className="mx-auto max-w-[1440px] px-3 sm:px-6 py-12 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="bg-[#F0F2EB] rounded-[2.5rem] p-8 sm:p-14 border border-[#022113]/5 shadow-xs">
        
        {/* Top CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-b border-[#022113]/10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#022113] font-['Montserrat',sans-serif] leading-tight">
              Isn't it time to empower your farm with sovereign agricultural intelligence?
            </h2>

            <div>
              <button
                onClick={() => onNavigate('dashboard')}
                className="group inline-flex items-center gap-3 bg-[#DFEB38] hover:bg-[#d0df2a] text-[#022113] px-6 py-3 rounded-xl font-bold text-sm font-['Montserrat',sans-serif] shadow-sm transition-all cursor-pointer"
              >
                <span>Launch Mandi Terminal</span>
              </button>
            </div>
          </div>

          {/* Links on Right */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-base font-bold font-['Montserrat',sans-serif] text-[#022113] mb-4">
                Sovereign Solutions
              </h4>
              <ul className="space-y-2.5 text-stone-600 font-['Plus_Jakarta_Sans',sans-serif]">
                <li>
                  <button 
                    onClick={() => onNavigate('dashboard')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    Mandi Price Terminal
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('satellite')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    Satellite NDVI Telemetry
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('advisory')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    Crop Advisory
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('diagnose')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    Plant Disease Diagnostics
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold font-['Montserrat',sans-serif] text-[#022113] mb-4">
                Public Infrastructure
              </h4>
              <ul className="space-y-2.5 text-stone-600 font-['Plus_Jakarta_Sans',sans-serif]">
                <li>
                  <button 
                    onClick={() => onNavigate('weather')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    Microclimate Telemetry
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('gov')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    State Extension Data Mesh
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('about')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    About KisanSathi Network
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('contact')} 
                    className="hover:text-[#546C18] text-left cursor-pointer transition-colors"
                  >
                    KVK Help & Grievances
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: KisanSathi Logo & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >

            <span className="text-2xl font-extrabold tracking-tight text-[#022113] font-['Montserrat',sans-serif]">
              Kisan<span className="text-[#59701E]">Sathi</span>
            </span>
          </div>

          {/* Navigation Bar (Crisp Rectangular Geometry) */}
          <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-xs border border-stone-200">
            <button onClick={() => onNavigate('home')} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#022113] hover:bg-[#F0F2EB] font-['Montserrat',sans-serif] transition cursor-pointer">
              Home page
            </button>
            <button onClick={() => onNavigate('about')} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:text-[#022113] hover:bg-[#F0F2EB] font-['Montserrat',sans-serif] transition cursor-pointer">
              About us
            </button>
            <button onClick={() => onNavigate('advisory')} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:text-[#022113] hover:bg-[#F0F2EB] font-['Montserrat',sans-serif] transition cursor-pointer">
              Advisory
            </button>
            <button onClick={() => onNavigate('gov')} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:text-[#022113] hover:bg-[#F0F2EB] font-['Montserrat',sans-serif] transition cursor-pointer">
              Gov Data
            </button>
            <button onClick={() => onNavigate('dashboard')} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:text-[#022113] hover:bg-[#F0F2EB] font-['Montserrat',sans-serif] transition cursor-pointer">
              Mandi Prices
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
