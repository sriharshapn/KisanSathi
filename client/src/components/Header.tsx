import React, { useState, useRef, useEffect } from 'react';
import type { Language, SyncStatusData, NavigationPage } from '../types';
import { 
  Globe, 
  Settings, 
  Menu, 
  X 
} from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isOnline?: boolean;
  syncStatus?: SyncStatusData | null;
  onTriggerSync?: () => void;
  isSyncing?: boolean;
  onOpenSettings?: () => void;
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onSearchAndNavigate?: (crop?: string, location?: string) => void;
}

const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: 'en', label: 'English', name: 'EN' },
  { code: 'hi', label: 'हिन्दी', name: 'HI' },
  { code: 'kn', label: 'ಕನ್ನಡ', name: 'KN' },
  { code: 'te', label: 'తెలుగు', name: 'TE' },
  { code: 'ta', label: 'தமிழ்', name: 'TA' },
  { code: 'mr', label: 'मराठी', name: 'MR' },
  { code: 'bn', label: 'বাংলা', name: 'BN' },
  { code: 'gu', label: 'ગુજરાતી', name: 'GU' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', name: 'PA' },
  { code: 'ml', label: 'മലയാളം', name: 'ML' }
];

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenSettings,
  currentPage,
  onNavigate,
  syncStatus: _syncStatus,
  onTriggerSync: _onTriggerSync,
  isSyncing: _isSyncing
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { id: NavigationPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Mandi Prices' },
    { id: 'satellite', label: 'Satellite' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'diagnose', label: 'Plant Health' },
    { id: 'weather', label: 'Weather' },
    { id: 'gov', label: 'Gov Data' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8FAF6]/95 backdrop-blur-md border-b border-[#022113]/10 shadow-xs">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 py-2.5">
        
        {/* Left Brand */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
        >

          <span className="text-xl font-bold tracking-tight text-[#022113] font-['Montserrat',sans-serif]">
            Kisan<span className="text-[#59701E]">Sathi</span>
          </span>
        </div>

        {/* Center Navigation: Clean Rectangular Tabs, Zero Pills, Zero Arrows */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F0F2EB] border border-[#022113]/10 rounded-full p-1 shadow-xs">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors cursor-pointer font-['Montserrat',sans-serif] shrink-0 ${
                  isActive
                    ? 'bg-[#546C18] text-white'
                    : 'text-[#022113]/80 hover:text-[#546C18] hover:bg-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 rounded-full border border-[#022113]/10 bg-white px-3.5 py-1.5 text-xs font-bold font-['Montserrat',sans-serif] text-[#022113] hover:bg-[#F0F4EC] transition-colors cursor-pointer"
            >
              <Globe strokeWidth={1.5} className="w-3.5 h-3.5 text-[#59701E]" />
              <span>{LANGUAGES.find(l => l.code === language)?.name || 'EN'}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-1 w-44 rounded-md border border-[#022113]/10 bg-white p-2 shadow-xl z-50">
                <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 px-2 py-1">
                  Language
                </div>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`text-left text-xs px-2.5 py-1.5 rounded-md transition-colors cursor-pointer flex items-center justify-between ${
                        language === lang.code
                          ? 'bg-[#546C18] text-white font-bold'
                          : 'text-[#022113] hover:bg-[#F0F4EC]'
                      }`}
                    >
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-[10px] opacity-60">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Settings Trigger */}
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#022113]/10 bg-white text-[#022113] hover:bg-[#F0F4EC] transition-colors cursor-pointer"
              title="Preferences"
            >
              <Settings strokeWidth={1.5} className="w-3.5 h-3.5 text-[#59701E]" />
            </button>
          )}

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#022113]/10 bg-white text-[#022113] lg:hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X strokeWidth={1.5} className="w-4 h-4" /> : <Menu strokeWidth={1.5} className="w-4 h-4 text-[#022113]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (No arrows) */}
      {mobileMenuOpen && (
        <div className="border-t border-[#022113]/10 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-md px-3.5 py-2 text-sm font-semibold transition-colors text-left cursor-pointer font-['Montserrat',sans-serif] ${
                  currentPage === item.id
                    ? 'bg-[#546C18] text-white'
                    : 'text-[#022113] hover:bg-[#F0F4EC]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
