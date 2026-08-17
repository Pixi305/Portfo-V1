import Image from "next/image";
import Navbar from "../../newComponent/Navbar";
import Footer from "../../newComponent/Footer";
import AboutFaramove from "./faramoveDesign/AboutFaramove";
import FaramoveProcess from "./faramoveDesign/FaramoveProcess";
import BackButton from "../../newComponent/BackButton";

const NewFaramove = () => {
  return (
    <section className="">
      <Navbar />
      <BackButton />
      <Image 
        className="container w-full h-auto" 
        src="/images/Fara.png" 
        alt={"Faramove"} 
        width={2650}
        height={1252}
        sizes="100vw"
        quality={85}
        priority
      />
      <AboutFaramove />
      <FaramoveProcess />
      <Footer />
    </section>
  );
};
export default NewFaramove;
