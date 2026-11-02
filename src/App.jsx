import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./page/Home";
import About from "./page/About";
import PrivacyPolicy from "./page/PrivacyPolicy";
import Terms from "./page/Terms";

import Service from "./components/Service";
import Offercard from "./components/Offercard";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footersection from "./components/Footersection";

import siteData, {
  contactData,
} from "./data/siteData";

import serviceData from "./data/serviceData";

import FloatingContact from "./components/FloatingContact";
import OfferPopup from "./components/OfferPopup";


export default function App() {
  return (
    <BrowserRouter>

      <div className="app">

        {/* =========================================
            NAVBAR
        ========================================= */}

        <Navbar data={siteData} />


        <Routes>

          {/* =========================================
              HOME
          ========================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================================
              ABOUT
          ========================================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =========================================
              SERVICES
          ========================================= */}

          <Route
            path="/services"
            element={
              <main className="services-page">

                <section className="services-header">

                  <div className="services-header-content">

                    <p>
                      DISCOVER
                    </p>

                    <h1>
                      {serviceData.pageTitle}
                    </h1>

                    <p>
                      A collection of carefully designed
                      treatments created to restore,
                      nourish and refresh your body and mind.
                    </p>

                  </div>

                </section>


                <section className="services-container">

                  {serviceData.categories.map(
                    (category) => (
                      <Service
                        key={category.id}
                        category={category}
                      />
                    )
                  )}

                </section>

              </main>
            }
          />


          {/* =========================================
              OFFERS
          ========================================= */}

          <Route
            path="/offers"
            element={
              <main className="offers-page">

                <Offercard />

              </main>
            }
          />


          {/* =========================================
              GALLERY
          ========================================= */}

          <Route
            path="/gallery"
            element={
              <main className="gallery-page">

                <GallerySection />

              </main>
            }
          />


          {/* =========================================
              CONTACT
          ========================================= */}

          <Route
            path="/contact"
            element={
              <main className="contact-page">

                <ContactSection
                  data={contactData}
                />

              </main>
            }
          />


          {/* =========================================
              PRIVACY POLICY
          ========================================= */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />


          {/* =========================================
              TERMS & CONDITIONS
          ========================================= */}

          <Route
            path="/terms"
            element={<Terms />}
          />

        </Routes>


        {/* =========================================
            FOOTER
        ========================================= */}

        <Footersection />

        {/* =========================================
            FLOATING CALL / WHATSAPP
        ========================================= */}

        <FloatingContact />

        {/* =========================================
            OFFER POPUP
        ========================================= */}

        <OfferPopup />

      </div>

    </BrowserRouter>
  );
}