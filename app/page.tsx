import Image from "next/image";
import Hero from "./components/Hero";
import Newproducts from "./components/Newproducts";
import Testimonial from "./components/Testimonial";
import MobNavBar from "./components/MobNavBar";
export default function Home() {
  return (
    <main>
      <Hero />
      <Newproducts />
      <Testimonial />
    </main>
  );
}
