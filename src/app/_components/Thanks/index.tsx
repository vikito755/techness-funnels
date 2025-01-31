"use client";
import JSConfetti from "js-confetti";
import { FunctionComponent, useEffect } from "react";

interface ThanksProps {}

const Thanks: FunctionComponent<ThanksProps> = () => {
  const jsConfetti = new JSConfetti();
  useEffect(() => {
    jsConfetti.addConfetti();
  }, []);
  return (
    <>
      <h1>
        Благодарим Ви. Екипът на Ронева ще се свърже с вас възможно най-скоро.
        (Това ще е с друг дизайн)
      </h1>
      <br />
      <a
        href="https://www.roneva.bg/bg/"
        className="bg-primary-500 block hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
      >
        Разгледай Още Имоти
      </a>
    </>
  );
};

export default Thanks;
