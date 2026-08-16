import { useRef, useEffect } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  withScrollTrigger?: boolean;
  stagger?: number;
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  withScrollTrigger = true,
  stagger = 0.07,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = (el.textContent || "").trim().split(/\s+/);
    el.innerHTML = words
      .map(
        (word, i) =>
          `<span style="display:inline-block;overflow:hidden;line-height:1.2">` +
          `<span class="wa" style="display:inline-block;transform:translateY(110%);transition:transform 0.85s cubic-bezier(0.16,1,0.3,1);transition-delay:${
            delay + i * stagger
          }s">${word}</span>` +
          `</span>`
      )
      .join(" ");

    const reveal = () => {
      el.querySelectorAll<HTMLElement>(".wa").forEach((s) => {
        s.style.transform = "translateY(0)";
      });
    };

    if (!withScrollTrigger) {
      requestAnimationFrame(reveal);
      return;
    }

    const root = document.querySelector<HTMLElement>("#main") ?? undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { root, threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger, withScrollTrigger]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
