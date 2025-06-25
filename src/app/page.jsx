import Navbar from "@/components/Common/Navbar";
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import DeepConversations from "@/components/Home/DeepConversations";
import HelpingSection from "@/components/Home/HelpingSection";
import QualityOfMargSection from "@/components/Home/QualityOfMargSection";
import QuestianSection from "@/components/Home/QuestianSection";
import ServicesSection from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <QuestianSection />
      <QualityOfMargSection />
      <HelpingSection />
      <DeepConversations/>
      <ServicesSection/>
      <AboutMe/>
    </div>
  );
}