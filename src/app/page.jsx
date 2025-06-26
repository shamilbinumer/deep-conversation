import Navbar from "@/components/Common/Navbar";
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import DeepConversations from "@/components/Home/DeepConversations";
import FAQ from "@/components/Home/FAQ";
import HelpingSection from "@/components/Home/HelpingSection";
import InstagramContent from "@/components/Home/InstagramContent";
import LeadManagementBanner from "@/components/Home/LeadManagementBanner";
import QualityOfMargSection from "@/components/Home/QualityOfMargSection";
import QuestianSection from "@/components/Home/QuestianSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Testimonials from "@/components/Home/Testimonials";
import WorkshopPhotos from "@/components/Home/WorkshopPhotos";

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
      <Testimonials/>
      <WorkshopPhotos/>
      <InstagramContent/>
      <FAQ/>
      <LeadManagementBanner/>
    </div>
  );
}