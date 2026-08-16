import Image from "next/image";
import veedez from "../../public/images/Veedez.png";

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
      <Image className="container w-full h-auto" src={veedez} alt={"Veedez"} />
      <AboutVeedez />
      <TheProcess />
      <Footer/>
    </section>
  );
};
export default Veedez;
