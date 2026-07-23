import React from 'react';
import GridOrCarousel from '@/components/ui/GridOrCarousel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';

export default function PlanVisualsSection() {
  const plans = [
    {
      name: 'Basic Plan',
      description: 'Perfect for startups. Includes a high-converting landing page, contact form, and responsive design.',
      alt: 'Clean modern landing page website preview for basic plan',
      link: '#pricing'
    },
    {
      name: 'Starter Plan',
      description: 'Ideal for growing businesses. Multi-page website with CMS integration and basic SEO optimization.',
      alt: 'Professional multi-page business website preview for starter plan',
      link: '#pricing'
    },
    {
      name: 'Premium Plan',
      description: 'For established brands. Full e-commerce functionality, custom web app features, and advanced analytics.',
      alt: 'Advanced e-commerce dashboard website preview for premium plan',
      link: '#pricing'
    }
  ];

  return (
    <section className="bg-background">
      <div className="w-content-width mx-auto flex flex-col">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="px-3 py-1 text-sm card rounded w-fit">
            <p>PLAN VISUALS</p>
          </div>
          <TextAnimation
            text="Mini Website Previews"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="text-4xl md:text-5xl font-bold"
          />
          <p className="text-lg text-accent max-w-content-width">
            See what you get with each of our tailored web solution tiers.
          </p>
        </div>

        <ScrollReveal variant="slide-up">
          <GridOrCarousel>
            {plans.map((plan, i) => (
              <div key={i} className="card rounded-lg overflow-hidden flex flex-col h-full">
                <div className="relative h-48 md:h-64 w-full overflow-hidden bg-card">
                  <img 
                    src="" 
                    alt={plan.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow gap-4">
                  <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-accent flex-grow">{plan.description}</p>
                  <Button text="View Plan" href={plan.link} variant="secondary" className="w-full mt-4" />
                </div>
              </div>
            ))}
          </GridOrCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}