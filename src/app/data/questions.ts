export type QuestionType = "multiple-choice" | "input";

export interface Question {
  question: string;
  type: QuestionType;
  answers: string[];
}

export const questions: Question[] = [
  {
    question: "Which is the capical of Germany?",
    type: "multiple-choice",
    answers: ["Berlin", "Dortmund", "Essen"],
  },
  {
    question: "How many colors does a rainbow have?",
    type: "multiple-choice",
    answers: ["7", "8", "9"],
  },
  {
    question: "How long can a whale hold it's breath?",
    type: "multiple-choice",
    answers: ["3 hours", "1 day", "2 weeks"],
  },
];
