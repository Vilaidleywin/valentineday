import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const BirthdayPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-[120px] mb-8 drop-shadow-lg">🎂</div>
      <h1 className="text-2xl font-semibold text-primary text-center mb-4 leading-relaxed max-w-md">
        Today is all about love — and it’s all about you.
        <br />
        Happy Valentine’s Day, my love 🤍
      </h1>
      <PrimaryButton onClick={onNext}>open it &lt;3</PrimaryButton>
    </div>
  );
};

export default BirthdayPage;
