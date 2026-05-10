// Bilingual UI dictionary. Edit copy here only.
//
// Keep `en` and `el` shapes identical. The compiler will warn if they drift.

import type { Lang, Localized } from './site';

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    menu: string;
    contact: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    languageEnglish: string;
    languageGreek: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    hoursBadge: string;
    locationBadge: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    pullQuote: string;
    pullQuoteAttribution: string;
    imageAlt: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bannerAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    emailLabel: string;
    instagramLabel: string;
    whatsappLabel: string;
    mapsCta: string;
    closingCtaTitle: string;
    closingCtaSubtitle: string;
    closingImageAlt: string;
  };
  footer: {
    rights: string;
    crafted: string;
  };
};

const en: Dictionary = {
  meta: {
    title: 'DICKIES Microbakery · Sivota, Greece',
    description:
      'A new microbakery cafe in Sivota, Greece. illy coffee, fresh bread, sandwiches, smoothies, juices, fruit salads and yoghurt. Open daily 07:00 – 19:00.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    contact: 'Contact',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    languageEnglish: 'EN',
    languageGreek: 'GR',
  },
  hero: {
    eyebrow: 'Microbakery · Sivota',
    title: 'Fresh coffee.',
    titleAccent: 'Fresh mornings.',
    subtitle:
      'A new microbakery cafe in Sivota, brewing illy coffee and serving freshly baked bread, sandwiches, smoothies and bright all-day plates from 7 in the morning to 7 in the evening.',
    primaryCta: 'See the menu',
    secondaryCta: 'About us',
    hoursBadge: 'Open 07:00 – 19:00',
    locationBadge: 'Sivota, Greece',
    imageAlt: 'A hand opening a DICKIES bakery box of fresh donuts.',
  },
  about: {
    eyebrow: 'About us',
    title: 'A small bakery with a big morning.',
    paragraphs: [
      'DICKIES is a newly opened microbakery cafe in the heart of Sivota — built around great coffee, honest ingredients and a slow, sunlit pace.',
      'Every day we brew illy espresso, bake bread in small batches, blend fresh smoothies and juices, and put together light, bright plates of yoghurt, fruit salads and sandwiches that keep you going from breakfast to sunset.',
      "We're a daily place — for the early swim, the long lunch, the afternoon iced coffee. Pull up a chair, take your time. You're at your happy place.",
    ],
    pullQuote: 'Powered by coffee, driven by joy.',
    pullQuoteAttribution: '— the dickies',
    imageAlt: 'DICKIES brand details: a person in a "More than coffee" t-shirt inside the cafe and a DICKIES tote bag.',
  },
  menu: {
    eyebrow: 'Menu',
    title: 'Curated, fresh, all day.',
    subtitle:
      'A short, considered menu that changes with the season. illy coffee, microbakery breads and bright Mediterranean staples.',
    bannerAlt: 'Stack of DICKIES paper coffee cups with coffee beans.',
  },
  contact: {
    eyebrow: 'Visit us',
    title: 'Find DICKIES in Sivota.',
    subtitle: 'Drop in any morning, stay through the afternoon. We are open daily from seven to seven.',
    locationLabel: 'Where',
    locationValue: 'Sivota, Greece',
    hoursLabel: 'Hours',
    hoursValue: 'Open daily · 07:00 – 19:00',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
    mapsCta: 'Open in Maps',
    closingCtaTitle: "More than coffee — it's your happy place.",
    closingCtaSubtitle: 'See you tomorrow at seven.',
    closingImageAlt: 'DICKIES mascots beside the slogan: more than coffee — it\'s your happy place.',
  },
  footer: {
    rights: 'All rights reserved.',
    crafted: 'Made fresh in Sivota.',
  },
};

