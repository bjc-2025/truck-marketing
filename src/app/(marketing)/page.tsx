import { TruckingHero } from "@/components/sections/hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactCTA } from "@/components/sections/cta-section"
import { CarouselSection } from "@/components/sections/carousel-section";
import LogoCloud from "@/components/logo-grid";


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <TruckingHero />
      <LogoCloud />
      
      {/* Services Overview */}
      <ServicesGrid  />


      <CarouselSection />
      
      {/* Social Proof & Testimonials */}
      <Testimonials  />
      
      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}