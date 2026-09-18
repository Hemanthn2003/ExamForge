import { Request, Response } from "express";
import User from "../models/User.js";
import Question from "../models/Question.js";
import Exam from "../models/Exam.js";
import Attempt from "../models/Attempt.js";

export const verifyDatabase = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const [user, questionSet, exam, attempt] = await Promise.all([
      User.findOne().select("-password").lean(),

      Question.findOne()
        .select("-questions.answer")
        .lean(),

      Exam.findOne().lean(),

      Attempt.findOne()
        .select("-questions.selectedAnswers -questions.isCorrect -questions.marksAwarded")
        .lean(),
    ]);

    res.status(200).json({
      success: true,
      message: "ExamForge database verification successful",

      data: {
        users: user,
        questions: questionSet,
        exams: exam,
        attempts: attempt,
      },
    });
  } catch (error) {
    console.error("Database verification failed:", error);

    res.status(500).json({
      success: false,
      message: "Database verification failed",
    });
  }
};