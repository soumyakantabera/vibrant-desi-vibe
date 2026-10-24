import type { CSSProperties } from "react";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";
import {
  ArrowRightIcon,
  ArrowsClockwiseIcon,
  BookOpenIcon,
  BookOpenTextIcon,
  BrainIcon,
  BriefcaseIcon,
  CalendarBlankIcon,
  CameraIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ChalkboardTeacherIcon,
  ChartBarIcon,
  ChatCircleIcon,
  ChatsCircleIcon,
  ChatTeardropTextIcon,
  CheckCircleIcon,
  ClipboardTextIcon,
  ClockIcon,
  CodeIcon,
  CompassIcon,
  CurrencyInrIcon,
  EnvelopeSimpleIcon,
  GameControllerIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeadsetIcon,
  HeartIcon,
  HouseIcon,
  LaptopIcon,
  LightbulbIcon,
  LightningIcon,
  ListChecksIcon,
  ListIcon,
  MapPinIcon,
  MicrophoneIcon,
  MonitorPlayIcon,
  NotePencilIcon,
  PhoneIcon,
  PiggyBankIcon,
  PlayCircleIcon,
  PresentationIcon,
  ProhibitIcon,
  PuzzlePieceIcon,
  QuotesIcon,
  RocketLaunchIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  SmileyIcon,
  SparkleIcon,
  StarIcon,
  TargetIcon,
  TextAaIcon,
  ThumbsUpIcon,
  TranslateIcon,
  TrendUpIcon,
  TrophyIcon,
  UserIcon,
  UsersThreeIcon,
  VideoCameraIcon,
  WaveformIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Site iconography — Phosphor, duotone by default (October 2026).
 *
 * Duotone draws a solid outline plus a soft 20% fill in the same colour, so an
 * icon reads as a small coloured shape inside the tinted tiles rather than a
 * thin line. Names stay the old semantic keys so every `<Icon name="…" />`
 * call site keeps working. SVG only — no icon font to arrive late.
 */
const MAP = {
  spark: SparkleIcon,
  book: BookOpenIcon,
  mic: MicrophoneIcon,
  chart: ChartBarIcon,
  code: CodeIcon,
  bulb: LightbulbIcon,
  trophy: TrophyIcon,
  target: TargetIcon,
  calendar: CalendarBlankIcon,
  clock: ClockIcon,
  users: UsersThreeIcon,
  user: UserIcon,
  play: PlayCircleIcon,
  check: CheckCircleIcon,
  "arrow-right": ArrowRightIcon,
  "caret-left": CaretLeftIcon,
  "caret-right": CaretRightIcon,
  globe: GlobeIcon,
  headset: HeadsetIcon,
  rupee: CurrencyInrIcon,
  rocket: RocketLaunchIcon,
  star: StarIcon,
  heart: HeartIcon,
  puzzle: PuzzlePieceIcon,
  shield: ShieldCheckIcon,
  trend: TrendUpIcon,
  compass: CompassIcon,
  refresh: ArrowsClockwiseIcon,
  whatsapp: ChatCircleIcon,
  menu: ListIcon,
  close: XIcon,
  phone: PhoneIcon,
  mail: EnvelopeSimpleIcon,
  instagram: CameraIcon,
  facebook: ThumbsUpIcon,
  linkedin: BriefcaseIcon,
  youtube: MonitorPlayIcon,
  quote: QuotesIcon,
  smile: SmileyIcon,
  gamepad: GameControllerIcon,
  location_on: MapPinIcon,
  ban: ProhibitIcon,
  "x-circle": XCircleIcon,
  clipboard: ClipboardTextIcon,
  messages: ChatsCircleIcon,
  languages: TranslateIcon,
  record_voice_over: WaveformIcon,
  home: HouseIcon,
  savings: PiggyBankIcon,
  computer: LaptopIcon,
  present_to_all: PresentationIcon,
  school: GraduationCapIcon,
  diversity_3: UsersThreeIcon,
  translate: TranslateIcon,
  // Complete-package practice types
  brain: BrainIcon,
  pen: NotePencilIcon,
  video: VideoCameraIcon,
  review: SealCheckIcon,
  read: BookOpenTextIcon,
  vocab: TextAaIcon,
  grammar: ListChecksIcon,
  bolt: LightningIcon,
  teacher: ChalkboardTeacherIcon,
  speak: ChatTeardropTextIcon,
  wave: WaveformIcon,
} as const satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof MAP;

/** Shapes that look right solid when `filled` is on. */
const FILLABLE = new Set<IconName>(["star", "heart", "spark"]);

/** Plain UI chrome stays a clean bold line; everything else is duotone. */
const CHROME = new Set<IconName>(["menu", "close", "arrow-right", "caret-left", "caret-right"]);

export function Icon({
  name,
  size = 22,
  className = "",
  filled = true,
  weight,
  variant,
  style,
}: {
  name: IconName | string;
  size?: number;
  className?: string;
  filled?: boolean;
  /** Kept for old call sites; ≥600 renders the bold line weight. */
  weight?: 300 | 400 | 500 | 600 | 700;
  variant?: IconWeight;
  style?: CSSProperties;
}) {
  const Cmp = MAP[name as IconName];
  if (!Cmp)
    return (
      <span aria-hidden className={className} style={{ width: size, height: size, ...style }} />
    );
  const key = name as IconName;
  const resolved: IconWeight =
    variant ??
    (filled && FILLABLE.has(key)
      ? "fill"
      : CHROME.has(key) || (weight !== undefined && weight >= 600)
        ? "bold"
        : "duotone");
  return (
    <Cmp
      aria-hidden
      size={size}
      weight={resolved}
      className={`lws-icon inline-flex shrink-0 ${className}`}
      data-filled={resolved === "fill" ? "true" : undefined}
      style={style}
    />
  );
}
