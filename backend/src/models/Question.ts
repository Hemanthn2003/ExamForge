import mongoose, { Document, Schema } from "mongoose";

export type QuestionType = "SINGLE" | "MULTI";

export interface IQuestion {
  _id: string;
  question: string;
  options: string[];
  questionType: QuestionType;
  answer: string[];
}

export interface IQuestionSet extends Document {
  questionSetName: string;
  department: string;
  questions: IQuestion[];
  createdBy: string;
  isActive: boolean;
}

const questionSchema = new Schema<IQuestion>(
  {
    _id: {
      type: String,
      required: true,
    },

    question: {
      type: String,
      required: true,
      trim: true,
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

    answer: {
      type: [String],
      required: true,
    },
  },
  {
    _id: false,
  }
);

const questionSetSchema = new Schema<IQuestionSet>(
  {
    questionSetName: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    questions: {
      type: [questionSchema],
      required: true,
    },

    createdBy: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "questions",
  }
);

const Question = mongoose.model<IQuestionSet>(
  "Question",
  questionSetSchema
);

export default Question;