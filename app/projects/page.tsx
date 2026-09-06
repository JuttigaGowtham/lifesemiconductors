import PracticalProjects from "../components/practical-projects";
import ToolsTechnologies from "../components/tools-technologies";
import ContactSection from "../components/contact-section";

export const metadata = {
  title: "Practical Projects & EDA Tools | LIFE Semiconductor Institute",
  description: "Explore silicon layout projects in Analog, Memory, and Physical Design executed with Cadence Virtuoso and Calibre.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <PracticalProjects />
      <ToolsTechnologies />
      <ContactSection />
    </main>
  );
}
