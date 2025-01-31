"use client";
import Image from "next/image";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

const jsConfetti = new JSConfetti();

export default function EmailCapture() {
  useEffect(() => {
    jsConfetti.addConfetti();
  }, []);
  return (
    <main className="flex flex-col space-y-5 w-screen h-screen justify-center items-center">
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
    </main>
  );
}
