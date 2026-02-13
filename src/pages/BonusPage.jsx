import React, { useMemo } from "react";
import PrimaryButton from "../components/PrimaryButton";

const BonusPage = ({ onReset }) => {
  // jumlah love yang mau ditampilin (dulu kamu ~100an).
  const COUNT = 100;

  // bikin array 1..COUNT buat map
  const loves = useMemo(() => Array.from({ length: COUNT }, (_, i) => i + 1), []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <style>{`
        :root{
          --loveSize: clamp(1.05rem, 3.8vw, 2rem);
          --loveSizeSmall: clamp(.95rem, 3vw, 1.4rem);
          --stage: clamp(260px, 85vw, 520px);
          --xMove: calc(var(--stage) * 0.9);
        }

        /* stage animasi */
        #ui{
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          pointer-events: none;
        }

        /* center tanpa margin negatif */
        #ui .love{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--stage);
          height: var(--stage);
        }

        #ui .love_word{
          color: #ea80b0;
          font-size: var(--loveSizeSmall);
          transform: translateY(-100%) rotateZ(-30deg);
          font-family: "Dosis", sans-serif;
          text-shadow: 0 0 10px #fff;
          letter-spacing: 2px;

          /* biar aman di HP */
          white-space: nowrap;
          max-width: 92vw;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 .25rem;
        }

        

        #ui .love_horizontal{
          animation: horizontal 10000ms infinite alternate ease-in-out;
          will-change: transform;
        }
        #ui .love_vertical{
          animation: vertical 20000ms infinite linear;
          will-change: transform;
        }

        /* delay animasi dibuat otomatis pakai CSS variable */
        #ui .love .love_horizontal{ animation-delay: var(--d); }
        #ui .love .love_vertical{ animation-delay: var(--d); }

        @keyframes horizontal{
          from { transform: translateX(0px); }
          to   { transform: translateX(var(--xMove)); }
        }

        @keyframes vertical{
          0% { transform: translateY(180px); }
          10% { transform: translateY(45px); }
          15% { transform: translateY(4.5px); }
          18% { transform: translateY(0px); }
          20% { transform: translateY(4.5px); }
          22% { transform: translateY(34.61538px); }
          24% { transform: translateY(64.28571px); }
          25% { transform: translateY(112.5px); }
          26% { transform: translateY(64.28571px); }
          28% { transform: translateY(34.61538px); }
          30% { transform: translateY(4.5px); }
          32% { transform: translateY(0px); }
          35% { transform: translateY(4.5px); }
          40% { transform: translateY(45px); }
          50% { transform: translateY(180px); }
          71% { transform: translateY(428.57143px); }
          72.5% { transform: translateY(441.17647px); }
          75% { transform: translateY(450px); }
          77.5% { transform: translateY(441.17647px); }
          79% { transform: translateY(428.57143px); }
          100% { transform: translateY(180px); }
        }

        /* tombol back: di bawah di HP, pindah ke tengah di layar gede */
        .backBtnWrap{
          position: fixed;
          left: 0; right: 0;
          z-index: 50;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          bottom: 18px;
        }
        @media (min-width: 640px){
          .backBtnWrap{
            bottom: auto;
            top: 550px;
          }
        }

        @media (prefers-reduced-motion: reduce){
          #ui .love_horizontal, #ui .love_vertical{ animation: none !important; }
        }
      `}</style>

      <div id="ui">
        {loves.map((n) => {
          // delay seperti pola kamu: -300ms, -600ms, dst
          const delay = `${-300 * n}ms`;

          return (
            <div className="love" key={n} style={{ "--d": delay }}>
              <div className="love_horizontal">
                <div className="love_vertical">
                  <div className="love_word">I Love You Ayaa</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="backBtnWrap">
        <PrimaryButton onClick={onReset}>Back to Start</PrimaryButton>
      </div>
    </div>
  );
};

export default BonusPage;
