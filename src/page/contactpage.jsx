import ContactSection from "../components/ContactSection";
import { contactData } from "../data/siteData";

export default function ContactPage() {
  return (
    <main>
      <ContactSection data={contactData} />
    </main>
  );
}