import Service from "../components/Service";
import Offercard from "../components/Offercard";

import serviceData from "../data/serviceData";

export default function Services() {
  return (
    <main className="services-page-wrapper">

      {/* =========================================
          SERVICES
      ========================================= */}

      <section
        id="services"
        className="services-page"
      >
        {serviceData.categories.map((category) => (
          <Service
            key={category.id}
            category={category}
          />
        ))}
      </section>




    </main>
  );
}