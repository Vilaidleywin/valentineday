import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const IconPrev = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M6 5h2v14H6V5zm3.5 7L20 19V5L9.5 12z" />
  </svg>
);

const IconNext = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M16 5h2v14h-2V5zM4 19l10.5-7L4 5v14z" />
  </svg>
);

const IconMore = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M6.5 12a1.5 1.5 0 1 0 0 .01V12zm5.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

const IconPlay = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M8 5v14l11-7L8 5z" />
  </svg>
);

const SpotifyMiniPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FFF5F8]">
      <div className="w-full max-w-md mb-10">
        {/* CARD */}
        <div className="rounded-[26px] bg-[#E88BA6] text-white shadow-2xl overflow-hidden">
          {/* TOP */}
          <div className="p-5">
            <div className="flex items-start gap-4">
              {/* cover */}
              <div className="w-[86px] h-[86px] rounded-xl bg-white shadow-md grid place-items-center overflow-hidden">
                <span className="text-5xl">🐰</span>
              </div>

              <div className="flex-1 pt-1">
                <h3 className="text-[26px] font-extrabold leading-none">for u</h3>
                <p className="text-sm text-white/80 mt-1">Lovee</p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="w-8 h-8 rounded-full border border-white/80 grid place-items-center text-lg">
                    +
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    Save on Spotify
                  </span>
                </div>
              </div>

              {/* spotify logo */}
              <div className="opacity-90 mt-1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21Z"
                    fill="white"
                  />
                  <path
                    d="M7.3 11.3c3.9-1.2 7.7-.9 11.4 1"
                    stroke="#E88BA6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.7 14.1c3.1-.8 6.2-.6 9.1.8"
                    stroke="#E88BA6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.2 16.6c2.3-.5 4.6-.4 6.7.5"
                    stroke="#E88BA6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* controls */}
            <div className="flex items-center justify-between mt-5">
              <span className="text-xs bg-black/20 px-3 py-1 rounded-md">
                Preview
              </span>

              <div className="flex items-center gap-6 text-white">
                <IconPrev />
                <IconNext />
                <IconMore />
                <div className="w-12 h-12 rounded-full bg-white text-[#E88BA6] shadow-md grid place-items-center">
                  <IconPlay className="ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* LIST */}
          <div className="bg-black/15">
            <div className="px-5 divide-y divide-white/15">
              <div className="flex items-center gap-3 py-4">
                <IconPlay width="18" height="18" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    kota ini takan sama tanpamu
                  </p>
                  <p className="text-xs text-white/80">Nadhif Basalamah</p>
                </div>
                <span className="text-xs">03:55</span>
              </div>

              <div className="flex items-center gap-3 py-4">
                <span className="w-[18px] text-center text-white/80">2</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">My Love Mine All Mine</p>
                  <p className="text-xs text-white/80">Mitski</p>
                </div>
                <span className="text-xs">02:17</span>
              </div>

              <div className="flex items-center gap-3 py-4">
                <span className="w-[18px] text-center text-white/80">3</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">
                    Sesuatu di Jogja
                  </p>
                  <p className="text-xs text-white/80">Adhitia Sofyan</p>
                </div>
                <span className="text-xs">03:51</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <PrimaryButton onClick={onNext}>
        lanjut &lt;3
      </PrimaryButton>
    </div>
  );
};

export default SpotifyMiniPage;
