import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { StatsBar } from "./components/StatsBar";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Destinations } from "./components/Destinations";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import { TestPreparation } from "./components/TestPreparation";
import { ScholarshipGuidance } from "./components/ScholarshipGuidance";
import { PreDeparture } from "./components/PreDeparture";
import { LocationMap } from "./components/LocationMap";
import { ConsultationForm } from "./components/ConsultationForm";
import { CtaBand } from "./components/CtaBand";
import { Footer } from "./components/Footer";
import { StudentJourney } from "./components/StudentJourney";
import { Interactions } from "./components/Interactions";

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
      <ConsultationForm />
      <LocationMap />
      <CtaBand />
      <Footer />
      <Interactions />
    </main>
  );
}