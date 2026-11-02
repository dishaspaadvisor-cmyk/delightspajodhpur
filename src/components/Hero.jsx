import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/hero.css";

export default function Hero({ data }) {
  const desktopSlides = data?.hero?.desktopSlides || [];
  const mobileSlides = data?.hero?.mobile?.slides || [];

  const mobileVideo = data?.hero?.mobile?.video;

  const [currentSlide, setCurrentSlide] = useState(0);

  const mobileVideoRef = useRef(null);

  /* =====================================================
     DESKTOP SLIDE COUNT
  ===================================================== */

  const totalSlides = desktopSlides.length;

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  /* =====================================================
     MOBILE VIDEO
  ===================================================== */

  useEffect(() => {
    const video = mobileVideoRef.current;

    if (!video) return;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Browser may block autoplay until interaction.
      }
    };

    playVideo();
  }, []);

  /* =====================================================
     NEXT
  ===================================================== */

  const goToNext = () => {
    setCurrentSlide((prev) =>
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  /* =====================================================
     WHATSAPP
  ===================================================== */

  const whatsappNumber = (
    data?.contact?.whatsapp ||
    "+918976846040"
  ).replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    data?.contact?.whatsappMessage ||
      "Hello, I would like to book an appointment."
  );

  const phoneNumber =
    data?.contact?.phone || "+918976846040";

  if (!desktopSlides.length) {
    return null;
  }

  return (
    <section className="hero">

      {/* =================================================
          DESKTOP HERO
      ================================================= */}

      <div className="hero-desktop">

        {/* BACKGROUND SLIDES */}

        <div className="hero-slides">

          {desktopSlides.map((slide, index) => (
            <div
              key={slide.id || index}
              className={`hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >
              <div className="hero-overlay" />
            </div>
          ))}

        </div>


        {/* CONTENT */}

        <div className="hero-content">

          <div className="hero-content-inner">

            {desktopSlides.map((slide, index) => (
              <div
                key={slide.id || index}
                className={`hero-slide-content ${
                  index === currentSlide ? "active" : ""
                }`}
              >

                {slide.eyebrow && (
                  <p className="hero-eyebrow">
                    <span />
                    {slide.eyebrow}
                  </p>
                )}

                <h1>{slide.title}</h1>

                {slide.description && (
                  <p className="hero-description">
                    {slide.description}
                  </p>
                )}

                <div className="hero-actions">

                  {slide.button && (
                    <a
                      href={slide.button.href}
                      className="hero-button hero-button-primary"
                    >
                      {slide.button.label}
                    </a>
                  )}

                  <a
                    href="/contact"
                    className="hero-button hero-button-secondary"
                  >
                    Book Appointment
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>




        {/* COUNTER */}

        <div className="hero-counter">

          <span>
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <div className="hero-counter-line">
            <span
              style={{
                width: `${
                  ((currentSlide + 1) /
                    desktopSlides.length) *
                  100
                }%`,
              }}
            />
          </div>

          <span>
            {String(desktopSlides.length).padStart(2, "0")}
          </span>

        </div>


        {/* DOTS */}

        <div className="hero-dots">

          {desktopSlides.map((slide, index) => (
            <button
              key={slide.id || index}
              type="button"
              className={
                index === currentSlide
                  ? "hero-dot active"
                  : "hero-dot"
              }
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>


        {/* SCROLL */}

        <a
          href="#services"
          className="hero-scroll"
          aria-label="Scroll to services"
        >
          <span className="hero-scroll-line" />

          <small>
            SCROLL TO EXPLORE
          </small>
        </a>

      </div>


      {/* =================================================
          MOBILE HERO
      ================================================= */}

      <div className="hero-mobile">

        {/* VIDEO */}

        <video
          ref={mobileVideoRef}
          className="hero-mobile-video"
          src={mobileVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

   


        {/* CONTENT */}

        <div className="hero-mobile-content">

          {mobileSlides.map((slide, index) => (
            <div
              key={slide.id || index}
              className={`hero-mobile-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >



              <h1>
                {slide.title}
              </h1>

              {slide.description && (
                <p className="hero-mobile-description">
                  {slide.description}
                </p>
              )}

            </div>
          ))}


          {/* MOBILE BUTTONS */}

          <div className="hero-mobile-actions">

            <a
              href={`tel:${phoneNumber}`}
              className="hero-mobile-call"
            >
              <Phone size={18} />
              <span>Call</span>
            </a>


            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mobile-whatsapp"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>

          </div>


          {/* MOBILE DOTS */}

          <div className="hero-mobile-dots">

            {mobileSlides.map((slide, index) => (
              <button
                key={slide.id || index}
                type="button"
                className={
                  index === currentSlide
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentSlide(index)
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}