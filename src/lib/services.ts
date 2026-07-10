export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  icon: string;
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
  landline: "0161 669 6786",
  email: "info@jaguarsecurityservices.co.uk",
  website: "https://www.jaguarsecurityservices.co.uk",
  address: {
    line1: "355 Broadway",
    line2: "Chadderton, Oldham",
    postcode: "OL9 8RN",
    full: "355 Broadway, Chadderton, Oldham OL9 8RN",
  },
  description:
    "We provide professional security-led facilities and cleaning support services for commercial, residential, retail, construction, healthcare, education and warehouse clients. Our aim is to provide clients with a reliable, flexible and professional one-stop solution for security, site protection, building support and day-to-day operational support.",
};

export const heroServices = [
  {
    title: "Manned Guarding",
    description:
      "Uniformed security officers providing visible deterrence and professional on-site protection.",
    href: "/services/security",
  },
  {
    title: "Mobile Patrols",
    description:
      "Marked vehicle patrols to deter threats and respond swiftly across multiple sites.",
    href: "/services/security",
  },
  {
    title: "CCTV Monitoring",
    description:
      "Remote monitoring and real-time alerts to keep your premises secure around the clock.",
    href: "/services/security",
  },
  {
    title: "Facilities Support",
    description:
      "Reception, concierge and visitor management for seamless front-of-house operations.",
    href: "/services/facilities",
  },
];
