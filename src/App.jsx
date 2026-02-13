import React, { useState } from "react";

import PasscodePage from "./pages/PasscodePage1";
import HiPrettyPage from "./pages/HiPrettyPage";
import BirthdayPage from "./pages/BirthdayPage";
import MemoryPage from "./pages/MemoryPage";
import SpotifyMiniPage from "./pages/SpotifyMiniPage";
import SpotifyFullPage from "./pages/SpotifyFullPage";
import IntroPage from "./pages/IntroPage";
import LetterPage from "./pages/LetterPage";
import BonusPage from "./pages/BonusPage";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const pages = [
    PasscodePage, // 0 -> onSuccess
    HiPrettyPage, // onNext
    BirthdayPage, // onNext
    MemoryPage, // onNext
    SpotifyMiniPage, // onNext
    SpotifyFullPage, // onNext
    IntroPage, // onNext
    LetterPage, // onNext (tombol: Bonus 🎁)
    BonusPage, // last -> onReset (tombol: Back to Start)
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

  return (
    <div className="relative">
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
    </div>
  );
}

export default App;
