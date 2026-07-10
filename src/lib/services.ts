export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  icon: string;
  image: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "security",
    title: "Security Services",
    shortDescription:
      "Professional manned guarding, patrols, CCTV monitoring and site protection.",
    description:
      "Our core security services provide round-the-clock protection for commercial, residential, retail and construction environments across Greater Manchester.",
    icon: "shield",
    image: "/images/services/security.jpg",
    services: [
      "Manned Guarding",
      "Door Supervision",
      "Event Security",
      "CCTV Monitoring",
      "Mobile Patrols",
      "Key Holding",
      "Alarm Response",
      "Lock and Unlock Services",
      "Construction Site Security",
      "Retail Security",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & NHS Security",
    shortDescription:
      "Specialist security for hospitals, GP surgeries, care homes and NHS sites.",
    description:
      "We understand the sensitive nature of healthcare environments and deliver discreet, professional security that supports staff, patients and visitors.",
    icon: "heart-pulse",
    image: "/images/services/healthcare.jpg",
    services: [
      "NHS Site Security",
      "GP Surgery Security",
      "Care Home Security",
      "Hospital Reception Security Support",
      "Healthcare Facility Patrols",
      "Staff and Visitor Safety Support",
      "Access Control for Healthcare Buildings",
      "Out-of-Hours Healthcare Site Security",
    ],
  },
  {
    slug: "education",
    title: "Education Security",
    shortDescription:
      "Protecting schools, colleges, universities and training centres.",
    description:
      "From campus patrols to reception support, we help educational institutions maintain safe, welcoming environments for students and staff.",
    icon: "graduation-cap",
    image: "/images/services/education.jpg",
    services: [
      "School Security",
      "College Security",
      "University Security",
      "Training Centre Security",
      "Student Accommodation Security",
      "Reception and Visitor Management",
      "Access Control for Educational Buildings",
      "Campus Patrols",
      "Out-of-Hours Building Security",
    ],
  },
  {
    slug: "facilities",
    title: "Facilities Support",
    shortDescription:
      "Reception, concierge and front-of-house operational support.",
    description:
      "Extend your on-site team with professional facilities support that keeps buildings running smoothly day to day.",
    icon: "building-2",
    image: "/images/services/facilities.jpg",
    services: [
      "Reception Support",
      "Concierge Services",
      "Visitor Management",
      "Contractor Access Control",
      "Building Opening and Closing",
      "Basic Site Support",
      "Front Desk Support",
      "Parcel Handling",
    ],
  },
  {
    slug: "cleaning",
    title: "Cleaning Services",
    shortDescription:
      "Office, commercial and deep cleaning for every environment.",
    description:
      "Reliable cleaning services that complement our security offering — one trusted partner for site protection and presentation.",
    icon: "sparkles",
    image: "/images/services/cleaning.jpg",
    services: [
      "Office Cleaning",
      "Commercial Cleaning",
      "Communal Area Cleaning",
      "End of Tenancy Cleaning",
      "Construction Site Cleaning",
      "Deep Cleaning Services",
    ],
  },
  {
    slug: "warehouse",
    title: "Warehouse Security",
    shortDescription:
      "Gatehouse, access control and stock protection for logistics sites.",
    description:
      "Comprehensive warehouse and distribution centre security — from driver check-in to out-of-hours patrols.",
    icon: "warehouse",
    image: "/images/services/warehouse.jpg",
    services: [
      "Warehouse Security Guards",
      "Gatehouse Security",
      "Access Control",
      "Driver Check-In and Check-Out",
      "Vehicle Movement Logs",
      "Delivery Yard Security",
      "Loading Bay Security",
      "Stock Protection Support",
      "Out-of-Hours Warehouse Patrols",
    ],
  },
];

export const companyInfo = {
  name: "Jaguar Security Services Ltd",
  tagline: "Your Trust, Our Priority",
  motto: "Reliable • Flexible • Professional",
  pillars: ["PROTECT", "MONITOR", "RESPOND", "ASSURE"],
  phone: "07804 497664",
  landline: "0161 6696786",
  email: "info@jaguarsecurityservices.co.uk",
  website: "https://www.jaguarsecurityservices.co.uk",
  address: {
    line1: "355 Broadway",
    line2: "Chadderton, Oldham",
    postcode: "OL9 8RN",
    full: "355 Broadway, Chadderton, Oldham OL9 8RN",
  },
  description:
    "We provide professional security-led facilities and cleaning support services for commercial, residential, retail, construction, healthcare, education and warehouse clients. Alongside our core security services, we also offer facilities support, reception services, cleaning services, warehouse security services, healthcare security and education sector security. Our aim is to provide clients with a reliable, flexible and professional one-stop solution for security, site protection, building support and day-to-day operational support.",
};

export const heroServices = [
  {
    title: "Manned Guarding",
    description:
      "Uniformed security officers providing visible deterrence and professional on-site protection.",
    href: "/services/security",
    image: "/images/services/guarding.jpg",
  },
  {
    title: "Mobile Patrols",
    description:
      "Marked vehicle patrols to deter threats and respond swiftly across multiple sites.",
    href: "/services/security",
    image: "/images/services/patrol.jpg",
  },
  {
    title: "CCTV Monitoring",
    description:
      "Remote monitoring and real-time alerts to keep your premises secure around the clock.",
    href: "/services/security",
    image: "/images/services/cctv.jpg",
  },
  {
    title: "Facilities Support",
    description:
      "Reception, concierge and visitor management for seamless front-of-house operations.",
    href: "/services/facilities",
    image: "/images/services/reception.jpg",
  },
];

export const stats = [
  { value: "24/7", label: "Emergency Response" },
  { value: "6+", label: "Service Sectors" },
  { value: "100%", label: "Client Focused" },
  { value: "SIA", label: "Licensed Officers" },
];

export const testimonials = [
  {
    quote:
      "Jaguar Security Services provide us with professional, reliable security guarding. Their team is always attentive and gives us complete peace of mind.",
    author: "Commercial Client",
    location: "Greater Manchester",
  },
  {
    quote:
      "We use Jaguar for reception support and out-of-hours security. They respond quickly, communicate clearly and never let us down.",
    author: "Healthcare Facility",
    location: "Oldham",
  },
  {
    quote:
      "From warehouse gatehouse security to mobile patrols, Jaguar deliver a flexible service tailored exactly to our operational needs.",
    author: "Logistics Partner",
    location: "Chadderton",
  },
];

export const heroImage = "/images/hero.jpg";

export const pageImages = {
  about: "/images/services/about.jpg",
  aboutTeam: "/images/services/guarding.jpg",
  contact: "/images/services/contact.jpg",
  services: "/images/services/security.jpg",
  ctaQuote: "/images/services/office.jpg",
  ctaExplore: "/images/services/facilities.jpg",
};
