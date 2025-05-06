export interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  text: string;
  name: string;
}

export interface HomeContent {
  home: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      text: string;
      link: string;
    };
    visual: {
      type: string;
      src: string;
      alt: string;
    };
    benefits: Benefit[];
    testimonials: Testimonial[];
    quickLinks: Array<{
      label: string;
      url: string;
    }>;
    cta2: {
      text: string;
      link: string;
    };
  };
} 