import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { AnimatedText } from "./AnimatedText";

export default function Projects() {
  useEffect(() => {
    const triggers: any[] = [];
    let scroller: HTMLElement | null = null;
    let onScroll: (() => void) | undefined;

    const init = async () => {
      // Set window.gsap BEFORE importing ScrollTrigger so Observer.js
      // can find the instance across webpack chunks
      const gsapMod = await import("gsap");
      const gsap = gsapMod.gsap ?? (gsapMod as any).default;
      (window as any).gsap = gsap;

      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      scroller = document.querySelector<HTMLElement>("#main");
      if (!scroller) return;

      // Tell ScrollTrigger to use #main as the scroll container
      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value?: number) {
          if (value !== undefined) scroller!.scrollTop = value;
          return scroller!.scrollTop;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      onScroll = () => ScrollTrigger.update();
      scroller.addEventListener("scroll", onScroll);

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
      if (scroller && onScroll) scroller.removeEventListener("scroll", onScroll);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="mt-12">
      <h1 className="font-semibold text-4xl md:text-[55px] my-6 text-center px-4 md:px-6">
        <AnimatedText stagger={0.1}>Selected Projects</AnimatedText>
      </h1>
      <div>
        {projectImages.map((image, i) => {
          const inner = (
            <div className="relative w-full h-screen">
              <Image
                src={`/images/${image.img}`}
                alt={image.title ?? image.img}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          );

          return image.link ? (
            <Link
              href={image.link}
              key={image.img}
              className="project-panel block w-full"
              style={{ zIndex: i + 1 }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={image.img}
              className="project-panel w-full"
              style={{ zIndex: i + 1 }}
            >
              {inner}
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
