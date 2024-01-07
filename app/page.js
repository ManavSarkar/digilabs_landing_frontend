import Achievements from "@/components/Achievements";
import ActionCall from "@/components/ActionCall";
import Announcement from "@/components/Announcement";
import Feature1 from "@/components/Features/Feature1";
import Feature2 from "@/components/Features/Feature2";
import Footer from "@/components/Footer";
import HeroBG from "@/components/HeroBG";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <Announcement message={"We are happy to announce that we raise $2 Million in Seed Funding"} />
      <Navbar />
      <HeroBG />
      <LogoCloud />
      <Feature1 />
      <Feature2 />
      <Achievements />
      <Testimonial />
      <ActionCall />
      <hr className="text-slate-400 w-full" />

      <Footer />
    </div>
  );
}