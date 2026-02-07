import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const IntroPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-1 h-20 bg-primary opacity-30 mb-8" />
      <h2 className="text-3xl font-semibold text-primary text-center leading-relaxed">
        Happy valentine day, my love 🤍🤍
      </h2>
      <PrimaryButton onClick={onNext} className="mt-12">
        Read Letter
      </PrimaryButton>
    </div>
  );
};

export default IntroPage;
