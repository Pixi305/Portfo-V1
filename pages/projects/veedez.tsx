import Image from "next/image";
import Navbar from "../../newComponent/Navbar";
import AboutVeedez from "./veedezComponents/AboutVedeez";
import TheProcess from "./veedezComponents/TheProcess";
import Footer from "../../newComponent/Footer";
import BackButton from "../../newComponent/BackButton";

const Veedez = () => {
  return (
    <section className="">
      <Navbar />
      <BackButton/>
      <Image 
        className="container w-full h-auto" 
        src="/images/Veedez.png" 
        alt={"Veedez"} 
        width={2650}
        height={1252}
        sizes="100vw"
        quality={85}
        priority
      />
      <AboutVeedez />
      <TheProcess />
      <Footer/>
    </section>
  );
};
export default Veedez;
