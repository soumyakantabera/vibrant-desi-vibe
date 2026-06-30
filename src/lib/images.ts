// All imagery is AI-generated, Indian-context only.
import heroClass from "@/assets/hero-class.jpg";
import studentLaptop from "@/assets/student-laptop.jpg";
import graduation from "@/assets/graduation.jpg";
import teacher from "@/assets/teacher.jpg";
import dataAnalyst from "@/assets/data-analyst.jpg";
import interview from "@/assets/interview.jpg";
import founder from "@/assets/founder.jpg";
import speaking from "@/assets/speaking.jpg";
import group from "@/assets/group.jpg";
import presentation from "@/assets/presentation.jpg";
import ielts from "@/assets/ielts.jpg";
import spokenEnglish from "@/assets/spoken-english.jpg";
import businessEnglish from "@/assets/business-english.jpg";
import interactiveSpeaking from "@/assets/interactive-speaking.jpg";
import careerCounselling from "@/assets/career-counselling.jpg";

export const IMG = {
  // Heroes / banners
  heroClass,
  heroStudents: group,
  heroGrad: graduation,
  liveClass: heroClass,
  campus: group,
  graduation,

  // People
  studentLaptop,
  studentLaptop2: speaking,
  womanLaptop: studentLaptop,
  womanOffice: presentation,
  manOffice: dataAnalyst,
  teacherWoman: teacher,
  groupClass: group,
  girlReading: studentLaptop,
  manStudying: ielts,
  founder,

  // Courses — distinct image per topic
  presentation,
  ielts,
  speaking,
  spokenEnglish,
  business: businessEnglish,
  businessEnglish,
  interactiveSpeaking,
  interview,
  career: careerCounselling,
  careerCounselling,
  team: group,

  // Editorial
  blogDesk: studentLaptop,
  diwali: graduation,
} as const;
