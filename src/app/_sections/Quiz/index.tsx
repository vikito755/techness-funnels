"use client";
import { FC, useState } from "react";
import { questions } from "@/app/data/questions";
import { useRouter } from "next/navigation";

const Quiz: FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const completionChunk = 100 / questions.length;
  const chunkOffset = 2;
  const [completePercentage, setCompletePercentage] = useState(completionChunk);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [formData, setFormData] = useState({
    firstQuestion: "",
    secondQuestion: "",
    thirdQuestion: "",
    phone: "",
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentQuestion = `question${
      questionIndex + 1
    }` as keyof typeof formData;
    setFormData((prev) => ({
      ...prev,
      [currentQuestion]: currentAnswer,
    }));

    if (questionIndex >= questions.length - 1) {
      router.push("/gift");
    } else {
      setQuestionIndex(questionIndex + 1);
      setCurrentAnswer("");
    }

    setCompletePercentage(completionChunk * (questionIndex + chunkOffset));
  };

  const handleMultipleChoiceSelect = (answer: string) => {
    const currentQuestion = `question${
      questionIndex + 1
    }` as keyof typeof formData;
    setFormData((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));

    if (questionIndex >= questions.length - 1) {
      router.push("/gift");
    } else {
      setQuestionIndex(questionIndex + 1);
      setCurrentAnswer("");
    }

    setCompletePercentage(completionChunk * (questionIndex + chunkOffset));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center lg:w-5/6 w-full md:h-5/6 sm:h-screen rounded-3x border-2 rounded-3xl py-10 px-5"
    >
      <div className="w-[75%] h-6 bg-gray-200 rounded-full dark:bg-gray-100">
        <div
          className="transition-width duration-500 ease-in-out h-6 bg-primary-600 rounded-full dark:bg-primary-500"
          style={{
            width: `${completePercentage}%`,
          }}
        ></div>
      </div>

      <h1 className="font-extrabold text-5xl py-8 text-center">
        {questions[questionIndex].question}
      </h1>

      <div className="w-full max-w-md">
        {questions[questionIndex].type === "multiple-choice" ? (
          <div className="flex flex-col gap-4">
            {questions[questionIndex].answers.map((answer, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleMultipleChoiceSelect(answer);
                }}
                className="w-full text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 font-medium rounded-lg px-5 py-2.5 text-center dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500"
              >
                {answer}
              </button>
            ))}
          </div>
        ) : (
          <>
            <input
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              className="w-full p-4 border border-primary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Вашият отговор"
            />
            <button
              type="submit"
              className="w-full mt-4 text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {questionIndex >= questions.length - 1
                ? "Приключване"
                : "Следващ въпрос"}
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default Quiz;
