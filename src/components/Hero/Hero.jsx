import React, { useState, useEffect } from 'react';
import { FaGithub as GitHubIcon, FaLinkedinIn, FaTwitter as TwitterIcon, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import data from '../../data/portfolio.json';

const iconsMap = {
  github: GitHubIcon,
  linkedin: FaLinkedinIn,
  twitter: TwitterIcon,
};

const Hero = () => {
  const { hero } = data;
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = hero.phrases[phraseIdx];
      
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % hero.phrases.length);
        return;
      }

      const nextText = isDeleting 
        ? currentPhrase.substring(0, typedText.length - 1)
        : currentPhrase.substring(0, typedText.length + 1);
        
      setTypedText(nextText);
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx, hero.phrases]);

  return (
    <div id="home" className="hero min-h-screen bg-base-200 pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl gap-12">
        
        {/* Avatar with floating items */}
        <div className="relative flex-1 flex justify-center mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img src="/assets/images/avatar.png" className="max-w-sm rounded-[3rem] shadow-2xl animate-float relative z-10 w-full" alt="Developer Avatar" />
          
          <div className="absolute -left-4 top-1/4 glass-effect p-3 rounded-2xl flex items-center gap-2 animate-bounce z-20" style={{animationDuration: '3s'}}>
            <FaReact className="text-info text-2xl" /> <span className="font-bold">React</span>
          </div>
          <div className="absolute -right-4 bottom-1/3 glass-effect p-3 rounded-2xl flex items-center gap-2 animate-bounce z-20" style={{animationDuration: '4s'}}>
            <SiTailwindcss className="text-secondary text-2xl" /> <span className="font-bold">Tailwind</span>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl text-primary font-bold mb-2">{hero.greeting}</h2>
          <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-4">
            <span className="text-gradient">{hero.title}</span> {hero.subtitle}
          </h1>
          <p className="py-2 text-2xl font-display text-base-content/80">
            I build <span className="text-primary font-bold border-r-2 border-primary pr-1">{typedText}</span>
          </p>
          <p className="py-4 text-base-content/70 text-lg mb-6 max-w-lg">
            {hero.description}
          </p>
          
          <div className="flex gap-4 mb-8">
            {hero.buttons.map((btn, i) => (
              <a 
                key={i} 
                href={btn.href} 
                className={`btn ${btn.primary ? 'btn-primary shadow-lg shadow-primary/40' : btn.outline ? 'btn-outline btn-secondary' : ''} rounded-full px-8`}
              >
                {btn.text}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {hero.socials.map((social, i) => {
              const Icon = iconsMap[social.platform];
              let hoverColor = "hover:text-primary";
              if (social.platform === "linkedin") hoverColor = "hover:text-info";

              return (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`btn btn-circle btn-ghost glass-effect ${hoverColor}`}>
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
