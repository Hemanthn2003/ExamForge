import mongoose, { Document, Schema } from "mongoose";

export type AttemptStatus =
  | "IN_PROGRESS"
  | "SUBMITTED"
  | "AUTO_SUBMITTED";

export interface IAttemptQuestion {
  questionId: string;
  question: string;
  options: string[];
  questionType: "SINGLE" | "MULTI";
  selectedAnswers: string[];
  isCorrect: boolean;
  marksAwarded: number;
}

export interface IAttempt extends Document {
  studentId: string;
  examId: string;
  startTime: Date;
  submittedAt?: Date;
  status: AttemptStatus;
  questions: IAttemptQuestion[];
  score: number;
  totalMarks: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  timeTakenSeconds: number;
}

const attemptQuestionSchema = new Schema<IAttemptQuestion>(
  {
    questionId: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
    },

    questionType: {
      type: String,
      enum: ["SINGLE", "MULTI"],
      required: true,
    },

    selectedAnswers: {
      type: [String],
      default: [],
    },

    isCorrect: {
      type: Boolean,
      required: true,
    },

    marksAwarded: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const attemptSchema = new Schema<IAttempt>(
  {
    studentId: {
      type: String,
      required: true,
    },

    examId: {
      type: String,
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    submittedAt: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["IN_PROGRESS", "SUBMITTED", "AUTO_SUBMITTED"],
      required: true,
      default: "IN_PROGRESS",
    },

    questions: {
      type: [attemptQuestionSchema],
      required: true,
      default: [],
    },

    score: {
      type: Number,
      default: 0,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    correctAnswers: {
      type: Number,
      default: 0,
    },

    wrongAnswers: {
      type: Number,
      default: 0,
    },

    unanswered: {
      type: Number,
      default: 0,
    },

    timeTakenSeconds: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "attempts",
  }
);

const Attempt = mongoose.model<IAttempt>("Attempt", attemptSchema);

export default Attempt;