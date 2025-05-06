import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-heading text-2xl font-bold text-primary">
              SwipeMyTalent
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-text hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              Contact
            </a>
            <button className="btn-primary">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;