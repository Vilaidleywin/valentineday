import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newConfetti = {
        id: Date.now() + Math.random(),
        emoji: Math.random() > 0.5 ? '💙' : '⭐',
        left: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 3 + 4,
        opacity: Math.random() * 0.5 + 0.3,
      };

      setConfetti(prev => [...prev, newConfetti]);

      setTimeout(() => {
        setConfetti(prev => prev.filter(c => c.id !== newConfetti.id));
      }, 7000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
      {confetti.map(item => (
        <div
          key={item.id}
          className="absolute animate-fall"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            opacity: item.opacity,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
