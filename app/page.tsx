import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Solutions />
      <HowItWorks />
      <Programs />
      <Testimonials />
      <Partners />
      <ContactForm />
      <Footer />
    </main>
  );
}
