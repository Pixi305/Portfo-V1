import Image from "next/image";
import jeetar from "../../public/images/Jeeatar.png";

import Navbar from "../../newComponent/Navbar";
import Footer from "../../newComponent/Footer";
import AboutFaramove from "./faramoveDesign/AboutFaramove";
import FaramoveProcess from "./faramoveDesign/FaramoveProcess";
import BackButton from "../../newComponent/BackButton";
import JeetarProcess from "./jeetarDesign/JeetarProcess";
import AboutJeetar from "./jeetarDesign/AboutJeetar";

const NewJeetar = () => {
  return (
    <section className="">
      <Navbar />
      <BackButton />
      <Image className="container w-full h-auto" src={jeetar} alt={"Jeetar"} />
      <AboutJeetar />
      <JeetarProcess />
      <Footer />
    </section>
  );
};
export default NewJeetar;
