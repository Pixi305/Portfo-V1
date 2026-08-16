import Image from "next/image";

export default function OtherFields() {
  return (
    <section className="space-y-12 container px-4 md:px-6 pb-12">
      <div className="flex flex-col justify-center mt-10">
        <p className="text-sm font-medium text-center">Mentoring & Membership</p>
        <div className="flex gap-8 md:gap-16 justify-center mt-4">
          <Image src="/icons/adp.svg" alt="adp" width={137} height={37} />
          <Image src="/icons/foundation.svg" alt="foundation" width={132} height={43} />
        </div>
      </div>

      <div>
        <Image src="/images/tools.png" alt="Tools" width={1920} height={1080} className="w-full h-auto" />
      </div>
      <div>
        <Image src="/images/exp-image.png" alt="Experience" width={1920} height={1080} className="w-full h-auto" />
      </div>
    </section>
  );
}
