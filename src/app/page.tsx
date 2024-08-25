import Image from "next/image";
import Slider from "./components/slider";
import Featured from "./components/featured";
import Offer from "./components/offer";

export default function Home() {
  return (
    <div>
      <Slider></Slider>
      <Featured></Featured>
      <Offer></Offer>
    </div>
   
  );
}
