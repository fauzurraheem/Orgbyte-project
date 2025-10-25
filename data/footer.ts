import { FooterSection } from "@/types/footer";

export const footerSections: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { label: 'Human Rights & Ethics', href: '#' },
        { label: 'News & Blogs', href: '#' },
        { label: 'Careers', href: '#', badge: 'New' },
        { label: 'Contact Us', href: '#' },
        { label: 'Culture & Meritocracy', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Refund Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance Guide', href: '#' },
        { label: 'GDPR / DPA Info', href: '#' },
      ],
    },
    {
      title: 'Trust & Compliance',
      links: [
        { label: 'Accessibility Statement', href: '#' },
        { label: 'AI Use & Governance', href: '#' },
        { label: 'Whistleblower Policy', href: '#' },
        { label: 'Sustainability Statement', href: '#' },
        { label: 'Community Engagement', href: '#' },
        { label: 'Data Processing & Compliance', href: '#' },
      ],
    },
    {
      title: 'Developer Portal',
      links: [
        { label: 'API documentation', href: '#', external: true },
        { label: 'Integration Guides', href: '#', external: true },
        { label: 'Sandbox environment information', href: '#', external: true },
      ],
    },
  ];