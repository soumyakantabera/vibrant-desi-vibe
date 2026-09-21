import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  AudioLines,
  Ban,
  BarChart3,
  BookOpen,
  Briefcase,
  Calendar,
  Camera,
  CheckCircle2,
  CircleX,
  ClipboardList,
  Clock,
  Code,
  Compass,
  Gamepad2,
  Globe,
  GraduationCap,
  Headphones,
  Heart,
  Home,
  IndianRupee,
  Languages,
  Laptop,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Mic,
  MonitorPlay,
  Phone,
  PiggyBank,
  PlayCircle,
  Presentation,
  Puzzle,
  Quote,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  Trophy,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react";

/**
 * SVG icon set (lucide). Names stay the old semantic keys so every
 * `<Icon name="check" />` call site keeps working — but we never paint
 * Material Symbols ligature *characters* ("arrow_forward", "record_voice_over")
 * when a font is late or the glyph is missing from the subset.
 */
const MAP = {
  spark: Sparkles,
  book: BookOpen,
  mic: Mic,
  chart: BarChart3,
  code: Code,
  bulb: Lightbulb,
  trophy: Trophy,
  target: Target,
  calendar: Calendar,
  clock: Clock,
  users: Users,
  user: User,
  play: PlayCircle,
  check: CheckCircle2,
  "arrow-right": ArrowRight,
  globe: Globe,
  headset: Headphones,
  rupee: IndianRupee,
  rocket: Rocket,
  star: Star,
  heart: Heart,
  puzzle: Puzzle,
  shield: ShieldCheck,
  trend: TrendingUp,
  compass: Compass,
  refresh: RefreshCw,
  whatsapp: MessageCircle,
  menu: Menu,
  close: X,
  phone: Phone,
  mail: Mail,
  instagram: Camera,
  facebook: ThumbsUp,
  linkedin: Briefcase,
  youtube: MonitorPlay,
  quote: Quote,
  smile: Smile,
  gamepad: Gamepad2,
  location_on: MapPin,
  ban: Ban,
  "x-circle": CircleX,
  clipboard: ClipboardList,
  messages: MessagesSquare,
  languages: Languages,
  record_voice_over: AudioLines,
  home: Home,
  savings: PiggyBank,
  computer: Laptop,
  present_to_all: Presentation,
  school: GraduationCap,
  diversity_3: Users,
  translate: Languages,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof MAP;

const FILLABLE = new Set<IconName>(["star", "heart", "spark"]);

const WEIGHT_STROKE: Record<number, number> = {
  300: 1.5,
  400: 1.75,
  500: 2,
  600: 2.25,
  700: 2.5,
};

export function Icon({
  name,
  size = 22,
  className = "",
  filled = true,
  weight = 500,
  style,
}: {
  name: IconName | string;
  size?: number;
  className?: string;
  filled?: boolean;
  weight?: 300 | 400 | 500 | 600 | 700;
  style?: CSSProperties;
}) {
  const Cmp = MAP[name as IconName];
  if (!Cmp) return <span aria-hidden className={className} style={{ width: size, height: size, ...style }} />;
  const key = name as IconName;
  return (
    <Cmp
      aria-hidden
      width={size}
      height={size}
      size={size}
      strokeWidth={WEIGHT_STROKE[weight] ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled && FILLABLE.has(key) ? "currentColor" : "none"}
      className={`inline-flex shrink-0 ${className}`}
      style={style}
    />
  );
}
