import { ArrowUpRight, Phone } from "lucide-react";

import "../style/about.css";

export default function AboutSection({ data }) {
  if (!data) return null;

  return (
    <main className="about-page">

      <section className="about-simple">

        {/* IMAGE */}
        <div className="about-image">
          <img
            src={data.image}
            alt={data.title}
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div className="about-content">

          <p className="about-eyebrow">
            {data.eyebrow}
          </p>

          <h1>
            {data.title}
          </h1>

          <p className="about-description">
            {data.description}
          </p>

          {/* STATS */}
          <div className="about-stats">

            {data.stats?.map((stat) => (
              <div
                className="about-stat"
                key={stat.id}
              >
                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

          {/* PHONE */}
          {data.phone && (
            <a
              href={data.phone.href}
              className="about-phone"
            >
              <span className="about-phone-icon">
                <Phone size={18} />
              </span>

              <span className="about-phone-text">
                <small>
                  {data.phone.label}
                </small>

                <strong>
                  {data.phone.number}
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>
          )}

        </div>

      </section>

    </main>
  );
}