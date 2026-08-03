export type NavItem = { href: string; label: string; key: string };
export type ServiceItem = NavItem & { icon: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/about", label: "About us", key: "about" },
  { href: "/blog", label: "Blog", key: "blog" },
];

// Services dropdown (icons are lucide names)
export const SERVICES: ServiceItem[] = [
  {
    href: "/housing-associations",
    label: "Housing Associations",
    key: "housing",
    icon: "building-2",
  },
  { href: "/small-businesses", label: "Small Businesses", key: "small-business", icon: "store" },
  {
    href: "/principal-designer-services",
    label: "Principal Designer Services",
    key: "pds",
    icon: "compass",
  },
  {
    href: "/first-aid-fire-marshal-training",
    label: "First Aid & Fire Marshal Training",
    key: "training",
    icon: "heart-pulse",
  },
];
