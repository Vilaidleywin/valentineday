import React from 'react';

const PrimaryButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white px-12 py-4 rounded-full font-medium text-base
                  shadow-lg shadow-primary/25 transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35
                  active:scale-95 mt-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
