import React from 'react';
import data from '../../data/portfolio.json';

const Navbar = () => {
  const { navbar } = data;

  return (
    <div className="navbar glass-effect fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navbar.links.map((link, i) => (
              <li key={i}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        <a href="#home" className="btn btn-ghost text-2xl font-display font-bold text-gradient">{navbar.logo}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navbar.links.map((link, i) => (
            <li key={i}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <a href={navbar.cta.href} className="btn btn-primary btn-sm rounded-full shadow-lg shadow-primary/30">{navbar.cta.name}</a>
      </div>
    </div>
  );
};

export default Navbar;
