import Hero from "./components/hero";
import LearningPaths from "./components/learning-paths";
import AboutSection from "./components/about-section";
import WhyLife from "./components/why-life";
import TrainingPrograms from "./components/training-programs";
// import LearningJourney from "./components/learning-journey";
import PracticalProjects from "./components/practical-projects";
import ToolsTechnologies from "./components/tools-technologies";
import WhoCanJoin from "./components/who-can-join";
import AnalogLayoutDeepDive from "./components/analog-layout-deepdive";
import CurriculumAccordion from "./components/curriculum-accordion";
import CareerPrep from "./components/career-prep";
import Insights from "./components/insights";
// import Testimonials from "./components/testimonials";
import FaqSection from "./components/faq-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-[#0A192F]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Learning Paths Section */}
      <LearningPaths />

      {/* 3. About LIFE */}
      <AboutSection />

      {/* 4. Why LIFE? */}
      <WhyLife />

      {/* 5. Our Training Programs */}
      <TrainingPrograms />

      {/* 6. Learning Journey (01 to 08 Roadmap) */}
      {/* <LearningJourney /> */}

      {/* 7. Practical Projects Showcase */}
      <PracticalProjects />

      {/* 8. Tools & Technologies (EDA Methodologies) */}
      <ToolsTechnologies />

      {/* 9. Who Can Join? */}
      <WhoCanJoin />

      {/* 10 & 11. Flagship Deep Dive: Analog Layout (3-Month) & Outcomes */}
      <AnalogLayoutDeepDive />

      {/* 12. Full Course Curriculum (10 Modules) */}
      <CurriculumAccordion />

      {/* 13. Career Preparation */}
      <CareerPrep />

      {/* 14. LIFE Semiconductor Insights (Articles) */}
      <Insights />

      {/* 15. Student Testimonials */}
      {/* <Testimonials /> */}

      {/* 16. Frequently Asked Questions */}
      <FaqSection />

      {/* 17. Contact Section & Interactive Enquiry Form */}
      <ContactSection />
    </main>
  );
}
