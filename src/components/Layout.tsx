import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Creator Studios"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Creator Studios"
      columns={[
        {
          title: "Agency",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Portfolio",
              href: "#",
            },
          ],
        },
        {
          title: "Plans",
          items: [
            {
              label: "Basic",
              href: "#pricing",
            },
            {
              label: "Starter",
              href: "#pricing",
            },
            {
              label: "Premium",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Creator Studios. All rights reserved."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
