import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const HiPrettyPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-8xl mb-4 drop-shadow-lg">🫶</div>
      <h1 className="text-5xl font-semibold text-primary text-center">
        hi, pretty
      </h1>
      <PrimaryButton onClick={onNext}>
        tap disini &lt;3
      </PrimaryButton>
    </div>
  );
};

export default HiPrettyPage;
