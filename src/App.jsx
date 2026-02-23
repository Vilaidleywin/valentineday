import React, { useState, useRef } from "react";
import FloatingMusicButton from "./components/FloatingMusicButton";

import PasscodePage from "./pages/PasscodePage";
import HiPrettyPage from "./pages/HiPrettyPage";
import BirthdayPage from "./pages/BirthdayPage";
import MemoryPage from "./pages/MemoryPage";
import SpotifyMiniPage from "./pages/SpotifyMiniPage";
import SpotifyFullPage from "./pages/SpotifyFullPage";
import IntroPage from "./pages/IntroPage";
import LetterPage from "./pages/LetterPage";
import BonusPage from "./pages/BonusPage"; // ✅ cek nama file bener

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const audioRef = useRef(null);

  const pages = [
    PasscodePage,   // 0 -> onSuccess
    HiPrettyPage,   // onNext
    BirthdayPage,   // onNext
    MemoryPage,     // onNext
    SpotifyMiniPage,// onNext
    SpotifyFullPage,// onNext
    IntroPage,      // onNext
    LetterPage,     // onNext (tombol: Bonus 🎁)
    BonusPage,      // last -> onReset (tombol: Back to Start)
  ];

  const CurrentPageComponent = pages[currentPage];

  const handleNextPage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPage((p) => Math.min(p + 1, pages.length - 1));
      setFadeIn(true);
    }, 150);
  };

  const handleReset = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPage(0);
      setFadeIn(true);
    }, 150);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio.play().then(() => setIsMusicPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="relative">
      <FloatingMusicButton isPlaying={isMusicPlaying} onClick={toggleMusic} />

      <div
        className={`transition-all duration-400 ${
          fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {currentPage === 0 && <CurrentPageComponent onSuccess={handleNextPage} />}

        {currentPage > 0 && currentPage < pages.length - 1 && (
          <CurrentPageComponent onNext={handleNextPage} />
        )}

        {currentPage === pages.length - 1 && (
          <CurrentPageComponent onReset={handleReset} />
        )}
      </div>

      <audio ref={audioRef} loop>
        <source src="/kota.mpeg" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
