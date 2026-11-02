import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactData } from "../data/siteData";

import "../style/floatingContact.css";

export default function FloatingContact() {
  const phoneNumber = contactData?.phone || "";
  const whatsappNumber = (
    contactData?.whatsapp || ""
  ).replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    contactData?.whatsappMessage ||
      "Hello, I would like to know more about your services."
  );

  return (
    <div className="floating-contact">

      {/* =================================================
          CALL BUTTON
      ================================================= */}

      {phoneNumber && (
        <a
          href={`tel:${phoneNumber}`}
          className="floating-contact-button floating-call"
          aria-label="Call Delight Spa"
        >
          <span className="floating-icon">
            <Phone size={22} strokeWidth={2.3} />
          </span>

          <span className="floating-tooltip">
            Call Us
          </span>
        </a>
      )}


      {/* =================================================
          WHATSAPP BUTTON
      ================================================= */}

      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-button floating-whatsapp"
          aria-label="WhatsApp Delight Spa"
        >
          <span className="floating-icon">
            <FaWhatsapp size={25} />
          </span>

          <span className="floating-tooltip">
            WhatsApp Us
          </span>
        </a>
      )}

    </div>
  );
}