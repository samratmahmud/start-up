import Image from "next/image";
import Header from "./home/Header";
import Features from "./home/Features";
import BrandGroup from "./home/BrandGroup";

export default function Home() {
   return (
      <main>
         <Header />
         <Features />
         <BrandGroup />
      </main>
   );
}
