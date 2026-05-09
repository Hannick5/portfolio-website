export const sectors = [
  {
    id: 'boulangerie',
    label: 'Boulangerie & Pâtisserie',
    color: '#C8633A',
    projects: [
      {
        id: 'boul-1', name: 'Boulangerie Dupont', tagline: 'Artisan boulanger depuis 1982',
        template: 'bakery',        // éditorial journal chaud, Playfair Display
        primaryColor: '#2C1810', accentColor: '#C8633A',
      },
      {
        id: 'boul-2', name: 'La Fournée Moderne', tagline: 'Boulangerie contemporaine & bio',
        template: 'bakery-modern', // minimaliste blanc, DM Sans bold
        primaryColor: '#1A1A1A', accentColor: '#FF6B35',
      },
      {
        id: 'boul-3', name: 'Pâtisserie Élise', tagline: 'Créations sucrées sur mesure',
        template: 'patisserie',    // féminin rose/crème, Cormorant
        primaryColor: '#4A1942', accentColor: '#E8A0C0',
      },
    ],
  },
  {
    id: 'serrurerie',
    label: 'Serrurerie & Dépannage',
    color: '#FFE500',
    projects: [
      {
        id: 'serr-1', name: 'SOS Serrures 24/7', tagline: 'Intervention rapide — 20 min chrono',
        template: 'locksmith',     // brutalist noir/jaune, sidebar verticale, Bebas Neue
        primaryColor: '#000000', accentColor: '#FFE500',
      },
      {
        id: 'serr-2', name: 'SecurPro Dépannage', tagline: 'Expertise & conseil en sécurité',
        template: 'locksmith-pro', // corporate marine/blanc, top nav, très professionnel
        primaryColor: '#1B3A6B', accentColor: '#4A9FD4',
      },
      {
        id: 'serr-3', name: 'Clé Urgence Paris', tagline: 'Spécialiste ouverture de porte',
        template: 'locksmith-sos', // rouge/blanc, fullscreen urgence, CTA géant
        primaryColor: '#CC0000', accentColor: '#FFFFFF',
      },
    ],
  },
  {
    id: 'coiffure',
    label: 'Salon de Coiffure',
    color: '#B8A07A',
    projects: [
      {
        id: 'coif-1', name: 'Studio Éclat', tagline: 'Coiffure & coloration tendance',
        template: 'salon',         // haute couture minimaliste, Cormorant Garamond
        primaryColor: '#1A1A1A', accentColor: '#B8A07A',
      },
      {
        id: 'coif-2', name: 'BarberKing', tagline: 'Barbershop & coupe homme moderne',
        template: 'barber',        // dark/gold, vintage, Bebas Neue + serif
        primaryColor: '#0D0D0D', accentColor: '#D4A843',
      },
      {
        id: 'coif-3', name: 'Color Lab', tagline: 'Expert coloriste — balayage & tendances',
        template: 'salon-vibrant', // lumineux/coloré, sans-serif bold, très actuel
        primaryColor: '#7C3AED', accentColor: '#F59E0B',
      },
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant & Café',
    color: '#D4A843',
    projects: [
      {
        id: 'rest-1', name: 'Le Bistrot du Coin', tagline: 'Cuisine française traditionnelle',
        template: 'restaurant',    // brasserie Art Déco, IM Fell English, noir/or
        primaryColor: '#120A06', accentColor: '#D4A843',
      },
      {
        id: 'rest-2', name: 'Café Lumière', tagline: 'Brunch, café de spécialité & douceurs',
        template: 'cafe',          // scandinave clair, DM Sans, blanc/terracotta
        primaryColor: '#F5F0E8', accentColor: '#C8633A',
      },
      {
        id: 'rest-3', name: 'Sushi Zen', tagline: 'Cuisine japonaise authentique',
        template: 'restaurant-asian', // épuré japonisant, Noto Serif, noir/rouge/blanc
        primaryColor: '#0A0A0A', accentColor: '#DC2626',
      },
    ],
  },
  {
    id: 'plomberie',
    label: 'Plomberie & Chauffage',
    color: '#1A56DB',
    projects: [
      {
        id: 'plomb-1', name: 'AquaPro', tagline: 'Urgences plomberie 7j/7',
        template: 'plumber',       // bold cobalt/orange, DM Sans, bandes horizontales
        primaryColor: '#1A56DB', accentColor: '#FF6B35',
      },
      {
        id: 'plomb-2', name: 'ThermoPro', tagline: 'Installation chauffage & climatisation',
        template: 'plumber-eco',   // vert/blanc, éco-responsable, clean
        primaryColor: '#15803D', accentColor: '#86EFAC',
      },
      {
        id: 'plomb-3', name: 'UrgencePipe', tagline: 'Dépannage toutes urgences 24h/24',
        template: 'plumber-urgent',// rouge/gris sombre, urgence max, dark
        primaryColor: '#1C1C1C', accentColor: '#EF4444',
      },
    ],
  },
  {
    id: 'electricite',
    label: 'Électricité & Domotique',
    color: '#F9E100',
    projects: [
      {
        id: 'elec-1', name: 'Voltex Électricité', tagline: 'Installation & dépannage 24h/24',
        template: 'electricien',       // dark/neon jaune, Barlow Condensed, diagonal
        primaryColor: '#0A0A0F', accentColor: '#F9E100',
      },
      {
        id: 'elec-2', name: 'SmartHome Pro', tagline: 'Domotique, alarme & fibre optique',
        template: 'electricien-smart', // tech bleu/blanc, futuriste, Space Grotesk
        primaryColor: '#0F172A', accentColor: '#38BDF8',
      },
      {
        id: 'elec-3', name: 'Éclat Lumière', tagline: 'Éclairage architectural & LED',
        template: 'electricien-light', // élégant blanc/or, design d'intérieur
        primaryColor: '#1C1917', accentColor: '#FCD34D',
      },
    ],
  },
  {
    id: 'fleuriste',
    label: 'Fleuriste & Végétal',
    color: '#3D5A4D',
    projects: [
      {
        id: 'fleur-1', name: 'Jardin Élise', tagline: 'Bouquets sur mesure & compositions',
        template: 'fleuriste',         // botanique romantique, DM Serif, sage/rose
        primaryColor: '#3D5A4D', accentColor: '#E8B4C0',
      },
      {
        id: 'fleur-2', name: 'Bloom Studio', tagline: 'Design floral événementiel',
        template: 'fleuriste-events',  // luxe blanc/doré, mariage, élégant
        primaryColor: '#1A1A1A', accentColor: '#D4AF37',
      },
      {
        id: 'fleur-3', name: 'Urban Botanic', tagline: 'Plantes & soins à domicile',
        template: 'fleuriste-urban',   // graphique vert foncé/blanc, moderne, bold
        primaryColor: '#1A2E1A', accentColor: '#A3E635',
      },
    ],
  },
  {
    id: 'garage',
    label: 'Garage & Automobile',
    color: '#E01D24',
    projects: [
      {
        id: 'gar-1', name: 'Mécano Sport', tagline: 'Entretien & réparation toutes marques',
        template: 'garage',            // racing noir/rouge, Rajdhani, diagonal
        primaryColor: '#0D0D0D', accentColor: '#E01D24',
      },
      {
        id: 'gar-2', name: 'AutoExpress', tagline: 'Révision express, vidange, diagnostic',
        template: 'garage-express',    // orange/blanc, rapide, bold sans-serif
        primaryColor: '#1C1C1C', accentColor: '#F97316',
      },
      {
        id: 'gar-3', name: 'CarBody Pro', tagline: 'Carrosserie & peinture, restitution neuf',
        template: 'garage-body',       // premium métallique, silver/black, luxueux
        primaryColor: '#0A0A0F', accentColor: '#C0C0C0',
      },
    ],
  },
];
