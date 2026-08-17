import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LifeStyle() {
  return (
    <section className="">
      <section className="container flex flex-col items-center justify-center mt-16 ">
        <h5 className="mb-4 mbl:mb-3 text-center text-5xl max-w-[781px] mx-auto leading-[1.35] text-nl-deepblack font-semibold mbl:text-2xl mbl:leading-[1.04]">
          A Balanced Lifestyle
        </h5>
        <p className="mb-16 text-lg font-medium max-w-[495px] mx-auto text-center text-nl-gray mbl:text-sm  ">
          Maintaining a balanced lifestyle while working at our company is
          crucial fo us
        </p>
      </section>
      <Marquee speed={45} gradient={false} pauseOnHover={true}>
        <section className="flex justify-between mbl:flex-col mbl:text-center gap-x-10 gap-y-14">
          {actions.map((action) => (
            <div
              key={action.title}
              className="mbl:flex mbl:flex-col mbl:items-center"
            >
              <div className="h-16 w-16 flex items-center justify-center">
                <Image
                  quality={75}
                  src={`/images/${action.image}.svg`}
                  height={64}
                  width={64}
                  alt=""
                  loading="lazy"
                />
              </div>

              <h6 className="mt-6 mb-4 text-base leading-[1.33] font-semibold text-nl-gray">
                {action.title}
              </h6>
              <p className="max-w-[303px] text-base mbl:text-sm  text-nl-grey leading-[1.33]">
                {action.desc}
              </p>
            </div>
          ))}
        </section>
      </Marquee>
    </section>
  );
}
const actions = [
  {
    title: "Unlimited Vacation",
    desc: "Take as much or as little as you want. If it’s okay with your team, it’s okay with us.",
    image: "vacation",
  },
  {
    title: "The Right Tools",
    desc: "We empower our team to use the right tool for the job and we make it simple to get going fast.",
    image: "tool",
  },
  {
    title: "Medical,Dental,Vision",
    desc: "We offer comprehensive medical, dental, and vision insurance in all 50 states.",
    image: "medical",
  },
  {
    title: "Life Insurance",
    desc: "Each team member receives company-paid life insurance with the option to purchase more.",
    image: "insurance",
  },
  {
    title: "Team Retreats",
    desc: "We make it a priority to spend time together face-to-face a few times a year.",
    image: "teams",
  },
];
