// Business metadata, image-role map, and menu data for DICKIES Microbakery.
//
// IMPORTANT: Do not invent business facts. Phone, email, social handles and the
// exact street address are intentionally left as `null` placeholders.
// Fill them in here when known and the UI will pick them up automatically.
//
// Menu prices are plain strings (currency identical in both languages). Adjust
// them in the `menu` data below; the menu UI renders them automatically.

export type Lang = 'en' | 'el';

export type Localized<T = string> = Record<Lang, T>;

export type MenuItem = {
  id: string;
  name: Localized;
  description?: Localized;
  /** Display price, e.g. '€2.50'. Currency is identical across languages. */
  price?: string;
};

export type MenuCategory = {
  id: string;
  name: Localized;
  note?: Localized;
  /** Small caption shown at the bottom of the card, e.g. 'Take away'. */
  footnote?: Localized;
  items: MenuItem[];
};

export type SocialLink = {
  /** Public URL. `null` means the handle is not known yet and the link is hidden. */
  url: string | null;
  /** Public-facing handle/label, optional. */
  handle?: string | null;
};

export const site = {
  brand: {
    name: 'DICKIES',
    suffix: 'Microbakery',
    tagline: {
      en: 'Powered by coffee, driven by joy.',
      el: 'Powered by coffee, driven by joy.',
    } satisfies Localized,
    secondaryTagline: {
      en: "More than coffee — it's your happy place.",
      el: 'Όχι απλώς καφές — το happy place σου.',
    } satisfies Localized,
  },
  location: {
    city: 'Sivota',
    region: 'Greece',
    /** Set when known. Avoid placeholders in UI; the field is rendered conditionally. */
    address: null as string | null,
    mapsUrl: 'https://maps.app.goo.gl/wWpwvF8X3TDqLER46',
  },
  hours: {
    open: '07:00',
    close: '21:00',
    daysLabel: {
      en: 'Open daily',
      el: 'Ανοιχτά καθημερινά',
    } satisfies Localized,
  },
  contact: {
    phone: '+30 26650 23232',
    email: null as string | null,
  },
  social: {
    instagram: { url: 'https://www.instagram.com/dickies.sivota/', handle: 'dickies.sivota' } satisfies SocialLink,
    // WhatsApp click-to-chat for +30 694 084 4761.
    whatsapp: { url: 'https://wa.me/306940844761', handle: null } satisfies SocialLink,
  },
  /**
   * Image role map. Each role points to a file already present in `public/images/`.
   * Using roles (not raw paths) means we can re-shoot or rename files without
   * touching component code.
   */
  images: {
    heroLifestyle: '/images/moto_1.jpg', // hand opening branded donut box
    aboutPair: '/images/pictures_all_together.jpg', // person in cafe + tote bag
    croissant: '/images/dickies-croisant.jpeg', // cups + coffee beans + sandwich/donut illustration overlays
    breadBag: '/images/picture_1.png', // branded bread bag on Forest Moss
    productWide: '/images/picture_wide.jpg', // 3-up composition (used for OG image)
    wordmark: '/images/piture_2.png', // clean DICKIES MICROBAKERY wordmark
    logoLockup: '/images/thank_you_message.jpg', // wordmark + mascot heads on Eggshell
    posterDark: '/images/logo2.jpg', // "More than coffee" poster on Dark Green
    posterLime: '/images/moto_2.jpg', // "Powered by coffee, driven by joy" mascot graphic
    palette: '/images/font.jpg', // brand reference, not rendered as content
    fonts: '/images/pallete_codes.jpg', // brand reference, not rendered as content
    thankYou: '/images/thank_you_message.png', // brand reference, not rendered as content
    icon1: '/images/icon.jpg', // brand reference, not rendered as content
    icon2: '/images/icon_2.png', // brand reference, not rendered as content
    illyLogo: '/images/illy-logo.png', // illy brand logo for Coffee card note
  },
} as const;

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------
//
// Categories follow the brief: Coffee (illy), Yoghurt, Sandwiches,
// Fresh smoothies, Fresh juices. Items are intentionally curated and concise.

