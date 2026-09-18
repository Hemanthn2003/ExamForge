import type { QuestionType } from "./exam";

export type AttemptStatus =
  | "IN_PROGRESS"
  | "SUBMITTED";

export interface AttemptQuestion {
  questionId: string;

  question: string;

  options: string[];

  questionType: QuestionType;

  selectedAnswers: string[];

  isCorrect?: boolean;

  marksAwarded?: number;
}

export interface Attempt {
  id: string;

  studentId: string;

  examId: string;

  startTime: string;

  submittedAt?: string;

  status: AttemptStatus;

  questions: AttemptQuestion[];

  score?: number;

  totalMarks?: number;

  correctAnswers?: number;

  wrongAnswers?: number;

  unanswered?: number;

  timeTakenSeconds?: number;
}