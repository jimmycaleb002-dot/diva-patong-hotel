/* ============================================================
   Diva Patong Hotel: canonical room-type data.
   Single source of truth for the home carousel, the All Rooms
   grid, individual room-detail pages, and (from Step 7 on) the
   booking flow's room-selection step. Prices are what the hotel
   itself lists; "Ask for rates" rooms have no confirmed rate yet.
   Never invent one.
   ============================================================ */
window.DIVA_ROOMS = [
  {
    slug: 'standard',
    name: 'Standard',
    price: 7999,
    priceLabel: '฿7,999 / night',
    img: 'assets/images/rooms/standard.jpg',
    imgAlt: 'Standard room at Diva Patong Hotel',
    summary: 'A clean, simple double for travellers who plan to spend most of their time outside it.',
    details: 'A clean, simple double for travellers who plan to spend most of their time outside it. City-side floor, no pool or sea view.'
  },
  {
    slug: 'standard-twin',
    name: 'Standard Twin Bed, City View',
    price: null,
    priceLabel: 'Ask for rates',
    img: 'assets/images/rooms/standard-twin.jpg',
    imgAlt: 'Standard Twin Bed, City View room at Diva Patong Hotel',
    summary: 'Two singles instead of one double, same floor, same view over the city side.',
    details: 'Two singles instead of one double, same floor, same view over the city side. Rate not yet confirmed, contact the hotel directly for current pricing.'
  },
  {
    slug: 'standard-triple',
    name: 'Standard Triple, City View',
    price: 9999,
    priceLabel: '฿9,999 / night',
    img: 'assets/images/rooms/standard-triple.jpg',
    imgAlt: 'Standard Triple Room at Diva Patong Hotel',
    summary: 'A double and a single sharing one room, no elevator on this floor. Worth knowing before you book.',
    details: 'A double and a single sharing one room, no elevator on this floor. Worth knowing before you book.'
  },
  {
    slug: 'superior',
    name: 'Superior, City View',
    price: 8599,
    priceLabel: '฿8,599 / night',
    img: 'assets/images/rooms/superior.jpg',
    imgAlt: 'Superior Room, City View at Diva Patong Hotel',
    summary: 'A little more space and a little more quiet, one floor up from Standard.',
    details: 'A little more space and a little more quiet, one floor up from Standard. City-side view.'
  },
  {
    slug: 'deluxe-pool-view',
    name: 'Deluxe, Pool View',
    price: 9999,
    priceLabel: '฿9,999 / night',
    img: 'assets/images/rooms/delux-pool-view.jpg',
    imgAlt: 'Deluxe Room, Pool View at Diva Patong Hotel',
    summary: 'Stone-wall accent, a look down over the pool, and the same quiet as Superior.',
    details: 'Stone-wall accent, a look down over the pool, and the same quiet as Superior.'
  },
  {
    slug: 'deluxe-twin-pool-view',
    name: 'Deluxe Twin, Pool View',
    price: null,
    priceLabel: 'Ask for rates',
    img: 'assets/images/rooms/delux-twin-pool-view.jpg',
    imgAlt: 'Deluxe Twin, Pool View at Diva Patong Hotel',
    summary: "Deluxe's pool-side position, split across two beds instead of one.",
    details: "Deluxe's pool-side position, split across two beds instead of one. Rate not yet confirmed, contact the hotel directly for current pricing."
  },
  {
    slug: 'deluxe-quadruple',
    name: 'Deluxe Quadruple',
    price: 12999,
    priceLabel: '฿12,999 / night',
    img: 'assets/images/rooms/quadruple.jpg',
    imgAlt: 'Deluxe Quadruple room at Diva Patong Hotel',
    summary: 'Sleeps four comfortably, built for friends splitting a room, not families forcing it.',
    details: 'Sleeps four comfortably, built for friends splitting a room, not families forcing it.'
  },
  {
    slug: 'connecting-family-pool-view',
    name: '2 Connecting Rooms, Pool View',
    price: 17999,
    priceLabel: '฿17,999 / night',
    img: 'assets/images/rooms/connecting-family-pool-view.jpg',
    imgAlt: '2 Connecting Family Room, Pool View at Diva Patong Hotel',
    summary: "Two rooms with a shared door between them, both looking down over the pool. Privacy when you want it, company when you don't.",
    details: "Two rooms with a shared door between them, both looking down over the pool. Privacy when you want it, company when you don't."
  },
  {
    slug: 'penthouse',
    name: 'Rooftop Penthouse w/ Jacuzzi',
    price: 29999,
    priceLabel: '฿29,999 / night',
    img: 'assets/images/rooms/penthouse.jpg',
    imgAlt: 'Rooftop Sea View Penthouse at Diva Patong Hotel',
    summary: 'The round bed suite, top floor, with a view over the roofs to the Andaman Sea.',
    details: 'The round bed suite, top floor, with a view over the roofs to the Andaman Sea.'
  },
  {
    slug: 'penthouse-with-bar',
    name: 'Rooftop Penthouse w/ Jacuzzi & Private Bar',
    price: 25999,
    priceLabel: '฿25,999 / night',
    img: 'assets/images/rooms/penthouse-with-bar.jpg',
    imgAlt: 'Rooftop Sea View Penthouse with Private Bar at Diva Patong Hotel',
    summary: "The top-floor suite with its own bar built in. Bottles included, nobody has to leave for another round.",
    details: "The top-floor suite with its own bar built in. Bottles included, nobody has to leave for another round."
  }
];
