import TrainingPrograms from "../components/training-programs";
import AnalogLayoutDeepDive from "../components/analog-layout-deepdive";
import CurriculumAccordion from "../components/curriculum-accordion";
import LearningJourney from "../components/learning-journey";
import PracticalProjects from "../components/practical-projects";
import ToolsTechnologies from "../components/tools-technologies";
import ContactSection from "../components/contact-section";

export const metadata = {
  title: "Training Programs & Curriculum | LIFE Semiconductor Institute",
  description: "Explore VLSI training tracks in Physical Design, Analog Design, Analog Layout (3-Month Flagship), and Memory Design.",
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <TrainingPrograms />
      <AnalogLayoutDeepDive />
      <CurriculumAccordion />
      <LearningJourney />
      <PracticalProjects />
      <ToolsTechnologies />
      <ContactSection />
    </main>
  );
}
