"use client"
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

interface IQuizQuestion {
    question: string;
    answers: string[];
    completePercentage: number;
}

interface IQuizProps {
    questions: IQuizQuestion[];
}

export default function Quiz({questions}: IQuizProps) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const router = useRouter()

    function goToNextStep() {
      
      if (questionIndex >= questions.length -1) {
        router.push('/gift');
      }  
      else {
        setQuestionIndex(questionIndex + 1);
      } 
    }
  return (
    
      <div className="flex flex-col items-center lg:w-5/6 w-full h-full rounded-3x border-2 rounded-3xl py-10 px-5">
        <Image src="/techness-black.jpg" alt="Techness logo" width={200} height={100}></Image>
        <h1 className="font-extrabold text-5xl py-8 text-center">{questions[questionIndex].question}</h1>
        <div className="flex items-start w-3/4 bg-gray-200 rounded-full h-8">
            <div className={`bg-blue-600 h-8 rounded-full w-[${questions[questionIndex].completePercentage}`} style={
              {
                backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);'
              }
            }></div>
            </div>
            
            <div>
          </div>

          <div className="w-3/4 py-4">
            {questions[questionIndex].answers.map((answer, index) => {
                    return (
                        <div className="flex pt-5 pl-10" key={index}>
                            <input id={`radio-${index}`} type="radio" value={`${answer}`} name={`radio-button`} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"></input>
                            <label htmlFor={`radio-${index}`} className="ms-2 text-xl font-medium ">{answer}</label>
                        </div>
                    )
                })}
            </div>
        
          <button
            onClick={goToNextStep}
            className="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold pl-10 pr-10 py-4 rounded-xl">
              <span className="flex items-center">Next
                <span className="pl-2">
                  <BsArrowRight></BsArrowRight>
                </span>
              </span>
            </button>

      </div>
  );
}