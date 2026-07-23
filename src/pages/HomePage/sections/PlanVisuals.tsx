import React from 'react';
import PricingCenteredCards from '@/components/sections/pricing/PricingCenteredCards';
import SectionErrorBoundary from '@/components/ui/SectionErrorBoundary';

export default function PlanVisualsSection() {
  return (
    <div data-webild-section="plan-visuals" id="plan-visuals">
      <SectionErrorBoundary name="plan-visuals">
        <PricingCenteredCards
          tag="PLAN OVERVIEW"
          title="Choose your path"
          description="A quick look at our Basic, Starter, and Premium plans."
          plans={[
            {
              tag: "Basic",
              price: "$399",
              description: "Perfect for new businesses looking for a professional start.",
              features: ["Up to 3 Pages", "Mobile Friendly", "Contact Form"],
              primaryButton: {
                text: "Choose Basic",
                href: "https://creator-studios-2963.myshopify.com/products/standard?pr_prod_strat=collection_fallback&pr_rec_id=5fb631241&pr_rec_pid=9496676761813&pr_ref_pid=9496710774997&pr_seq=uniform"
              }
            },
            {
              tag: "Starter",
              price: "$599",
              description: "Everything needed to scale and attract more customers.",
              features: ["Up to 7 Pages", "Advanced SEO", "Booking System"],
              primaryButton: {
                text: "Choose Starter",
                href: "https://creator-studios-2963.myshopify.com/products/popular?pr_prod_strat=collection_fallback&pr_rec_id=c2c2faced&pr_rec_pid=9496710774997&pr_ref_pid=9496676761813&pr_seq=uniform"
              }
            },
            {
              tag: "Premium",
              price: "$899",
              description: "Comprehensive features for high-performing brands.",
              features: ["Up to 12 Pages", "E-commerce Ready", "Blog Setup"],
              primaryButton: {
                text: "Choose Premium",
                href: "https://creator-studios-2963.myshopify.com/products/premium-1?pr_prod_strat=collection_fallback&pr_rec_id=c2c2faced&pr_rec_pid=9496710807765&pr_ref_pid=9496676761813&pr_seq=uniform"
              }
            }
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}