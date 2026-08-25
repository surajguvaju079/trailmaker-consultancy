import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Destinations } from "./components/Destinations";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { CtaBand } from "./components/CtaBand";
import { Footer } from "./components/Footer";
import { Interactions } from "./components/Interactions";
import { StatsBar } from "./components/StatsBar";
import { TestPreparation } from "./components/TestPreparation";
import { ScholarshipGuidance } from "./components/ScholarshipGuidance";
import { PreDeparture } from "./components/PreDeparture";
import { StudentJourney } from "./components/StudentJourney";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <MarqueeStrip />
      <StatsBar />
      <Services />
      <StudentJourney />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <TestPreparation />
      <ScholarshipGuidance />
      <PreDeparture />
      <CtaBand />
      <Footer />
      <Interactions />
    </main>
  );
}