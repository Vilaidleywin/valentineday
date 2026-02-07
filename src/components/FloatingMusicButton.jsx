import React from 'react';

const FloatingMusicButton = ({ isPlaying, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 w-[52px] h-[52px] rounded-full bg-white border-2 border-primary 
                 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl
                 transition-all duration-200 hover:scale-105 active:scale-95 z-50"
    >
      {isPlaying ? (
        <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      )}
    </button>
  );
};

export default FloatingMusicButton;
