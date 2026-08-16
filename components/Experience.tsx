export const Experience = () => {
  return (
    <section id="experience" className="mt-12 mb-20 container px-4 md:px-6">
      <h2 className="text-4xl md:text-[55px] font-semibold leading-tight md:leading-[56px] mb-12 md:mb-24 text-center">
        Experiences
      </h2>
      <section className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, expIndex) => (
          <article key={exp.company + expIndex} className="mb-4 md:mb-6">
            <h4 className="text-2xl md:text-[32px] font-extrabold">{exp.company}</h4>
            <p className="text-xl md:text-[32px] font-semibold text-la-black2">{exp.role}</p>
            <p className="text-base md:text-xl font-semibold text-la-gray2">
              {exp.start} - {exp.end}
            </p>
            {exp.contractType && (
              <span className="text-base md:text-xl font-semibold text-la-gray2">{exp.contractType}</span>
            )}
          </article>
        ))}
      </section>
    </section>
  );
};

const experiences = [
  { company: "Faramove", role: "Product Designer", start: "January 2023", end: "Till Date", contractType: "Contract" },
  { company: "Alerzo", role: "Senior Product Designer", start: "May 2021", end: "Sept 2024", contractType: "Full-time" },
  { company: "Rendize", role: "Product Designer", start: "January 2020", end: "June 2021", contractType: "Contract" },
  { company: "Rendize", role: "UI/UX Designer", start: "January 2020", end: "June 2021" },
  { company: "Brindocorp", role: "Creative Designer", start: "December 2017", end: "November 2021" },
];