export const menu: MenuCategory[] = [
  {
    id: 'coffee',
    name: { en: 'Coffee', el: 'Καφές' },
    note: { en: 'Brewed with illy', el: 'Με illy' },
    footnote: { en: '**Take away**', el: '**Take away**' },
    items: [
      { id: 'espresso', name: { en: 'Espresso', el: 'Εσπρέσσο' }, price: '€ 2.20' },
      { id: 'double-espresso', name: { en: 'Double espresso', el: 'Διπλό εσπρέσσο' }, price: '€ 2.50' },
      { id: 'flat-white', name: { en: 'Flat white', el: 'Flat white' }, price: '€ 2.80' },
      { id: 'cappuccino', name: { en: 'Cappuccino', el: 'Διπλό Καπουτσίνο' }, price: '€ 2.50' },
      { id: 'double-cappuccino', name: { en: 'Dobule Cappuccino', el: 'Καπουτσίνο' }, price: '€ 3.00' },
      { id: 'latte', name: { en: 'Latte', el: 'Λάτε' }, price: '€ 2.80' },
      { id: 'freddo-espresso', name: { en: 'Freddo Espresso', el: 'Φρέντο εσπρέσσο' }, price: '€ 2.50' },
      { id: 'freddo-espresso-xl', name: { en: 'Freddo Espresso XL', el: 'Φρέντο εσπρέσσο XL' }, price: '€ 3.50' },
      { id: 'freddo-cappuccino', name: { en: 'Freddo cappuccino', el: 'Φρέντο καπουτσίνο' }, price: '€ 2.80' },
      { id: 'filter', name: { en: 'Filter (French coffee)', el: 'Γαλλικός' }, price: '€ 2.50' },
      { id: 'french', name: { en: 'Frape', el: 'Φραπές' }, price: '€ 2.50' },
      { id: 'greek-single', name: { en: 'Greek Coffee Single', el: 'Ελληνικός μονός' }, price: '€ 2.00' },
      { id: 'greek-double', name: { en: 'Greek Coffee Double', el: 'Ελληνικός διπλός' }, price: '€ 2.50' },
      { id: 'almond-milk', name: { en: 'Almond / Oat Milk', el: 'Γάλα αμυγδάλου / βρώμης' }, price: '+ € 0.50' },
    ],
  },
  {
    id: 'not-coffee',
    name: { en: 'Not Coffee', el: 'Not Coffee' },
    items: [
      {
        id: 'chocolate',
        name: { en: 'Chocolate', el: 'Σοκολάτα' },
        price: '€3.00',
      },
      {
        id: 'white-chocolate',
        name: { en: 'White Chocolate', el: 'Λευκή Σοκολάτα' },
        price: '€3.00',
      },
      {
        id: 'soft-drinks',
        name: { en: 'Soft Drinks', el: 'Αναψυκτικά' },
        price: '€2.00',
      },
      {
        id: 'milk',
        name: { en: 'Milk', el: 'Γάλα' },
        price: '€2.50',
      },
      {
        id: 'orange-juice',
        name: { en: 'Natural Orange Juice', el: 'Φυσικός Χυμός Πορτοκάλι' },
        price: '€3.00',
      },
      {
        id: 'water-500ml',
        name: { en: 'Still Water 0.5 Liters', el: 'Νερό 0.5 λίτρο' },
        price: '€0.50',
      },
      {
        id: 'water-1500ml',
        name: { en: 'Still Water 1.5 Liters', el: 'Νερό 1.5 λίτρο' },
        price: '€1.00',
      },
    ],
  },
  {
    id: 'sandwiches',
    name: { en: 'Sandwiches', el: 'Σάντουιτς' },
    items: [
      {
        id: 'chiabatta',
        name: { en: 'Ciabatta With Fouantre Turkey, Cream Cheese, Gouda Cheese, Tomato', el: 'Τσιαμπάτα με Φουαντρέ Γαλοπούλα, Τυρί Κρέμα, Gouda, Ντομάτα' }
      },
      {
        id: 'panini',
        name: { en: 'Panini With Apaki (Cretan Smoked Chicen), Graviera Cheese, Honey Mustard Sauce, Lettuce', el: 'Πανινί με Απάκι, Γραβιέρα, Σως Μουστάρδα, Μέλι, Μαρούλι' }
      },
      {
        id: 'whole-wheat-bread',
        name: { en: 'Whole Wheat Bread With Feta Cheese, Tomato, Olives, Cucumber, Olive Oil, Oregano', el: 'Ολικής με Τυρί Φέτα, Ντομάτα, Ελιές, Λάδο, Ρίγανη' },
      },
      {
        id: 'Foccacia',
        name: { en: 'Foccacia with Pesto, Mozzarella, Mortadella, Tomato, Rocket Salad', el: 'Foccacia με Πεστό, Μοτσαρέλα, Μορταδέλα, Ντομάτα, Ρόκα' },
      },
    ],
  }
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const formatHours = () => `${site.hours.open} – ${site.hours.close}`;
