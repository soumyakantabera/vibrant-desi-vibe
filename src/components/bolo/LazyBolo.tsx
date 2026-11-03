import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import type { BoloPhone as BoloPhoneType } from "@/components/bolo/BoloPhone";
import type { LiveClassView as LiveClassViewType } from "@/components/bolo/LiveClassView";

/**
 * The phone mock-up and the live-class view are illustrations: heavy DOM,
 * timers and their own code, but no text search engines need (the captions
 * around them carry the words). So they load only when scrolled near, in
 * their own chunks, behind a placeholder of the exact same size — no layout
 * shift, nothing on the main thread at page load.
 */

const BoloPhoneChunk = lazy(() =>
  import("@/components/bolo/BoloPhone").then((m) => ({ default: m.BoloPhone })),
);
const LiveClassChunk = lazy(() =>
  import("@/components/bolo/LiveClassView").then((m) => ({ default: m.LiveClassView })),
);

function useNear<T extends Element>(margin = "400px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, near] as const;
}

function Holder({
  className,
  label,
  children,
}: {
  className: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className={className} role="img" aria-label={label}>
      {children}
    </div>
  );
}

const PHONE_BOX = "mx-auto h-[630px] w-[300px] shrink-0 rounded-[2.75rem] bg-[#14213D] p-[10px]";

export function LazyBoloPhone(props: ComponentProps<typeof BoloPhoneType>) {
  const [ref, near] = useNear<HTMLDivElement>();
  const label = props.label ?? "Bolo app preview";
  const holder = (
    <Holder className={PHONE_BOX} label={label}>
      <div className="h-full w-full rounded-[2.1rem] bg-white" />
    </Holder>
  );
  return (
    <div ref={ref} className={props.className}>
      {near ? (
        <Suspense fallback={holder}>
          <BoloPhoneChunk {...props} className="" />
        </Suspense>
      ) : (
        holder
      )}
    </div>
  );
}

export function LazyLiveClassView(props: ComponentProps<typeof LiveClassViewType>) {
  const [ref, near] = useNear<HTMLDivElement>();
  const holder = (
    <Holder
      className="aspect-[4/3.6] w-full rounded-3xl bg-[#202124]"
      label="Illustration of a live online class: six people on a video call"
    />
  );
  return (
    <div ref={ref}>
      {near ? (
        <Suspense fallback={holder}>
          <LiveClassChunk {...props} />
        </Suspense>
      ) : (
        holder
      )}
    </div>
  );
}
