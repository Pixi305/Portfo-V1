import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatedText } from "./AnimatedText";

export default function Projects() {
  useEffect(() => {
    const triggers: any[] = [];
    let scroller: HTMLElement | null = null;
    let scrollHandler: (() => void) | undefined;

    const init = async () => {
      // Attach to window BEFORE importing ScrollTrigger so its Observer.js
      // can resolve the GSAP instance across separate webpack chunks
      const gsapMod = await import("gsap");
      const gsap = gsapMod.gsap ?? (gsapMod as any).default;
      (window as any).gsap = gsap;

      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      scroller = document.querySelector<HTMLElement>("#main");
      if (!scroller) return;

      // Proxy so ScrollTrigger reads scroll position from #main, not window
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value?: number) {
          if (value !== undefined) scroller!.scrollTop = value;
          return scroller!.scrollTop;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      scrollHandler = () => ScrollTrigger.update();
      scroller.addEventListener("scroll", scrollHandler);

      const panels = gsap.utils.toArray<HTMLElement>(".project-panel");

      panels.forEach((panel) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: panel,
            scroller,
            start: "top top",
            pin: true,
            pinSpacing: false,
          })
        );
      });

      ScrollTrigger.refresh();
    };

    init().catch(console.error);

    return () => {
      if (scroller && scrollHandler) scroller.removeEventListener("scroll", scrollHandler);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="mt-12">
      <h1 className="font-semibold text-4xl md:text-[55px] my-6 text-center px-4 md:px-6">
        <AnimatedText stagger={0.1}>Selected Projects</AnimatedText>
      </h1>

      {/* No gap between panels — seamless card-over-card stacking */}
      <div>
        {projectImages.map((image, i) => {
          const img = (
            <Image
              src={`/images/${image.img}`}
              alt={image.title ?? image.img}
              width={2650}
              height={1252}
              className="w-full h-auto block"
              priority={i === 0}
            />
          );

          const style = { zIndex: i + 1, position: "relative" as const };

          return image.link ? (
            <Link
              href={image.link}
              key={image.img}
              className="project-panel block w-full"
              style={style}
            >
              {img}
            </Link>
          ) : (
            <div key={image.img} className="project-panel w-full" style={style}>
              {img}
            </div>
          );
        })}
      </div>
    </section>
  );
}

const projectImages = [
  { img: "Veedez.png", link: "/projects/veedez", title: "Veedez Pay" },
  { img: "Fara.png", link: "/projects/faramove", title: "Faramove" },
  { img: "Jeeatar.png", link: "/projects/jeetar", title: "Jeetar" },
  { img: "Alerzoshop.png", link: "", title: "Alerzoshop — Coming Soon" },
];
