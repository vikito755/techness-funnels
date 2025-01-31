export type QuestionType = "multiple-choice" | "input";

export interface Question {
  question: string;
  type: QuestionType;
  answers: string[];
}

export const questions: Question[] = [
  {
    question: "В кой град искате да закупите имот?",
    type: "multiple-choice",
    answers: ["София", "Варна", "Пловдив"],
  },
  {
    question: "Какъв е вашият бюджет?",
    type: "multiple-choice",
    answers: ["€50K - €100K", "€100K - €150K", "€150K+"],
  },
  {
    question: "В какъв срок бихте искали да купите?",
    type: "multiple-choice",
    answers: ["1 месец.", "1-3 месеца.", "6+ месеца"],
  },
  {
    question: "На кой телефон да ви се обадим?",
    type: "input",
    answers: [],
  },
  {
    question: "На кой имейл ще е удобно да се свържем с вас?",
    type: "input",
    answers: [],
  },
  {
    question: "Вашите имена.",
    type: "input",
    answers: [],
  },
];
