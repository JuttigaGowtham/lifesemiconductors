import Insights from "../components/insights";
import FaqSection from "../components/faq-section";
import ContactSection from "../components/contact-section";

export const metadata = {
  title: "VLSI Insights & Technical Articles | LIFE Semiconductor Institute",
  description: "Read technical articles on Analog Layout, DRC/LVS, Common Centroid, Latch-up, WPE/LOD, and VLSI career pathways.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Insights />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
