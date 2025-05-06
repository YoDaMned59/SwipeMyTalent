import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    setSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      {/* Image de fond sur mobile/tablette */}
      <div className="absolute inset-0 md:hidden z-0">
        <img src="/images/partage.webp" alt="Illustration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white bg-opacity-80" />
      </div>
      {/* Bloc formulaire centré */}
      <div className="flex items-center justify-center flex-1 z-10">
        <div className="max-w-md w-full flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg">
          <img src="/logo.png" alt="Logo" className="h-10 mb-8 mx-auto" />
          <h1 className="text-3xl font-bold mb-2 text-center">Bienvenue sur SwipeMyTalent</h1>
          <p className="mb-6 text-gray-600 text-center">Connecte-toi à ta communauté professionnelle</p>
          <div className="flex flex-col gap-3 mb-6">
            <button className="btn-social-google">Continuer avec Google</button>
            <button className="btn-social-linkedin">Continuer avec LinkedIn</button>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400">ou</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {success ? (
            <div className="text-green-600 text-center font-semibold py-4">Connexion réussie ! Redirection...</div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" className="input" required value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="Mot de passe" className="input" required />
              <button type="submit" className="btn-primary w-full mt-2">Se connecter</button>
            </form>
          )}
          <div className="text-center mt-6">
            <span>Pas encore de compte ? </span>
            <a href="/register" className="text-primary font-semibold hover:underline">S'inscrire</a>
          </div>
        </div>
      </div>
      {/* Bloc image à droite, bien sous la navbar (desktop) */}
      <div className="hidden md:flex flex-col flex-1 pt-16 bg-white h-[calc(100vh-4rem)]">
        <img src="/images/partage.webp" alt="Illustration" className="h-full w-full object-cover rounded-lg shadow" />
      </div>
    </div>
  );
};

export default Login; 