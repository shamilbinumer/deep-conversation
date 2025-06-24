import Navbar from "@/components/Common/Navbar";
import Banner from "@/components/Home/Banner";
import QualityOfMargSection from "@/components/Home/QualityOfMargSection";
import QuestianSection from "@/components/Home/QuestianSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <QuestianSection/>
      <QualityOfMargSection/>
    </div>
  );
}