import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { contactData } from "../data/siteData";

import "../style/offerPopup.css";

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);

  /* =========================================
     OPEN POPUP AFTER 10 SECONDS
  ========================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================
     COUNTDOWN
  ========================================= */

  useEffect(() => {
    if (!isOpen) return;

    if (timeLeft <= 0) {
      setIsOpen(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  /* =========================================
     CONTACT
  ========================================= */

  const phoneNumber =
    contactData?.phone || "+918976846040";

  const whatsappNumber = (
    contactData?.whatsapp || "+918976846040"
  ).replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about the ₹1999 spa offer."
  );

  /* =========================================
     TIME FORMAT
  ========================================= */

  const minutes = String(
    Math.floor(timeLeft / 60)
  ).padStart(2, "0");

  const seconds = String(
    timeLeft % 60
  ).padStart(2, "0");

  if (!isOpen) return null;

  return (
    <div className="offer-popup-overlay">

      <div className="offer-popup">

        {/* CLOSE */}

        <button
          type="button"
          className="offer-popup-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer"
        >
          <X size={21} />
        </button>


        {/* IMAGE */}

        <div className="offer-popup-image">

          <img
            src="/images/13.png"
            alt="Delight Spa Special Offer"
          />

          <div className="offer-popup-image-overlay" />

          <div className="offer-popup-badge">
            SPECIAL OFFER
          </div>

        </div>


        {/* CONTENT */}

        <div className="offer-popup-content">

          <p className="offer-popup-eyebrow">
            DELIGHT SPA
          </p>

          <h2>
            Luxury Spa Experience
          </h2>

          <p className="offer-popup-description">
            Relax, refresh and enjoy a peaceful
            spa experience designed around your
            comfort.
          </p>


          {/* PRICE */}

          <div className="offer-popup-price">

            <span className="offer-old-price">
              ₹2,999
            </span>

            <span className="offer-new-price">
              ₹1,999
            </span>

          </div>


          {/* COUNTDOWN */}

          <div className="offer-popup-countdown">

            <span>
              Offer available for
            </span>

            <strong>
              {minutes}:{seconds}
            </strong>

          </div>


          {/* BUTTONS */}

          <div className="offer-popup-actions">

            {/* CALL */}

            <a
              href={`tel:${phoneNumber}`}
              className="offer-popup-call"
            >
              <Phone size={19} />
              <span>
                Call Now
              </span>
            </a>


            {/* WHATSAPP */}

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="offer-popup-whatsapp"
            >
              <FaWhatsapp size={21} />

              <span>
                WhatsApp
              </span>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}