"use client"
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { questions } from "@/app/data/questions";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";

const Quiz: FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const completionChunk = 100 / questions.length;
  const chunkOffset =  2;
  const [completePercentage, setCompletePercentage] = useState(completionChunk)

  const [formData, setFormData] = useState({
    firstQuestion: '',
    secondQuestion: '',
    thirdQuestion: '',
    email: ''
  });

  const formKeys = Object.keys(formData);
  const router = useRouter();

  console.log(completePercentage)
  return (
        <form className="flex flex-col items-center lg:w-5/6 w-full md:h-5/6 sm:h-screen rounded-3x border-2 rounded-3xl py-10 px-5">
            <div className="w-[75%] h-6 bg-gray-200 rounded-full dark:bg-gray-100">
              <div className={`transition-width duration-500 ease-in-out h-6 bg-blue-600 rounded-full dark:bg-blue-500`}
              style={{
                width: `${completePercentage}%`
              }}
              ></div>
            </div>
            <h1 className="font-extrabold text-5xl py-8 text-center">{questions[questionIndex].question}</h1>
            
            {questions[questionIndex].answers.map((answer, index) => {
        
              return (
                <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  if (questionIndex >= questions.length - 1 ) {
                    router.push('/gift');
                  }  
                  else {
                    setQuestionIndex(questionIndex + 1);
                  }

                  setCompletePercentage(completionChunk * (questionIndex + chunkOffset));
                }}
                className="w-[25%] text-blue-700 hover:cursor-pointer text-lg hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                >
                  {answer}
                </button>
              )
            
            })}
            <div>
          </div>

        </form>
    )
}

export default Quiz;