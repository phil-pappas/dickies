// Business metadata, image-role map, and menu data for DICKIES Microbakery.
//
// IMPORTANT: Do not invent business facts. Phone, email, social handles, exact
// street address and prices are intentionally left as `null` placeholders.
// Fill them in here when known and the UI will pick them up automatically.

export type Lang = 'en' | 'el';

export type Localized<T = string> = Record<Lang, T>;

export type MenuItem = {
  id: string;
  name: Localized;
  description?: Localized;
};

export type MenuCategory = {
  id: string;
  name: Localized;
  note?: Localized;
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
      el: 'Πιο πολύ από καφές — είναι το χαρούμενο μέρος σου.',
    } satisfies Localized,
  },
  location: {
    city: 'Sivota',
    region: 'Greece',
    /** Set when known. Avoid placeholders in UI; the field is rendered conditionally. */
    address: null as string | null,
    mapsUrl: 'https://maps.app.goo.gl/1QKUrkRNVpG2wLM67',
  },
  hours: {
    open: '07:00',
    close: '19:00',
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
    // TODO: replace with the actual Instagram profile URL once the handle is confirmed.
    instagram: { url: 'https://www.instagram.com/', handle: null } satisfies SocialLink,
    // WhatsApp click-to-chat derived from the phone number above.
    whatsapp: { url: 'https://wa.me/302665023232', handle: null } satisfies SocialLink,
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
// Categories follow the brief: Coffee (illy), Fruit salads, Yoghurt, Sandwiches,
// Fresh smoothies, Fresh juices. Items are intentionally curated and concise.

export const menu: MenuCategory[] = [
  {
    id: 'coffee',
    name: { en: 'Coffee', el: 'Καφές' },
    note: { en: 'Brewed with illy', el: 'Με illy' },
    items: [
      { id: 'espresso', name: { en: 'Espresso', el: 'Εσπρέσσο' } },
      { id: 'double-espresso', name: { en: 'Double espresso', el: 'Διπλός εσπρέσσο' } },
      { id: 'americano', name: { en: 'Americano', el: 'Αμερικάνο' } },
      { id: 'cappuccino', name: { en: 'Cappuccino', el: 'Καπουτσίνο' } },
      { id: 'flat-white', name: { en: 'Flat white', el: 'Flat white' } },
      { id: 'latte', name: { en: 'Latte', el: 'Λάτε' } },
      { id: 'freddo-espresso', name: { en: 'Freddo espresso', el: 'Φρέντο εσπρέσσο' } },
      { id: 'freddo-cappuccino', name: { en: 'Freddo cappuccino', el: 'Φρέντο καπουτσίνο' } },
      { id: 'cold-brew', name: { en: 'Cold brew', el: 'Cold brew' } },
    ],
  },
  {
    id: 'sandwiches',
    name: { en: 'Sandwiches', el: 'Σάντουιτς' },
    note: {
      en: 'On fresh microbakery bread',
      el: 'Σε φρέσκο ψωμί microbakery',
    },
    items: [
      {
        id: 'classic',
        name: { en: 'Classic ham & cheese', el: 'Κλασικό ζαμπόν & τυρί' },
      },
      {
        id: 'turkey',
        name: { en: 'Smoked turkey', el: 'Καπνιστή γαλοπούλα' },
      },
      {
        id: 'caprese',
        name: { en: 'Tomato, mozzarella & basil', el: 'Ντομάτα, μοτσαρέλα & βασιλικός' },
      },
      {
        id: 'veggie',
        name: { en: 'Garden vegetable', el: 'Λαχανικών κήπου' },
      },
    ],
  },
  {
    id: 'fruit-salads',
    name: { en: 'Fruit salads', el: 'Φρουτοσαλάτες' },
    items: [
      {
        id: 'seasonal',
        name: { en: 'Seasonal mix', el: 'Μείγμα εποχής' },
        description: {
          en: 'Whatever is best at the market today.',
          el: 'Ό,τι καλύτερο έχει σήμερα η αγορά.',
        },
      },
      {
        id: 'tropical',
        name: { en: 'Tropical', el: 'Τροπική' },
      },
      {
        id: 'berry',
        name: { en: 'Berries & honey', el: 'Φρούτα του δάσους & μέλι' },
      },
    ],
  },
  {
    id: 'yoghurt',
    name: { en: 'Yoghurt', el: 'Γιαούρτι' },
    items: [
      {
        id: 'greek-honey',
        name: { en: 'Greek yoghurt with honey & walnuts', el: 'Γιαούρτι με μέλι & καρύδια' },
      },
      {
        id: 'granola',
        name: { en: 'Yoghurt with granola & berries', el: 'Γιαούρτι με γκρανόλα & φρούτα του δάσους' },
      },
    ],
  },
  {
    id: 'smoothies',
    name: { en: 'Fresh smoothies', el: 'Φρέσκα smoothies' },
    items: [
      {
        id: 'green',
        name: { en: 'Green morning', el: 'Πράσινο πρωινό' },
        description: {
          en: 'Spinach, banana, apple, lemon.',
          el: 'Σπανάκι, μπανάνα, μήλο, λεμόνι.',
        },
      },
      {
        id: 'berry',
        name: { en: 'Berry boost', el: 'Berry boost' },
        description: {
          en: 'Mixed berries, banana, yoghurt.',
          el: 'Μείγμα μούρων, μπανάνα, γιαούρτι.',
        },
      },
      {
        id: 'tropical',
        name: { en: 'Sunny tropical', el: 'Τροπικό' },
        description: {
          en: 'Mango, pineapple, orange.',
          el: 'Μάνγκο, ανανάς, πορτοκάλι.',
        },
      },
    ],
  },
  {
    id: 'juices',
    name: { en: 'Fresh juices', el: 'Φρέσκοι χυμοί' },
    items: [
      { id: 'orange', name: { en: 'Orange', el: 'Πορτοκάλι' } },
      { id: 'grapefruit', name: { en: 'Grapefruit', el: 'Γκρέιπφρουτ' } },
      {
        id: 'detox',
        name: { en: 'Detox', el: 'Detox' },
        description: {
          en: 'Apple, carrot, ginger, lemon.',
          el: 'Μήλο, καρότο, τζίντζερ, λεμόνι.',
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const formatHours = () => `${site.hours.open} – ${site.hours.close}`;
