import React, { useState } from 'react';

const PasscodePage = ({ onSuccess }) => {
  const [passcode, setPasscode] = useState('');
  const [shake, setShake] = useState(false);
  const correctPasscode = '241223'; // Change to actual birthday

  const handleNumberClick = (num) => {
    if (passcode.length < 6) {
      const newPasscode = passcode + num;
      setPasscode(newPasscode);
      
      if (newPasscode.length === 6) {
        if (newPasscode === correctPasscode) {
          setTimeout(() => {
            onSuccess();
            setPasscode('');
          }, 300);
        } else {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setPasscode('');
          }, 500);
        }
      }
    }
  };

  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-[120px] mb-8 drop-shadow-lg">🐱</div>
      
      <h1 className="text-2xl font-semibold text-primary text-center mb-4 leading-relaxed max-w-md">
        Hi sayangg, ayo tebak passwordnya,<br />I bet u knoww!!
      </h1>

      <div className="flex gap-3 mb-8">
  {[...Array(6)].map((_, i) => {
    const filled = i < passcode.length;

    return (
      <div
        key={i}
        className={[
          "w-3.5 h-3.5 rounded-full border-2 transition-all duration-200",
          filled
            ? "bg-primary border-primary scale-110"
            : "bg-transparent border-primary",
        ].join(" ")}
      />
    );
  })}
</div>


      <div className={`bg-white p-8 rounded-3xl shadow-xl max-w-[320px] w-full ${shake ? 'animate-shake' : ''}`}>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="aspect-square bg-bg rounded-2xl text-2xl font-semibold text-primary
                       hover:bg-blue-100 active:scale-95 transition-all duration-200"
            >
              {num}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div />
          <button
            onClick={() => handleNumberClick('0')}
            className="aspect-square bg-bg rounded-2xl text-2xl font-semibold text-primary
                     hover:bg-blue-100 active:scale-95 transition-all duration-200"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="aspect-square bg-red-50 rounded-2xl text-2xl font-semibold text-red-500
                     hover:bg-red-100 active:scale-95 transition-all duration-200"
          >
            ←
          </button>
        </div>

        <p className="text-center text-sm text-primary-lighter mt-4">
          clue : our anniv
        </p>
      </div>
    </div>
  );
};

export default PasscodePage;
