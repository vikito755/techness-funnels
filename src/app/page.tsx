"use client"
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Inputs = {
  example: string
  exampleRequired: string
}

const questions = [
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
]

export default function Home() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  

  const [formData, setFormData] = useState({
    firstQuestion: '',
    secondQuestion: '',
    thirdQuestion: '',
    email: ''
  });

  const formDataKeys = Object.keys(formData);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  function goToNextStep(e: any) {
    e.preventDefault();
    console.log(formData);
      
    if (questionIndex >= questions.length -1) {
      router.push('/gift');
    }  
    else {
      setQuestionIndex(questionIndex + 1);
    } 
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <main className="flex w-screen h-screen justify-center items-center">
      <form className="flex flex-col items-center lg:w-5/6 w-full md:h-5/6 sm:h-screen rounded-3x border-2 rounded-3xl py-10 px-5">
      <Image src="/techness-black.jpg" alt="Techness logo" width={200} height={100}></Image>
        <h1 className="font-extrabold text-5xl py-8 text-center">{questions[questionIndex].question}</h1>
        <div className="flex items-start w-3/4 bg-gray-200 rounded-full h-8">
            <div className={`bg-blue-600 h-8 rounded-full 
            ${questions[questionIndex].completeState}`}
             style={
              {
                backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)'
              }
            }></div>
            </div>
            
            <div>
          </div>
          <div className="w-3/4 py-4">
            {questions[questionIndex].answers.map((answer, index) => {
                    return (
                        <div className="flex pt-5 pl-10" key={index}>
                            <input id={`radio-${index}`} required onChange={
                              (e) => {
                                setFormData({
                                  ...formData,
                                  [formDataKeys[questionIndex]]: e.target.value
                                })
                              }
                            } type="radio" value={`${answer}`} name={`radio-button`} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"></input>
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

        </form>
    </main>
  );
}