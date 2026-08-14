// All imagery is AI-generated, Indian-context only.
import { IMAGE_META, type ImageMeta } from "./image-meta";
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

/**
 * Built URL → intrinsic size + blur placeholder.
 *
 * Vite rewrites each import above to a hashed URL, so the generated metadata
 * (keyed by source filename) has to be re-keyed onto whatever the bundler
 * produced. Doing it here, next to the imports, keeps the pairing exact
 * instead of trying to parse a hash back out of the URL at runtime.
 */
const META_BY_URL: Record<string, ImageMeta> = {
  [heroClass]: IMAGE_META["hero-class.jpg"],
  [studentLaptop]: IMAGE_META["student-laptop.jpg"],
  [graduation]: IMAGE_META["graduation.jpg"],
  [teacher]: IMAGE_META["teacher.jpg"],
  [dataAnalyst]: IMAGE_META["data-analyst.jpg"],
  [interview]: IMAGE_META["interview.jpg"],
  [founder]: IMAGE_META["founder.jpg"],
  [speaking]: IMAGE_META["speaking.jpg"],
  [group]: IMAGE_META["group.jpg"],
  [presentation]: IMAGE_META["presentation.jpg"],
  [ielts]: IMAGE_META["ielts.jpg"],
  [spokenEnglish]: IMAGE_META["spoken-english.jpg"],
  [businessEnglish]: IMAGE_META["business-english.jpg"],
  [interactiveSpeaking]: IMAGE_META["interactive-speaking.jpg"],
  [careerCounselling]: IMAGE_META["career-counselling.jpg"],
};

/**
 * Size + placeholder for an image URL, or undefined for anything we do not
 * bundle (a remote photo, say) — callers fall back to a plain skeleton then.
 */
export function imageMeta(src?: string): ImageMeta | undefined {
  if (!src) return undefined;
  const direct = META_BY_URL[src];
  if (direct) return direct;

  // Assets referenced outside IMG (or served straight from /src in dev) still
  // carry their original file name, so try that before giving up.
  const file = src.split("/").pop()?.split("?")[0];
  return file ? IMAGE_META[file] : undefined;
}
