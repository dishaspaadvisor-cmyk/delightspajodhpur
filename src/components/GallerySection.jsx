import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

import "../style/gallery.css";
import {defaultGallery} from "../data/gallerydata";

export default function GallerySection({
  data = defaultGallery,
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isOpen = selectedIndex !== null;

  const selectedImage =
    isOpen ? data[selectedIndex] : null;


  /* =========================================
     OPEN IMAGE
  ========================================= */

  const openImage = (index) => {
    setSelectedIndex(index);
  };


  /* =========================================
     CLOSE IMAGE
  ========================================= */

  const closeImage = () => {
    setSelectedIndex(null);
  };


  /* =========================================
     NEXT IMAGE
  ========================================= */

  const nextImage = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return 0;

      return (current + 1) % data.length;
    });
  };


  /* =========================================
     PREVIOUS IMAGE
  ========================================= */

  const previousImage = (event) => {
    event?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return 0;

      return (
        (current - 1 + data.length) %
        data.length
      );
    });
  };


  /* =========================================
     KEYBOARD CONTROLS
  ========================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyboard
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyboard
      );

      document.body.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <>
      {/* =========================================
          GALLERY SECTION
      ========================================= */}

      <section
        className="gallery-section"
        id="gallery"
      >

        {/* HEADER */}

        <div className="gallery-header">

          <span className="gallery-eyebrow">
            OUR GALLERY
          </span>

          <h2>
            A Glimpse Into
            <br />
            Our World
          </h2>

          <p>
            Explore our luxurious surroundings,
            peaceful spaces and relaxing wellness
            experiences.
          </p>

        </div>


        {/* =========================================
            GALLERY GRID
        ========================================= */}

        <div className="gallery-grid">

          {data.map((item, index) => (
            <button
              type="button"
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.id}
              onClick={() => openImage(index)}
              aria-label={`Open ${item.title}`}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />


              {/* HOVER OVERLAY */}

              <span className="gallery-overlay">

                <span className="gallery-overlay-content">

                  <span className="gallery-item-title">
                    {item.title}
                  </span>

                  <span className="gallery-view">
                    <Maximize2 size={18} />
                    View Image
                  </span>

                </span>

              </span>

            </button>
          ))}

        </div>

      </section>


      {/* =========================================
          LIGHTBOX
      ========================================= */}

      {isOpen && selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >

          {/* CLOSE */}

          <button
            type="button"
            className="gallery-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            <X size={25} />
          </button>


          {/* COUNTER */}

          <div className="gallery-counter">
            {selectedIndex + 1}
            <span>/</span>
            {data.length}
          </div>


          {/* PREVIOUS */}

          <button
            type="button"
            className="gallery-nav gallery-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>


          {/* IMAGE */}

          <div
            className="gallery-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">
              {selectedImage.title}
            </div>

          </div>


          {/* NEXT */}

          <button
            type="button"
            className="gallery-nav gallery-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

        </div>
      )}
    </>
  );
}