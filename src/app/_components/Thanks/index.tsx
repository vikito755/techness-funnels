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
      <h1>Did you like it?</h1>
      <br />
      <a
        href="https://triviawhizz.com/general-knowledge/"
        className="bg-primary-500 block hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
      >
        Play more quizzes!
      </a>
    </>
  );
};

export default Thanks;
