export type ImagePosition = "top" | "center" | "bottom";

export interface ServiceOffering {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imagePosition?: ImagePosition;
  categorySlug: string;
  services: string[];
}

export interface ServicePage {
  slug: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: ImagePosition;
  services: string[];
  type: "category" | "offering";
  categorySlug?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  icon: string;
  image: string;
  imagePosition?: ImagePosition;
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
    image: "/images/services/security-services-guard.jpg",
    imagePosition: "top",
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
    image: "/images/services/healthcare-services.jpg",
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
    image: "/images/services/education-security.jpg",
    imagePosition: "top",
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
    image: "/images/services/facility-support-services.jpg",
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
    image: "/images/services/cleaning-services.jpg",
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
    image: "/images/services/warehouse-services.jpg",
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

export const serviceOfferings: ServiceOffering[] = [
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    shortDescription:
      "Uniformed security officers providing visible deterrence and professional on-site protection.",
    description:
      "Our manned guarding teams deliver a visible, professional security presence for commercial, retail, construction and residential sites. SIA-licensed officers deter threats, manage access and protect people and property around the clock.",
    image: "/images/services/manned-guarding-services.jpg",
    imagePosition: "top",
    categorySlug: "security",
    services: [
      "Static Site Guarding",
      "Reception and Front Desk Cover",
      "Access Control and Visitor Management",
      "Incident Reporting and Escalation",
      "Out-of-Hours Building Security",
      "Construction Site Guarding",
      "Retail and Commercial Guarding",
      "Emergency Response on Site",
    ],
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    shortDescription:
      "Marked vehicle patrols to deter threats and respond swiftly across multiple sites.",
    description:
      "Our mobile patrol service provides cost-effective protection across multiple locations. Marked security vehicles conduct scheduled and random patrols, lock-up checks and rapid alarm response to keep your premises secure when permanent staffing is not required.",
    image: "/images/services/mobile-patrols.jpg",
    categorySlug: "security",
    services: [
      "Scheduled Mobile Patrols",
      "Random Deterrent Patrols",
      "Lock and Unlock Services",
      "Alarm Response and Key Holding",
      "Perimeter and Building Checks",
      "Vacant Property Inspections",
      "Incident Reporting",
      "Multi-Site Patrol Routes",
    ],
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV Monitoring",
    shortDescription:
      "Remote monitoring and real-time alerts to keep your premises secure around the clock.",
    description:
      "Our CCTV monitoring service provides professional remote surveillance for your premises. Trained operators monitor live feeds, verify incidents and coordinate rapid response to protect your site 24 hours a day.",
    image: "/images/services/cctv-monitoring-services.jpg",
    imagePosition: "top",
    categorySlug: "security",
    services: [
      "24/7 Remote CCTV Monitoring",
      "Live Incident Verification",
      "Real-Time Alert Escalation",
      "Multi-Camera Site Monitoring",
      "Out-of-Hours Surveillance",
      "Alarm and Event Response",
      "Incident Logging and Reporting",
      "Integration with On-Site Security Teams",
    ],
  },
  {
    slug: "key-holding",
    title: "Key Holding Services",
    shortDescription:
      "Protect your premises and give your team greater peace of mind with our professional key holding service.",
    description:
      "Protect your premises and give your team greater peace of mind with our professional key holding service. We securely hold your property keys and provide authorised access when required.\n\nOur trained security officers offer a reliable, professional response, helping reduce risk to employees and ensuring your premises remain supported outside normal working hours.",
    image: "/images/services/key-holding-services.jpg",
    imagePosition: "top",
    categorySlug: "security",
    services: [
      "Secure Key Storage",
      "Authorised Access Response",
      "24/7 Emergency Call-Out",
      "Lock and Unlock Services",
      "Alarm Response with Key Access",
      "Out-of-Hours Premises Support",
      "Trained SIA-Licensed Officers",
      "Reduced Risk to Your Team",
    ],
  },
];

