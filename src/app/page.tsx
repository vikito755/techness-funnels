import Image from "next/image";
import { questions } from "./data/questions";
import Quiz from "./_sections/Quiz";

export default function Home() {

  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <Quiz />
    </main>
  );
}
