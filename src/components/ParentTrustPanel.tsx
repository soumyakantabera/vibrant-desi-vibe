import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/Icon";

const ITEMS: { icon: IconName; tone: string; title: string; body: string }[] = [
  {
    icon: "users",
    tone: "bg-[#FFF3C4] text-[#6B4A00]",
    title: "You stay on WhatsApp",
    body: "Fees, recordings and messages come to your number. Your child does not need a phone. You join the free demo on camera.",
  },
  {
    icon: "shield",
    tone: "bg-brand-soft text-brand-deep",
    title: "No photos, no child ads",
    body: "We do not post your child’s photo or class recording. We do not run ads at children. You enrol them — they do not enrol themselves.",
  },
  {
    icon: "users",
    tone: "bg-[#E7E7FF] text-indigo-pop",
    title: "Their own small room",
    body: "Four to six children, ages 6–11. This room is only for that age. Not mixed with older classes.",
  },
  {
    icon: "heart",
    tone: "bg-[#FFF0ED] text-[#A53D32]",
    title: "You can hear the class",
    body: "Stay within earshot. We will not do 1:1 video with your child unless you stay on the call.",
  },
];

const LEGAL: { icon: IconName; tone: string; title: string; body: string }[] = [
  {
    icon: "book",
    tone: "bg-brand-soft text-brand-deep",
    title: "Indian privacy law",
    body: "For ages 6–11, you are the person we contract with and message. We need your consent. We do not use your child’s data for ads.",
  },
  {
    icon: "globe",
    tone: "bg-[#E7E7FF] text-indigo-pop",
    title: "India enrolment",
    body: "We only enrol families in India. Fees on this page are India prices, inclusive of taxes. You remain the account holder.",
  },
];

export function ParentTrustPanel({ className = "mt-6" }: { className?: string }) {
  return (
    <aside
      className={`overflow-hidden rounded-3xl border border-sunshine/40 bg-gradient-to-br from-[#FFF8DE] via-white to-[#FFF4F1] p-5 md:p-6 ${className}`}
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sunshine text-ink">
          <Icon name="smile" size={22} />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold text-ink md:text-xl">
            For parents of children aged 6–11
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">
            You stay on WhatsApp. Your child speaks. This is how the Kids room runs.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 rounded-2xl border border-black/5 bg-white/80 p-4"
          >
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.tone}`}>
              <Icon name={item.icon} size={20} />
            </span>
            <div>
              <h4 className="font-display text-sm font-extrabold text-ink">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-brand/15 bg-white/90 p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-[0.14em] font-display font-bold text-ink/55">
          Legal & compliance
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {LEGAL.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.tone}`}>
                <Icon name={item.icon} size={20} />
              </span>
              <div>
                <h4 className="font-display text-sm font-extrabold text-ink">{item.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-ink/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink/70">
          These rules are written in Privacy, Terms, Refunds and Child Protection. We follow them
          in this Kids room. You remain the account holder.{" "}
          <Link
            to="/privacy"
            className="font-bold text-brand-deep underline-offset-2 hover:underline"
          >
            Privacy
          </Link>
          {" · "}
          <Link to="/terms" className="font-bold text-brand-deep underline-offset-2 hover:underline">
            Terms
          </Link>
          {" · "}
          <Link
            to="/refunds"
            className="font-bold text-brand-deep underline-offset-2 hover:underline"
          >
            Refunds
          </Link>
          {" · "}
          <Link
            to="/child-protection"
            className="font-bold text-brand-deep underline-offset-2 hover:underline"
          >
            Child protection
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
