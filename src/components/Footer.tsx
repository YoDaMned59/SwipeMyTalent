import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-primary mb-4">
              SwipeMyTalent
            </h3>
            <p className="text-text">
              Connectez-vous avec les meilleurs talents et opportunités.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-primary mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-text hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-primary mb-4">
              Contact
            </h4>
            <p className="text-text">
              Email: contact@swipemytalent.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-text">
          <p>© 2024 SwipeMyTalent. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

