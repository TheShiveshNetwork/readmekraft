import AboutSection from "@/components/landing/AboutSection";
import AISection from "@/components/landing/AISection";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unleash the Power of Github README's. Customize your Github profile for FREE",
  description: "Transform your GitHub projects with stunning, informative, and professional READMEs. Elevate your code today!",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 pb-10">        
        {/* Hero Section */}
        <HeroSection />

        {/* AI Section */}
        <AISection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />
      </div>
    </>
  );
}
