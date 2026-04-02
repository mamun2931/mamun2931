import React from 'react';
import data from '../../data/portfolio.json';
import { FaGithub as GitHubIcon, FaLinkedinIn, FaTwitter as TwitterIcon } from 'react-icons/fa';

const iconMap = {
  github: GitHubIcon,
  linkedin: FaLinkedinIn,
  twitter: TwitterIcon,
};

const Footer = () => {
  const { footer, navbar, hero } = data;

  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded border-t border-base-200">
      <nav className="grid grid-flow-col gap-4">
        {navbar.links.map((link, i) => (
          <a key={i} href={link.href} className="link link-hover">{link.name}</a>
        ))}
        <a href={navbar.cta.href} className="link link-hover">Contact</a>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          {hero.socials.map((social, i) => {
            const Icon = iconMap[social.platform];
            let hoverColor = "hover:text-primary";
            if (social.platform === "linkedin") hoverColor = "hover:text-info";
            
            return (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className={`btn btn-circle btn-ghost ${hoverColor}`}>
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>
      </nav> 
      <aside>
        <p>{footer.copyright}</p>
      </aside>
    </footer>
  );
};

export default Footer;
