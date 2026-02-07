import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const SpotifyFullPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-bg to-bg-secondary">
      <div className="bg-[#F4A3B8] p-8 rounded-3xl max-w-md w-full text-white shadow-2xl mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-200
                       rounded-lg flex items-center justify-center text-4xl shadow-md"
          >
            💕
          </div>
          <div>
            <h3 className="text-xl font-semibold">for u</h3>
            <p className="text-sm opacity-80">Special Playlist</p>
          </div>
        </div>

        <p className="text-sm opacity-90 leading-relaxed">
          A collection of songs that remind me of us
        </p>
      </div>

      <PrimaryButton onClick={onNext}>
        Lanjut →
      </PrimaryButton>
    </div>
  );
};

export default SpotifyFullPage;
