import React from 'react';
import Button from '@/components/ui/Button';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ImageOrVideo from '@/components/ui/ImageOrVideo';
import { Check } from 'lucide-react';

export default function PlanVisualsSection() {
  const plans = [
    {
      tag: "Basic",
      price: "$399",
      description: "Perfect for new businesses looking for a professional start.",
      features: ["Up to 3 Pages", "Mobile Friendly", "Contact Form"],
      primaryButton: {
        text: "Choose Basic",
        href: "https://creator-studios-2963.myshopify.com/products/standard?pr_prod_strat=collection_fallback&pr_rec_id=5fb631241&pr_rec_pid=9496676761813&pr_ref_pid=9496710774997&pr_seq=uniform"
      },
      imageSrc: "https://picsum.photos/seed/531144272/1200/800"
    },
    {
      tag: "Starter",
      price: "$599",
      description: "Everything needed to scale and attract more customers.",
      features: ["Up to 7 Pages", "Advanced SEO", "Booking System"],
      primaryButton: {
        text: "Choose Starter",
        href: "https://creator-studios-2963.myshopify.com/products/popular?pr_prod_strat=collection_fallback&pr_rec_id=c2c2faced&pr_rec_pid=9496710774997&pr_ref_pid=9496676761813&pr_seq=uniform"
      },
      imageSrc: "https://picsum.photos/seed/87347157/1200/800"
    },
    {
      tag: "Premium",
      price: "$899",
      description: "Comprehensive features for high-performing brands.",
      features: ["Up to 12 Pages", "E-commerce Ready", "Blog Setup"],
      primaryButton: {
        text: "Choose Premium",
        href: "https://creator-studios-2963.myshopify.com/products/premium-1?pr_prod_strat=collection_fallback&pr_rec_id=c2c2faced&pr_rec_pid=9496710807765&pr_ref_pid=9496676761813&pr_seq=uniform"
      },
      imageSrc: "https://picsum.photos/seed/1611965666/1200/800"
    }
  ];

  return (
    <div data-webild-section="plan-visuals" id="plan-visuals" className="bg-background">
      <div className="flex flex-col w-content-width mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="px-3 py-1 text-sm card rounded w-fit">
            <p>PLAN OVERVIEW</p>
          </div>
          <TextAnimation
            text="Choose your path"
            variant="slide-up"
            gradientText={false}
            tag="h2"
            className="text-4xl md:text-5xl font-semibold text-center text-foreground"
          />
          <TextAnimation
            text="A quick look at our Basic, Starter, and Premium plans."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="text-lg text-accent text-center max-w-content-width"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.tag} variant="slide-up" delay={index * 0.1} className="flex flex-col card rounded overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <ImageOrVideo imageSrc={plan.imageSrc} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col p-6 gap-6 flex-grow">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-semibold text-foreground">{plan.tag}</h3>
                  <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-accent text-sm leading-relaxed">{plan.description}</p>
                <div className="flex flex-col gap-3 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex items-center justify-center shrink-0 size-5 primary-button rounded-full">
                        <Check className="size-3 text-primary-cta-text" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <Button text={plan.primaryButton.text} href={plan.primaryButton.href} variant="primary" className="w-full" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}