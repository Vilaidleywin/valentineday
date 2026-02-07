import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const MemoryPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white p-6 rounded-2xl shadow-2xl transform -rotate-2 mb-8 max-w-[350px]">
        <div className="w-full aspect-[4/3] bg-gradient-to-br from-pink-100 to-blue-100 
                      rounded-lg flex items-center justify-center text-6xl mb-4">
          💑
        </div>
      </div>
      
      <p className="text-base text-primary-light text-center max-w-md leading-relaxed mb-4">
        I'm so grateful for every moment we've shared since then
      </p>
      
      <PrimaryButton onClick={onNext}>
        klik ini &lt;3
      </PrimaryButton>
    </div>
  );
};

export default MemoryPage;
