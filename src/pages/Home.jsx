import React from 'react';
import homeContent from '../data/homeContent.json';
import Banner from '../components/Banner';

const HomePage = () => {
  const { benefits, testimonials } = homeContent.home;

  return (
    <div className="section-spacing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Bienvenue sur <span className="text-accent">SwipeMyTalent</span>
          </h1>
          <p className="text-xl text-text mb-8">
            La plateforme qui connecte les talents aux opportunités
          </p>
          <div className="space-x-4">
            <button className="btn-primary">
              Commencer
            </button>
            <button className="btn-accent">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
      <Banner />
      {/* Avantages */}
      <section className="my-section max-w-5xl mx-auto">
        <h3 className="text-2xl font-heading font-semibold text-primary mb-8 text-center">Pourquoi choisir SMT ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-secondary">
              <span className="icon text-4xl mb-4">{b.icon}</span>
              <h4 className="card-title font-heading text-lg font-bold text-primary mb-2">{b.title}</h4>
              <p className="card-desc text-text">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Témoignages */}
      <section className="my-section max-w-3xl mx-auto">
        <h3 className="text-2xl font-heading font-semibold text-primary mb-8 text-center">Ils ont testé SMT</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 border border-secondary">
              <p className="italic text-text mb-2">"{t.text}"</p>
              <span className="font-heading text-primary font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 