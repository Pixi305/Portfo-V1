import React from "react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-14 rounded-[32px] px-5 md:px-10 justify-between items-start border border-la-gray4 bg-la-gray4 container">
      <section className="flex flex-col text-black py-8 md:py-10 flex-1">
        <h1 className="text-3xl md:text-[40px] font-extrabold mb-2">Lateef Akinyemi</h1>
        <p className="text-xl md:text-[32px] mb-4">Product Designer</p>
        <div className="flex flex-wrap gap-2 items-start mb-8">
          {skillSet.map((skill) => (
            <p
              key={skill.text}
              className="text-black px-4 py-2 text-xs rounded-full border border-la-bdgray bg-la-bdgray"
            >
              {skill.text}
            </p>
          ))}
        </div>
        <p className="text-base md:text-lg font-normal max-w-full lg:max-w-[620px] mb-8">
          I'm a product and computational designer, excels in creating scalable
          design systems and compelling products. My journey spans Alerzo's
          successful Alerzoshop launch, 80% user retention at Alerzo - Jeetar,
          and a 112% revenue increase at Faramove. I'm also an Adplist Design
          Mentor with product design certifications, showcasing his impactful
          product design expertise.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <a
            href="mailto:akinyemilateefgbolahan@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
            className="text-white px-4 py-2 rounded-full border border-black bg-black font-medium text-sm md:text-base"
          >
            Contact me
          </a>
          <div className="flex items-center gap-4">
            {SocialLinks.map((link) => (
              <a key={link.alt} href={link.link} rel="noopener noreferrer" target="_blank">
                <Image quality={75} height={24} width={24} src={link.img} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full lg:w-[443px] lg:flex-shrink-0 pb-8 lg:pb-0">
        <Image
          src="/images/profile.png"
          alt="Lateef Akinyemi"
          width={443}
          height={600}
          className="w-full lg:w-[443px] h-auto"
        />
      </section>
    </section>
  );
}

const skillSet = [
  { text: "PRODUCT DESIGN" },
  { text: "CREATIVE" },
  { text: "MOTION" },
  { text: "DEV" },
];

const SocialLinks = [
  { img: "/icons/dribble.svg", alt: "dribble", link: "https://dribbble.com/pixifinger" },
  { img: "/images/linkedin.svg", alt: "linkedin", link: "https://www.linkedin.com/in/lateef-akinyemi-432738127/" },
  {
    img: "/icons/adplist.svg",
    alt: "adplist",
    link: "https://adplist.org/mentors/lateef-akinyemi?impact_swag=https://hcti.io/v1/image/abebeda1-d76b-40ce-9013-8b43b3d12f9d",
  },
];
