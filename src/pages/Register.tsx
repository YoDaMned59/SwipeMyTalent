import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Redirige vers la page de connexion
  };

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      {/* Image de fond sur mobile/tablette */}
      <div className="absolute inset-0 md:hidden z-0">
        <img src="/images/groupes_echanges.webp" alt="Illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white bg-opacity-80" />
      </div>
      {/* Bloc formulaire centré */}
      <div className="flex items-center justify-center flex-1 z-10">
        <div className="max-w-md w-full flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg">
          <img src="/logo.png" alt="Logo" className="h-10 mb-8 mx-auto" />
          <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>
          {/* Réseaux sociaux */}
          <div className="flex flex-col gap-3 mb-6">
            <button className="btn-primary">S'inscrire avec Google</button>
            <button className="btn-accent">S'inscrire avec LinkedIn</button>
            <button className="btn-primary">S'inscrire avec Facebook</button>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400">ou</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* Formulaire classique */}
          {success ? (
            <div className="text-green-600 text-center font-semibold py-4">Inscription réussie ! Redirection vers la connexion...</div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" className="input" required />
              <input type="password" placeholder="Mot de passe" className="input" required />
              <button type="submit" className="btn-accent w-full mt-2">Créer mon compte</button>
            </form>
          )}
          {/* Call to action */}
          <div className="text-center mt-6">
            <span>Déjà inscrit ? </span>
            <a href="/login" className="text-primary font-semibold hover:underline">Se connecter</a>
          </div>
        </div>
      </div>
      {/* Bloc image à droite, bien sous la navbar (desktop) */}
      <div className="hidden md:flex flex-col flex-1 pt-16 bg-white h-[calc(100vh-4rem)]">
        <img src="/images/groupes_echanges.webp" alt="Illustration" className="h-full w-full object-cover rounded-lg shadow" />
      </div>
    </div>
  );
};

export default Register; 