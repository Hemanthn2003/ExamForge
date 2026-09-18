export interface MetricCardData {
  label: string;

  value: string | number;

  description?: string;
}

export interface ExamAnalytics {
  examId: string;

  examTitle: string;

  attempts: number;

  averageScore: number;

  highestScore: number;

  lowestScore: number;

  passRate: number;
}

export interface StudentPerformance {
  studentId: string;

  studentName: string;

  attempts: number;

  averageScore: number;

  highestScore: number;

  lowestScore: number;
}

export interface DepartmentPerformance {
  department: string;

  students: number;

  exams: number;

  attempts: number;

  averageScore: number;
}