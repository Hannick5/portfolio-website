// Toutes les images sont stockées localement dans /public/img/
const img = (name) => `/img/${name}`;

export const IMAGES = {
  bakery: {
    hero:     img('bakery-hero.jpg'),
    bread:    img('bakery-bread.jpg'),
    croissant:img('bakery-croissant.jpg'),
    interior: img('bakery-interior.jpg'),
    tarte:    img('bakery-tarte.jpg'),
    products: img('bakery-products.jpg'),
  },
  locksmith: {
    hero:  img('locksmith-hero.jpg'),
    keys:  img('locksmith-keys.jpg'),
    work:  img('locksmith-work.jpg'),
    door:  img('locksmith-door.jpg'),
  },
  salon: {
    hero:     img('salon-hero.jpg'),
    cut:      img('salon-cut.jpg'),
    color:    img('salon-color.jpg'),
    interior: img('salon-interior.jpg'),
    team1:    img('team-woman1.jpg'),
    team2:    img('team-man1.jpg'),
    team3:    img('team-woman2.jpg'),
    barber:   img('barber-hero.jpg'),
    barbercut:img('barber-cut.jpg'),
  },
  restaurant: {
    hero:     img('restaurant-hero.jpg'),
    dish1:    img('restaurant-dish1.jpg'),
    dish2:    img('restaurant-dish2.jpg'),
    dish3:    img('restaurant-dish3.jpg'),
    interior: img('restaurant-interior.jpg'),
    chef:     img('restaurant-chef.jpg'),
    cafe:     img('cafe-hero.jpg'),
  },
  plumber: {
    hero:     img('plumber-hero.jpg'),
    work:     img('plumber-work.jpg'),
    bathroom: img('plumber-bathroom.jpg'),
    boiler:   img('plumber-boiler.jpg'),
  },
  electricien: {
    hero:  img('electrician-hero.jpg'),
    panel: img('electrician-panel.jpg'),
    work:  img('electrician-work.jpg'),
    smart: img('smart-home.jpg'),
  },
  fleuriste: {
    hero:    img('florist-hero.jpg'),
    bouquet: img('florist-bouquet.jpg'),
    wedding: img('florist-wedding.jpg'),
    plants:  img('florist-plants.jpg'),
    work:    img('florist-work.jpg'),
  },
  garage: {
    hero:     img('garage-hero.jpg'),
    engine:   img('garage-engine.jpg'),
    body:     img('garage-body.jpg'),
    tools:    img('garage-tools.jpg'),
    interior: img('garage-interior.jpg'),
  },
  team: {
    woman1: img('team-woman1.jpg'),
    woman2: img('team-woman2.jpg'),
    man1:   img('team-man1.jpg'),
  },
  portfolio: {
    hero: img('portfolio-hero.jpg'),
  },
};
