import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/service.css";

import { contactData } from "../data/siteData";

export default function Service({ category }) {
  const phoneNumber = contactData?.phone || "";
  
  const whatsappNumber = (
    contactData?.whatsapp || ""
  ).replace(/\D/g, "");

  return (
    <section className="service-category">

      {/* CATEGORY TITLE */}

      <div className="service-category-title">
        <h2>{category.title}</h2>
      </div>


      {/* SERVICES */}

      <div className="service-grid">

        {category.services.map((service, index) => {

          const whatsappMessage = encodeURIComponent(
            `Hello, I would like to know more about ${service.title}.`
          );

          return (
            <article
              className={`service-card service-card-${index + 1}`}
              key={service.id}
            >

              {/* IMAGE */}

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />

              </div>


              {/* CONTENT */}

              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>


                {/* ACTION BUTTONS */}

                <div className="service-actions">

                  {/* CALL */}

                  {phoneNumber && (
                    <a
                      href={`tel:${phoneNumber}`}
                      className="service-call-btn"
                      aria-label={`Call for ${service.title}`}
                    >
                      <Phone size={15} />

                      <span>
                        Call
                      </span>
                    </a>
                  )}


                  {/* WHATSAPP */}

                  {whatsappNumber && (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-whatsapp-btn"
                      aria-label={`WhatsApp for ${service.title}`}
                    >
                      <FaWhatsapp size={17} />

                      <span>
                        WhatsApp
                      </span>
                    </a>
                  )}

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}