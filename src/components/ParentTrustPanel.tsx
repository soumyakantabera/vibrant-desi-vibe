import { Link } from "@tanstack/react-router";
import { Icon, type IconName } from "@/components/Icon";

const ITEMS: { icon: IconName; tone: string; title: string; body: string }[] = [
  {
    icon: "users",
    tone: "bg-[#FFF3C4] text-[#6B4A00]",
    title: "Parent is the customer",
    body: "Fees, WhatsApp and class recordings sit on the parent’s number. The child does not need a phone. You join the free demo on camera.",
  },
  {
    icon: "shield",
    tone: "bg-brand-soft text-brand-deep",
    title: "Privacy, as written",
    body: "We do not publish children’s photos or class recordings. We do not run ads aimed at children. Under 18, a parent or guardian must enrol.",
  },
  {
    icon: "users",
    tone: "bg-[#E7E7FF] text-indigo-pop",
    title: "Rooms never mixed",
    body: "Kids 6–11, teens 12–17 and adult rooms (15+) are separate batches. A 12-year-old is never placed with working adults.",
  },
  {
    icon: "heart",
    tone: "bg-[#FFF0ED] text-[#A53D32]",
    title: "How class is kept safe",
    body: "6–11: parent within earshot of the room. 12–17: parent informed of the slot. No 1:1 video with a child unless the parent stays on the call.",
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
            For parents — safety, privacy, who we message
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/80">
            Clear rules, not a certificate stamp. This is how the kids and teen rooms actually run.
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
      <p className="mt-4 text-xs leading-relaxed text-ink/70">
        Enrolment follows our Privacy, Terms and Refunds pages as written, including parental
        consent for anyone under 18. We do not claim a safeguarding certificate or a government
        seal. The parent remains the account holder.{" "}
        <Link to="/privacy" className="font-bold text-brand-deep underline-offset-2 hover:underline">
          Privacy
        </Link>
        {" · "}
        <Link to="/terms" className="font-bold text-brand-deep underline-offset-2 hover:underline">
          Terms
        </Link>
        {" · "}
        <Link to="/refunds" className="font-bold text-brand-deep underline-offset-2 hover:underline">
          Refunds
        </Link>
        .
      </p>
    </aside>
  );
}
