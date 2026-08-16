import Image from "next/image";
import fara from "../../public/images/Fara.png";

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
      <Image className="container w-full h-auto" src={fara} alt={"Faramove"} />
      <AboutFaramove />
      <FaramoveProcess />
      <Footer />
    </section>
  );
};
export default NewFaramove;
