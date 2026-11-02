import { useState } from "react";
import { Menu, X } from "lucide-react";



import "../style/navbar.css";

export default function Navbar({ data }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar">

      {/* =====================================================
          NAVBAR INNER
      ===================================================== */}
      <div className="navbar-inner">

        {/* =====================================================
            LEFT NAVIGATION
        ===================================================== */}
        <nav className="navbar-left">

          {data.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar-link ${
                item.label === "Services" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}

        </nav>


        {/* =====================================================
            CENTER LOGO
        ===================================================== */}
        <a
          href="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
          aria-label={data.brand}
        >
          <img
            src="/images/logo/1.png"
            alt={data.brand}
            className="navbar-logo"
          />
        </a>


        {/* =====================================================
            RIGHT NAVIGATION
        ===================================================== */}
        <div className="navbar-right">

          {data.login && (
            <a
              href={data.login.href}
              className="navbar-login"
            >
              {data.login.label}
            </a>
          )}

          {data.appointment && (
            <a
              href={data.appointment.href}
              className="navbar-appointment"
            >
              {data.appointment.label}
            </a>
          )}

        </div>


        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}
        <button
          type="button"
          className="navbar-mobile-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        {mobileOpen && (
          <div className="navbar-mobile-menu">

            {/* Logo inside mobile menu */}
            <div className="mobile-menu-logo">
              <img
                src={data.logo}
                alt={data.brand}
              />
            </div>


            {data.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}


            {data.login && (
              <a
                href={data.login.href}
                onClick={closeMobileMenu}
              >
                {data.login.label}
              </a>
            )}


            {data.appointment && (
              <a
                href={data.appointment.href}
                className="mobile-appointment"
                onClick={closeMobileMenu}
              >
                {data.appointment.label}
              </a>
            )}

          </div>
        )}

      </div>

    </header>
  );
}