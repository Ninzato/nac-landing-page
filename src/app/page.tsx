import { MainTopbar } from "@/components/Main/MainTopbar";
import { MainHero } from "@/components/Main/MainHero";
import { WhoWeAre } from "@/components/Main/WhoWeAre";
import { OurBrands } from "@/components/Main/OurBrands";
import { MainFooter } from "@/components/Main/MainFooter";
import { ThemeToggle } from "@/components/Main/ThemeToggle";
import WhyChooseUs from "@/components/Main/WhyChooseUs";

export default function Home() {
  return (
    <>
      <MainTopbar />
      <MainHero />
      <WhoWeAre />
      <OurBrands />
      <WhyChooseUs/>
      <MainFooter />
      {/* <ThemeToggle /> */}
    </>
  );
}
