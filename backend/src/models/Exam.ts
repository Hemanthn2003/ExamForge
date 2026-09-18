import mongoose, { Document, Schema } from "mongoose";

export type ExamStatus = "DRAFT" | "PUBLISHED" | "CLOSED";

export interface INegativeMarking {
  enabled: boolean;
  penalty: number;
}

export interface IExam extends Document {
  examId: string;
  title: string;
  description: string;
  questionSetId: string;
  department: string;
  instructorId: string;
  durationMinutes: number;
  questionCount: number;
  marksPerQuestion: number;
  negativeMarking: INegativeMarking;
  status: ExamStatus;
}

const negativeMarkingSchema = new Schema<INegativeMarking>(
  {
    enabled: {
      type: Boolean,
      required: true,
      default: false,
    },

    penalty: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    _id: false,
  }
);

const examSchema = new Schema<IExam>(
  {
    examId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    questionSetId: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    instructorId: {
      type: String,
      required: true,
    },

    durationMinutes: {
      type: Number,
      required: true,
      min: 1,
    },

    questionCount: {
      type: Number,
      required: true,
      min: 1,
    },

    marksPerQuestion: {
      type: Number,
      required: true,
      min: 0,
    },

    negativeMarking: {
      type: negativeMarkingSchema,
      required: true,
    },

    status: {
      type: String,
      enum: ["DRAFT", "PUBLISHED", "CLOSED"],
      required: true,
      default: "DRAFT",
    },
  },
  {
    collection: "exams",
  }
);

const Exam = mongoose.model<IExam>("Exam", examSchema);

export default Exam;