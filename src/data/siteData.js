export const contactData = {
  email: "delightspa.jodhpur@gmail.com",
  phone: "+917412845607",
  address: "Office No 402, 4th Floor Harnath Tower, Plot No 117, P.W.D Colony, Jodhpur, Rajasthan 342001",
  whatsapp: "+917412845607",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582051532228",
  },

  whatsappMessage:
    "Hello, I would like to know more about your services.",

  map: {
    embedUrl:
     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.703668083332!2d73.01767347607898!3d26.271279287360176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c46dfcbffff%3A0x47e371176b21fa4d!2sDelight%20Spa%20%26%20Hammam!5e0!3m2!1sen!2sin!4v1790756069120!5m2!1sen!2sin" 
  },
};

const siteData = {
  brand: "Delight Spa",
  description:
    "Delight Spa Jodhpur is a peaceful place to enjoy a relaxing spa experience, quality treatments and a welcoming atmosphere.",

  logo: "/images/logo/1.png",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Offers",
      href: "/offers",
    },
    {
      label: "About",
      href: "/about",
    },
   {
    label: "Contact",
    href: "/contact",
  },
  ],

  appointment: {
    label: "Book Appointment",
    href: "/contact",
  },

  /* =====================================================
     HERO
  ===================================================== */

  hero: {
    desktopSlides: [
      {
        id: 1,
        image: "/images/heroimages/hero (1).png",

        eyebrow: "DELIGHT SPA",

        title: " Best Spa in Jodhpur",

        description:
          "Escape into a peaceful luxury spa experience designed to relax your body, refresh your mind and restore your energy.",

        button: {
          label: "Explore Services",
          href: "/services",
        },
      },

      {
        id: 2,
        image: "/images/heroimages/hero (2).png",

        eyebrow: "LUXURY WELLNESS",

        title: "New Staff Members, New Treatments available",

        description:
          "Discover carefully designed treatments and a calming atmosphere created around your comfort and complete relaxation.",

        button: {
          label: "Discover More",
          href: "/about",
        },
      },

      {
        id: 3,
        image: "/images/heroimages/hero (3).png",

        eyebrow: "YOUR WELLNESS JOURNEY",

        title: "Give Yourself Time To Relax",

        description:
          "Take a moment for yourself and experience soothing treatments in an elegant and welcoming spa environment.",

        button: {
          label: "Book Your Experience",
          href: "/contact",
        },
      },
    ],

    /* =====================================================
       MOBILE
       ONE VIDEO + THREE TEXT SLIDES
    ===================================================== */

    mobile: {
      video: "/images/heroimages/1.mp4",

      slides: [
        {
          id: 1,

          eyebrow: "DELIGHT SPA",

          title: " Best Spa in Jodhpur ",

          description:
            "Escape into a peaceful luxury spa experience designed to relax your body, refresh your mind and restore your energy.",
        },

        {
          id: 2,

          eyebrow: "LUXURY WELLNESS",

          title: "New Staff Members, New Treatments available",

          description:
            "Discover carefully designed treatments and a calming atmosphere created around your comfort and complete relaxation.",
        },

        {
          id: 3,

          eyebrow: "YOUR WELLNESS JOURNEY",

          title: " Best Spa Services in Jodhpur ",

          description:
            "Take a moment for yourself and experience soothing treatments in an elegant and welcoming spa environment.",
        },
      ],
    },
  },
};

export default siteData;