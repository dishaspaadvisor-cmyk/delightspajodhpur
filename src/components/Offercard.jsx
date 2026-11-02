import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/offercard.css";

import { contactData } from "../data/siteData";
import { offers } from "../data/offerData";

export default function Offercard() {

  // Contact details from siteData
  const phoneNumber = contactData?.phone || "";
  
  const whatsappNumber = (
    contactData?.whatsapp || ""
  ).replace(/\D/g, "");

  const defaultWhatsappMessage =
    contactData?.whatsappMessage ||
    encodeURIComponent(
      "Hello, I would like to know more about your services."
    );


  return (
    <section
      className="offers-section"
      id="offers"
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="offers-header">

        <span className="offers-eyebrow">
          SPECIAL OFFERS
        </span>

        <h2>
          Exclusive Offers
        </h2>

        <p>
          Discover our specially selected spa offers
          and enjoy a relaxing wellness experience.
        </p>

      </div>


      {/* =========================================
          OFFERS GRID
      ========================================= */}

      <div className="offers-grid">

        {offers.map((offer) => {

          // Offer-specific WhatsApp message
          const whatsappMessage = encodeURIComponent(
            `Hello, I would like to know more about the ${offer.title} offer.`
          );


          return (
            <article
              className="offer-card"
              key={offer.id}
            >

              {/* =====================================
                  IMAGE
              ===================================== */}

              <div className="offer-image-wrapper">

                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-image"
                  loading="lazy"
                />

              </div>


              {/* =====================================
                  CONTENT
              ===================================== */}

              <div className="offer-content">

                <h3>
                  {offer.title}
                </h3>

                <p>
                  {offer.description}
                </p>


                {/* =================================
                    ACTION BUTTONS
                ================================= */}

                <div className="offer-actions">

                  {/* CALL */}

                  <a
                    href={`tel:${phoneNumber}`}
                    className="offer-call-btn"
                    aria-label={`Call about ${offer.title}`}
                  >

                    <Phone size={17} />

                    <span>
                      Call
                    </span>

                  </a>


                  {/* WHATSAPP */}

                  <a
                    href={
                      whatsappNumber
                        ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="offer-whatsapp-btn"
                    aria-label={`WhatsApp about ${offer.title}`}
                    onClick={(event) => {
                      if (!whatsappNumber) {
                        event.preventDefault();
                      }
                    }}
                  >

                    <FaWhatsapp size={19} />

                    <span>
                      WhatsApp
                    </span>

                  </a>

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}