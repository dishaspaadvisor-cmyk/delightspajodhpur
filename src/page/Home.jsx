import Hero from "../components/Hero";
import Service from "../components/Service";
import Offercard from "../components/Offercard";
import GallerySection from "../components/GallerySection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

import siteData, { contactData } from "../data/siteData";
import serviceData from "../data/serviceData";
import faqData from "../data/faqData";

import "../style/Home.css";
import AboutSection from "../components/AboutSection";
import aboutData from "../data/aboutData";



export default function Home() {
  return (
    <main className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <Hero data={siteData} />


      {/* =========================================
          SERVICES
      ========================================= */}

      <section
        className="home-services"
        id="services"
      >

  


        <div className="services-container">

          {serviceData.categories?.map((category) => (
            <Service
              key={category.id}
              category={category}
            />
          ))}

        </div>


        <div className="home-section-button">

          <a
            href="/services"
            className="home-outline-button"
          >
            View All Services
          </a>

        </div>

      </section>

       <AboutSection data={aboutData} />


      {/* =========================================
          OFFERS
      ========================================= */}

      <section className="home-offers">

        <Offercard />

        <div className="home-section-button">

          <a
            href="/offers"
            className="home-outline-button"
          >
            View All Offers
          </a>

        </div>

      </section>


      {/* =========================================
          GALLERY
      ========================================= */}

      <section className="home-gallery">

        <GallerySection />

        <div className="home-section-button">

          <a
            href="/gallery"
            className="home-outline-button"
          >
            View Full Gallery
          </a>

        </div>

      </section>


      {/* =========================================
          FAQ
      ========================================= */}

      <FAQSection
        data={faqData}
      />


      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        id="contact"
        className="home-contact"
      >

        <ContactSection
          data={contactData}
        />

      </section>

    </main>
  );
}