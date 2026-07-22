import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingSplitCards from '@/components/sections/pricing/PricingSplitCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Layout, Search, Shield, Smartphone, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplit
      tag="CREATIVE DIGITAL SOLUTIONS"
      title="We build brands that convert."
      description="Creator Studios specializes in high-performing, professional web solutions tailored for startups and growing businesses. Let's make your digital first impression count."
      primaryButton={{
        text: "View Pricing",
        href: "#pricing",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/technology-circle-blue-background-digital-transformation-concept_53876-124682.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="About Creator Studios"
      descriptions={[
        "Creator Studios is a premier digital agency focused on delivering high-impact, conversion-ready websites. We blend modern aesthetics with technical precision to ensure your business stands out in a crowded market.",
        "Our team takes the time to understand your vision, transforming it into a high-performance digital presence that scales alongside your business goals.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBorderGlow
      tag="WHY CHOOSE US"
      title="Built for growth"
      description="Comprehensive solutions that bridge the gap between design and functionality."
      features={[
        {
          icon: Zap,
          title: "Lightning Fast",
          description: "Optimized performance to keep your users engaged.",
        },
        {
          icon: Shield,
          title: "Secure & Reliable",
          description: "SSL certified and secure hosting for peace of mind.",
        },
        {
          icon: Search,
          title: "Advanced SEO",
          description: "Search engine optimized content to boost visibility.",
        },
        {
          icon: Smartphone,
          title: "Mobile Responsive",
          description: "Flawless experiences across all devices and screen sizes.",
        },
        {
          icon: Layout,
          title: "Custom Design",
          description: "Bespoke UI/UX crafted to reflect your unique brand identity.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSplitCards
      tag="TRANSPARENT PRICING"
      title="Choose your plan"
      description="Select the package that fits your business needs."
      plans={[
        {
          tag: "Standard",
          price: "$250",
          period: "one-time",
          description: "Perfect for new businesses looking for a professional start.",
          primaryButton: {
            text: "Choose Basic",
            href: "#contact",
          },
          featuresTitle: "Basic Essentials",
          features: [
            "Up to 3 Pages",
            "Mobile Friendly",
            "Contact Form",
            "Basic SEO",
            "Fast Loading",
          ],
        },
        {
          tag: "Popular",
          price: "$499",
          period: "one-time",
          description: "Everything needed to scale and attract more customers.",
          primaryButton: {
            text: "Choose Starter",
            href: "#contact",
          },
          featuresTitle: "Starter Suite",
          features: [
            "Up to 7 Pages",
            "Advanced SEO",
            "Booking System",
            "Image Gallery",
            "Priority Support",
          ],
        },
        {
          tag: "Premium",
          price: "$699",
          period: "one-time",
          description: "Comprehensive features for high-performing brands.",
          primaryButton: {
            text: "Choose Premium",
            href: "#contact",
          },
          featuresTitle: "Premium Power",
          features: [
            "Up to 12 Pages",
            "Custom Animations",
            "E-commerce Ready",
            "Blog Setup",
            "30 Days Support",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="TESTIMONIALS"
      title="Trusted by creators"
      description="Hear what our clients say about us."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Startup Founder",
          quote: "Incredible work on our new site. Fast, professional, and looks great.",
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-young-businessman-walking-near-business-center_171337-19782.jpg",
        },
        {
          name: "Michael R.",
          role: "Small Business Owner",
          quote: "The Starter plan was a game-changer for our lead generation.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-positive-girl-smiling_176420-9609.jpg",
        },
        {
          name: "Emily C.",
          role: "Creative Professional",
          quote: "Creator Studios exceeded all our expectations for design and functionality.",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-brown-suit-wearing-glasses-looking-with-smile-happy-face_141793-111811.jpg",
        },
        {
          name: "David W.",
          role: "Entrepreneur",
          quote: "The Premium package is well worth the investment. Scaling made easy.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-banner-concept-with-copy-space_23-2149601461.jpg",
        },
        {
          name: "Jessica L.",
          role: "Marketing Lead",
          quote: "Smooth process and amazing end result. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businesswoman-pointing-finger-increasing-graph-transparent-glass_23-2147857306.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="OUR REACH"
      title="Proven results"
      description="Driving performance with precision."
      metrics={[
        {
          value: "150+",
          description: "Projects Completed",
        },
        {
          value: "98%",
          description: "Client Satisfaction",
        },
        {
          value: "24/7",
          description: "Support Ready",
        },
        {
          value: "50+",
          description: "Global Clients",
        },
        {
          value: "4.9/5",
          description: "Average Rating",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="FREQUENTLY ASKED"
      title="Need answers?"
      description="Quick answers to common questions about our services."
      items={[
        {
          question: "What is the turnaround time?",
          answer: "Turnaround ranges from 2 to 7 days depending on the selected plan.",
        },
        {
          question: "Do you offer post-launch support?",
          answer: "Our Premium plan includes 30 days of dedicated support.",
        },
        {
          question: "Can I upgrade my plan later?",
          answer: "Absolutely! We're here to help you grow whenever you're ready.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, all plans include secure, high-speed cloud hosting.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, bank transfers, and PayPal.",
        },
      ]}
      textAnimation="fade"
      imageSrc="http://img.b2bpic.net/free-photo/flat-lay-notepad-lamp-workplace-night_169016-17382.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="READY TO START?"
      text="Let’s build your digital presence together."
      primaryButton={{
        text: "Contact Us Now",
        href: "mailto:hello@creatorstudios.com",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
