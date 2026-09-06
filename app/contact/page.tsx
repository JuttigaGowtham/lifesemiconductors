import ContactSection from "../components/contact-section";
import FaqSection from "../components/faq-section";

export const metadata = {
  title: "Contact Us & Course Enquiries | LIFE Semiconductor Institute",
  description: "Connect with LIFE Semiconductor Institute by phone (+91 9618347989), WhatsApp, or submit our online course enquiry form.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <ContactSection />
      <FaqSection />
    </main>
  );
}
