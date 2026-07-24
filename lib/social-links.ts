// Single source of truth for every social/contact link used across the site.
// Update a URL here once and it updates everywhere it's imported —
// Footer, About, Contact, anywhere else that needs it.
//
// Usage:
//   import { SOCIAL_LINKS } from '@/lib/social-links';
//   SOCIAL_LINKS.instagram.url
//   SOCIAL_LINKS.instagram.label

export interface SocialLink {
  label: string;
  url: string;
}

export const SOCIAL_LINKS = {
  instagram: {
    label: 'Instagram',
    url: 'https://instagram.com/aether.studio',
  },
  tiktok: {
    label: 'TikTok',
    url: 'https://tiktok.com/@aether.studio',
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/aether-studio',
  },
  whatsapp: {
    label: 'WhatsApp',
    url: 'https://wa.me/92XXXXXXXXXX', // TODO: replace with your real WhatsApp number
  },
  email: {
    label: 'Email',
    url: 'mailto:contact@aether.studio',
  },
} as const satisfies Record<string, SocialLink>;

// Ordered array for places that render a row/list of icons (e.g. Footer)
export const SOCIAL_LINKS_LIST: (SocialLink & { key: keyof typeof SOCIAL_LINKS })[] =
  (Object.keys(SOCIAL_LINKS) as (keyof typeof SOCIAL_LINKS)[]).map((key) => ({
    key,
    ...SOCIAL_LINKS[key],
  }));
