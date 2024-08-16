import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { OurInstructors } from "@/components/OurInstructors";
import { TestimonialSection } from "@/components/TestimonialSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUsSection />
      <TestimonialSection />
      <UpcomingWebinars />
      <OurInstructors />
      <Footer />
    </main>
  );
}
