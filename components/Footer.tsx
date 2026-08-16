export const Footer = () => {
  return (
    <footer className="py-[70px]">
      <section 

        className="max-w-4xl mx-auto border-lp-gray3 bg-lp-gray3 rounded-2xl py-20"
      >
        <h5 className="text-[70px] title leading-[84px] text-[#] text-center max-w-[393px] mx-auto font-semibold">
          Let&apos;s work together
        </h5>
        <div className="flex gap-3  items-center justify-center mt-5">
          <span className="gradient-bullet-two h-3.5 w-3.5 inline-block rounded-full" />
          <span className="text-main font-bold title text-[25px]">
            Pixifinger1@gmail.com
          </span>
        </div>
      </section>
      <div className="flex justify-center items-center gap-9 mt-14">
        <a
          className="title"
          href="https://www.linkedin.com/in/abdullateef-akinyemi/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Linkedin
        </a>
        <a
          className="title"
          href="https://dribbble.com/pixifinger"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dribbble
        </a>
      </div>
    </footer>
  );
};
