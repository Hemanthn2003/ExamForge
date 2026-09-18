export type QuestionType =
  | "SINGLE"
  | "MULTI";

export type ExamStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "ARCHIVED";

export interface NegativeMarking {
  enabled: boolean;
  penalty: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;

  questionSetId: string;

  department: string;

  instructorId: string;

  durationMinutes: number;

  questionCount: number;

  marksPerQuestion: number;

  negativeMarking: NegativeMarking;

  status: ExamStatus;
}