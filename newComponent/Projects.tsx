import Link from "next/link";
import Image from "next/image";
import { AnimatedText } from "./AnimatedText";

export default function Projects() {
  return (
    <section className="container mt-12 px-4 md:px-6">
      <h1 className="font-semibold text-4xl md:text-[55px] my-6 text-center">
        <AnimatedText stagger={0.1}>Selected Projects</AnimatedText>
      </h1>
      <div className="flex flex-col space-y-8 md:space-y-12 items-start">
        {projectImages.map((image) =>
          image.link ? (
            <Link href={image.link} passHref key={image.img} className="w-full">
              <Image
                src={`/images/${image.img}`}
                alt={image.title ?? image.img}
                width={2650}
                height={1252}
                className="w-full h-auto rounded-xl md:rounded-2xl"
              />
            </Link>
          ) : (
            <Image
              key={image.img}
              src={`/images/${image.img}`}
              alt={image.title ?? image.img}
              width={2650}
              height={1252}
              className="w-full h-auto rounded-xl md:rounded-2xl"
            />
          )
        )}
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
