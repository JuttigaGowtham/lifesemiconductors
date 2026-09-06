import AboutSection from "../components/about-section";
import WhyLife from "../components/why-life";
import WhoCanJoin from "../components/who-can-join";
import CareerPrep from "../components/career-prep";
import ContactSection from "../components/contact-section";

export const metadata = {
  title: "About Us | LIFE Semiconductor Institute",
  description: "Learn about LIFE Semiconductor Institute, our mission, vision, practical training methodology, and career preparation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <AboutSection />
      <WhyLife />
      <WhoCanJoin />
      <CareerPrep />
      <ContactSection />
    </main>
  );
}
