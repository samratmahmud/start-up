import Header from "./home/Header";
import Features from "./home/Features";
import BrandGroup from "./home/BrandGroup";
import VideoBar from "./home/VideoBar";
import BusinessSites from "./home/BusinessSites";
import Support from "./home/Support";
import Feadback from "./home/Feadback";
import Pricing from "./home/Pricing";
import Blogs from "./home/Blogs";

export default function Home() {
   return (
      <main className="bg-gray-950/[1] pb-1">
         <Header />
         <Features />
         <VideoBar />
         <BrandGroup />
         <BusinessSites />
         <Support />
         <Feadback />
         <Pricing />
         <Blogs />
      </main>
   );
}
