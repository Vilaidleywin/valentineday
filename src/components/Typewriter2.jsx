import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Typewriter2({
  text = "",
  speed = 18,
  startDelay = 0,
  className = "",
  cursor = true,
  onDone,
}) {
  const safeText = useMemo(() => String(text ?? ""), [text]);
  const [out, setOut] = useState("");
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    setOut("");
    let i = 0;
    let t2;

    const t1 = setTimeout(() => {
      t2 = setInterval(() => {
        i++;
        setOut(safeText.slice(0, i));
        if (i >= safeText.length) {
          clearInterval(t2);
          doneRef.current?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(t1);
      if (t2) clearInterval(t2);
    };
  }, [safeText, speed, startDelay]);

  return (
    <span className={className}>
      {out}
      {cursor && (
        <span className="inline-block w-[1ch] animate-pulse align-baseline">
          |
        </span>
      )}
    </span>
  );
}