export function getServicePage(slug: string): ServicePage | null {
  const offering = serviceOfferings.find((item) => item.slug === slug);
  if (offering) {
    return {
      slug: offering.slug,
      title: offering.title,
      description: offering.description,
      image: offering.image,
      imagePosition: offering.imagePosition,
      services: offering.services,
      type: "offering",
      categorySlug: offering.categorySlug,
    };
  }

  const category = serviceCategories.find((item) => item.slug === slug);
  if (category) {
    return {
      slug: category.slug,
      title: category.title,
      description: category.description,
      image: category.image,
      imagePosition: category.imagePosition,
      services: category.services,
      type: "category",
    };
  }

  return null;
}

export function getAllServiceSlugs(): string[] {
  return [
    ...serviceCategories.map((category) => category.slug),
    ...serviceOfferings.map((offering) => offering.slug),
  ];
}

export function getRelatedServicePages(slug: string): ServicePage[] {
  return getAllServiceSlugs()
    .filter((itemSlug) => itemSlug !== slug)
    .map((itemSlug) => getServicePage(itemSlug)!)
    .slice(0, 6);
}

export const companyInfo = {
  name: "Jaguar Security Services Ltd",
  tagline: "Your Trust, Our Priority",
  motto: "Reliable • Flexible • Professional",
  pillars: ["PROTECT", "MONITOR", "RESPOND", "ASSURE"],
  phone: "07804 497664",
  phone2: "07428 681580",
  landline: "0161 6696786",
  email: "info@jaguarsecurityservices.co.uk",
  website: "https://www.jaguarsecurityservices.co.uk",
  address: {
    line1: "66 Boyle St",
    line2: "Cheetham Hill, Manchester",
    postcode: "M8 8UW",
    full: "66 Boyle St, Cheetham Hill, Manchester M8 8UW",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=66+Boyle+St,+Cheetham+Hill,+Manchester+M8+8UW",
  },
  description:
    "We provide professional security-led facilities and cleaning support services for commercial, residential, retail, construction, healthcare, education and warehouse clients. Alongside our core security services, we also offer facilities support, reception services, cleaning services, warehouse security services, healthcare security and education sector security. Our aim is to provide clients with a reliable, flexible and professional one-stop solution for security, site protection, building support and day-to-day operational support.",
};

export interface HeroService {
  slug: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: ImagePosition;
}

export const heroServices: HeroService[] = [
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    description:
      "Uniformed security officers providing visible deterrence and professional on-site protection.",
    image: "/images/services/manned-guarding-services.jpg",
    imagePosition: "top",
  },
  {
    slug: "mobile-patrols",
    title: "Mobile Patrols",
    description:
      "Marked vehicle patrols to deter threats and respond swiftly across multiple sites.",
    image: "/images/services/mobile-patrols.jpg",
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV Monitoring",
    description:
      "Remote monitoring and real-time alerts to keep your premises secure around the clock.",
    image: "/images/services/cctv-monitoring-services.jpg",
    imagePosition: "top",
  },
  {
    slug: "key-holding",
    title: "Key Holding Services",
    description:
      "Protect your premises and give your team greater peace of mind with our professional key holding service.",
    image: "/images/services/key-holding-services.jpg",
    imagePosition: "top",
  },
  {
    slug: "facilities",
    title: "Facilities Support",
    description:
      "Reception, concierge and visitor management for seamless front-of-house operations.",
    image: "/images/services/facility-support-services.jpg",
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
  about: "/images/services/about-security-guard.jpg",
  aboutTeam: "/images/services/guarding.jpg",
  contact: "/images/services/contact-security-guard.jpg",
  services: "/images/services/security-services-guard.jpg",
  ctaQuote: "/images/services/cta-quote-security.jpg",
  ctaExplore: "/images/services/cta-explore-security.jpg",
};
