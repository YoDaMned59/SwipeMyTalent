import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-20 relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="font-heading text-2xl font-bold text-primary">
              SwipeMyTalent
            </span>
          </div>
          {/* Liens desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link to="/" className="text-text hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="text-text hover:text-primary transition-colors">
                À propos
              </Link>
              <Link to="/contact" className="text-text hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          {/* Boutons desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="font-semibold text-primary">{user}</span>
                <button className="btn-accent" onClick={logout}>Déconnexion</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary">Se connecter</Link>
                <Link to="/register" className="btn-accent">S'inscrire</Link>
              </>
            )}
          </div>
          {/* Menu burger mobile/tablette */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menu mobile/tablette */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-30 animate-fade-in">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="text-text hover:text-primary text-lg" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link to="/about" className="text-text hover:text-primary text-lg" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link to="/contact" className="text-text hover:text-primary text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
            {user ? (
              <>
                <span className="font-semibold text-primary">{user}</span>
                <button className="btn-accent w-full" onClick={() => { logout(); setMenuOpen(false); }}>Déconnexion</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>Se connecter</Link>
                <Link to="/register" className="btn-accent w-full text-center" onClick={() => setMenuOpen(false)}>S'inscrire</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;