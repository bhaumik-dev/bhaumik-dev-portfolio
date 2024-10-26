"use client";
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useEffect, useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3300); // Adjust time as necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <DarkModeToggle />
          <HeroSection />
          <ProjectsSection />
          <TapeSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}
