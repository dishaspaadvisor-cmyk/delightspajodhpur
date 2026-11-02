import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import "../style/footer.css";

import siteData, {
  contactData,
} from "../data/siteData";


export default function Footersection() {

  /* =========================================
     CONTACT DATA
  ========================================= */

  const phoneNumber =
    contactData?.phone || "";

  const whatsappNumber =
    (contactData?.whatsapp || "").replace(/\D/g, "");

  const email =
    contactData?.email || "";

  const address =
    contactData?.address ||
    "Jodhpur, Rajasthan, India";

  const whatsappMessage =
    encodeURIComponent(
      contactData?.whatsappMessage ||
      "Hello, I would like to know more about your services."
    );


  /* =========================================
     QUICK LINKS
  ========================================= */

  const quickLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Offers",
      href: "/offers",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];


  /* =========================================
     SERVICES
  ========================================= */

  const services = [
    {
      label: "Female to Male",
      href: "/services",
    },
    {
      label: "Four Hand Massage",
      href: "/services",
    },
    {
      label: "Thai Massage",
      href: "/services",
    },
    {
      label: "Deep Tissue Massage",
      href: "/services",
    },
    {
      label: "Hot Oil Massage",
      href: "/services",
    },
    {
      label: "Swedish Massage",
      href: "/services",
    },
  ];


  /* =========================================
     SOCIAL LINKS
  ========================================= */

  const socialLinks = contactData?.social || {};


  return (
    <footer className="footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        <div className="footer-container">


          {/* =====================================
              BRAND
          ===================================== */}

          <div className="footer-brand">

            <a
              href="/"
              className="footer-logo-link"
              aria-label={`${siteData.brand} Home`}
            >

              <img
                src={siteData.logo}
                alt={siteData.brand}
                className="footer-logo"
              />

            </a>


            <p className="footer-description">
              {siteData.description}
            </p>

          </div>


          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div className="footer-column">

            <h3 className="footer-title">
              Quick Links
            </h3>


            <ul className="footer-links">

              {quickLinks.map((link) => (

                <li key={link.label}>

                  <a href={link.href}>

                    <span>
                      {link.label}
                    </span>

                    <ArrowUpRight size={14} />

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =====================================
              SERVICES
          ===================================== */}

          <div className="footer-column">

            <h3 className="footer-title">
              Our Services
            </h3>


            <ul className="footer-links">

              {services.map((service) => (

                <li key={service.label}>

                  <a href={service.href}>

                    <span>
                      {service.label}
                    </span>

                    <ArrowUpRight size={14} />

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =====================================
              CONTACT DETAILS
          ===================================== */}

          <div className="footer-column footer-contact">

            <h3 className="footer-title">
              Contact Us
            </h3>


            {/* ADDRESS */}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <MapPin size={18} />
              </span>

              <span>
                {address}
              </span>

            </a>


            {/* PHONE */}

            <a
              href={`tel:${phoneNumber}`}
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <Phone size={18} />
              </span>

              <span>
                {phoneNumber}
              </span>

            </a>


            {/* EMAIL */}

            <a
              href={`mailto:${email}`}
              className="footer-contact-item"
            >

              <span className="footer-contact-icon">
                <Mail size={18} />
              </span>

              <span>
                {email}
              </span>

            </a>


            {/* TIMING */}

            <div className="footer-contact-item">

              <span className="footer-contact-icon">
                <Clock size={18} />
              </span>

              <span>
                Open Daily
                <br />
                10:00 AM – 10:00 PM
              </span>

            </div>


            {/* WHATSAPP */}

            {whatsappNumber && (

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
              >

                <FaWhatsapp size={19} />

                <span>
                  Chat on WhatsApp
                </span>

              </a>

            )}

          </div>

        </div>

      </div>


      {/* =========================================
          FOOTER BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">


          {/* COPYRIGHT */}

          <p>
            © {new Date().getFullYear()}{" "}
            {siteData.brand}.
            All Rights Reserved.
          </p>


          {/* SOCIAL MEDIA */}

          <div className="footer-social">


            {/* INSTAGRAM */}

            {socialLinks.instagram && (

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-link"
              >

                <FaInstagram size={17} />

              </a>

            )}


            {/* FACEBOOK */}

            {socialLinks.facebook && (

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >

                <FaFacebookF size={16} />

              </a>

            )}


            {/* YOUTUBE */}

            {socialLinks.youtube && (

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-link"
              >

                <FaYoutube size={17} />

              </a>

            )}


            {/* WHATSAPP */}

            {whatsappNumber && (

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer-social-link"
              >

                <FaWhatsapp size={18} />

              </a>

            )}

          </div>


          {/* LEGAL */}

          <div className="footer-legal">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span>
              •
            </span>

            <a href="/terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}