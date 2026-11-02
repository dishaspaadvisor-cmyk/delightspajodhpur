import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/contact.css";

export default function ContactSection({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const contact = data;

  const bookingApi =
    contact?.booking?.apiUrl ||
    "https://apibackend.mastercall.in/api/v1/web-leads/submit/";

  const formKey =
    contact?.booking?.formKey ||
    "frm_delightspajodhpur_405193";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(bookingApi, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          form_key: formKey,

          name: formData.name.trim(),

          phone: formData.phone.trim(),

          address: formData.address.trim(),

          notes: formData.notes.trim(),

          submitted_from_url: window.location.href,
        }),
      });

      let result = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.detail ||
            "Unable to submit your booking request."
        );
      }

      setSuccess(
        result?.message ||
          "Thank you! Your booking request has been submitted successfully."
      );

      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });
    } catch (submitError) {
      console.error("Contact form error:", submitError);

      setError(
        submitError.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const cleanPhone = contact.phone?.replace(/\D/g, "") || "";

  const cleanWhatsapp =
    contact.whatsapp?.replace(/\D/g, "") || "";

  return (
    <section className="contact-section">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="contact-heading">

        <p className="section-eyebrow">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Book Your Spa Experience
        </h2>

        <p className="contact-heading-description">
          Ready to relax? Send us your details and our team
          will get in touch with you to arrange your appointment.
        </p>

      </div>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <div className="contact-container">

        {/* ===================================================
            CONTACT FORM
        =================================================== */}
        <div className="contact-form-card">

          <div className="contact-card-heading">

            <p className="contact-card-eyebrow">
              APPOINTMENT
            </p>

            <h3>
              Make an Enquiry
            </h3>

            <p>
              Fill in your details and we'll contact you shortly.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
              />

            </div>


            {/* PHONE */}
            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />

            </div>


            {/* ADDRESS */}
            <div className="form-group">

              <label htmlFor="address">
                Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                autoComplete="street-address"
              />

            </div>


            {/* NOTES */}
            <div className="form-group">

              <label htmlFor="notes">
                Message
              </label>

              <textarea
                id="notes"
                name="notes"
                rows="5"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your preferred treatment or appointment..."
              />

            </div>


            {/* SUCCESS */}
            {success && (
              <div className="form-message form-success">
                <CheckCircle size={18} />
                <span>{success}</span>
              </div>
            )}


            {/* ERROR */}
            {error && (
              <div className="form-message form-error">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}


            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="button-spinner" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Book Appointment
                </>
              )}
            </button>

          </form>

        </div>


        {/* ===================================================
            MAP + CONTACT DETAILS
        =================================================== */}
        <div className="contact-info">

          {/* MAP */}
          <div className="contact-map">

            <iframe
              src={contact.map?.embedUrl}
              title="Spa location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


          {/* CONTACT DETAILS */}
          <div className="contact-details">

            {/* PHONE */}
            <a
              href={`tel:${cleanPhone}`}
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>CALL US</small>
                <strong>{contact.phone}</strong>
              </span>
            </a>


            {/* EMAIL */}
            <a
              href={`mailto:${contact.email}`}
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Mail size={18} />
              </span>

              <span>
                <small>EMAIL US</small>
                <strong>{contact.email}</strong>
              </span>
            </a>


            {/* ADDRESS */}
            <div className="contact-detail">

              <span className="contact-detail-icon">
                <MapPin size={18} />
              </span>

              <span>
                <small>VISIT US</small>
                <strong>{contact.address}</strong>
              </span>

            </div>


            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${cleanWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <FaWhatsapp size={19} />
              </span>

              <span>
                <small>WHATSAPP</small>
                <strong>{contact.whatsapp}</strong>
              </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}