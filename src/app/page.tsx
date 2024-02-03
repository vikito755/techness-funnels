import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Quiz from "./_components/Quiz";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-center items-center">

    <Quiz 
      questions={[
        {
          'question': 'Do you have a plan in case of a cyber attack?',
          answers: [
            "Yes, I do.",
            "No, I don't.",
            "Why do I even need one?" 
          ],
          completeState: 'w-1/3',
        },
        {
          'question': 'Are you or your team training to recognize email scams?',
          answers: [
            "Yes, we are.",
            "No, we are not.",
            "We used to." 
          ],
          completeState: 'w-2/3',
        },
        {
          'question': 'Do you want to create a secure future for your company?',
          answers: [
            "Yes, I do.",
            "No, I do not."
          ],
          completeState: 'w-full',
        },
      ]}
    ></Quiz>
    </main>
  );
}