const el: Dictionary = {
  meta: {
    title: 'DICKIES Microbakery · Σύβοτα, Ελλάδα',
    description:
      'Ένα νέο microbakery cafe στα Σύβοτα. Καφές illy, φρέσκο ψωμί, σάντουιτς, smoothies, χυμοί, φρουτοσαλάτες και γιαούρτι. Ανοιχτά καθημερινά 07:00 – 19:00.',
  },
  nav: {
    home: 'Αρχική',
    about: 'Σχετικά',
    menu: 'Μενού',
    contact: 'Επικοινωνία',
    skipToContent: 'Μετάβαση στο περιεχόμενο',
    openMenu: 'Άνοιγμα μενού',
    closeMenu: 'Κλείσιμο μενού',
    languageLabel: 'Γλώσσα',
    languageEnglish: 'EN',
    languageGreek: 'GR',
  },
  hero: {
    eyebrow: 'Microbakery · Σύβοτα',
    title: 'Φρέσκος καφές.',
    titleAccent: 'Φρέσκα πρωινά.',
    subtitle:
      'Ένα νέο microbakery cafe στην καρδιά των Συβότων, με καφέ illy, φρεσκοψημένο ψωμί, σάντουιτς, smoothies και φωτεινές προτάσεις όλη την ημέρα — από τις 7 το πρωί μέχρι τις 7 το απόγευμα.',
    primaryCta: 'Δες το μενού',
    secondaryCta: 'Γνώρισέ μας',
    hoursBadge: 'Ανοιχτά 07:00 – 19:00',
    locationBadge: 'Σύβοτα, Ελλάδα',
    imageAlt: 'Ένα χέρι ανοίγει κουτί με φρέσκα donuts του DICKIES.',
  },
  about: {
    eyebrow: 'Σχετικά',
    title: 'Μικρό φούρνο, μεγάλο πρωινό.',
    paragraphs: [
      'Το DICKIES είναι ένα νέο microbakery cafe στην καρδιά των Συβότων — με καλό καφέ, τίμια υλικά και έναν ήρεμο, ηλιόλουστο ρυθμό.',
      'Κάθε μέρα φτιάχνουμε illy espresso, ψήνουμε ψωμί σε μικρές παρτίδες, χτυπάμε φρέσκα smoothies και χυμούς και ετοιμάζουμε ελαφριά πιάτα με γιαούρτι, φρουτοσαλάτες και σάντουιτς που σε συντροφεύουν από το πρωινό μέχρι το ηλιοβασίλεμα.',
      'Είμαστε εδώ καθημερινά — για το πρωινό μπάνιο, το μεσημεριανό, τον απογευματινό παγωμένο καφέ. Κάθισε άνετα, με την ησυχία σου. Είσαι στο χαρούμενο μέρος σου.',
    ],
    pullQuote: 'Powered by coffee, driven by joy.',
    pullQuoteAttribution: '— the dickies',
    imageAlt: 'Λεπτομέρειες της μάρκας DICKIES: ένα άτομο με μπλουζάκι "More than coffee" μέσα στο cafe και μια τσάντα DICKIES.',
  },
  menu: {
    eyebrow: 'Μενού',
    title: 'Επιμελημένο, φρέσκο, όλη μέρα.',
    subtitle:
      'Ένα μικρό, μελετημένο μενού που αλλάζει με τις εποχές. Καφές illy, ψωμιά microbakery και φωτεινές μεσογειακές προτάσεις.',
    bannerAlt: 'Στοίβα από κύπελλα καφέ DICKIES με κόκκους καφέ.',
  },
  contact: {
    eyebrow: 'Επισκέψου μας',
    title: 'Βρες το DICKIES στα Σύβοτα.',
    subtitle: 'Πέρασε ένα πρωί, μείνε όλο το απόγευμα. Είμαστε ανοιχτά καθημερινά από τις επτά μέχρι τις επτά.',
    locationLabel: 'Πού',
    locationValue: 'Σύβοτα, Ελλάδα',
    hoursLabel: 'Ώρες',
    hoursValue: 'Ανοιχτά καθημερινά · 07:00 – 19:00',
    phoneLabel: 'Τηλέφωνο',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    whatsappLabel: 'WhatsApp',
    mapsCta: 'Άνοιγμα στους Χάρτες',
    closingCtaTitle: 'Πιο πολύ από καφές — είναι το χαρούμενο μέρος σου.',
    closingCtaSubtitle: 'Σε περιμένουμε αύριο στις επτά.',
    closingImageAlt: 'Οι μασκότ του DICKIES δίπλα στο σύνθημα: πιο πολύ από καφές — είναι το χαρούμενο μέρος σου.',
  },
  footer: {
    rights: 'Με επιφύλαξη παντός δικαιώματος.',
    crafted: 'Φτιαγμένο φρέσκο στα Σύβοτα.',
  },
};

export const translations: Record<Lang, Dictionary> = { en, el };

export const defaultLang: Lang = 'en';

export type LocalizedString = Localized<string>;
