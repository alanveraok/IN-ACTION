const dataItems = [
  {
    id: 1,
    title: "Boba Fett",
    price: 18999,
    img: "https://m.media-amazon.com/images/I/71GAPlnpr5L._AC_SL1500_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "star-wars",
  },

  {
    id: 2,
    title: "Darth Maul",
    price: 14999,
    img: "https://m.media-amazon.com/images/I/51XfuVGWF-L._AC_SL1000_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "star-wars",
  },

  {
    id: 3,
    title: "Darth Vader",
    price: 23999,
    img: "https://m.media-amazon.com/images/I/71B2TkfzosL._AC_SL1500_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "star-wars",
  },

  {
    id: 4,
    title: "Mandalorian",
    price: 25999,
    img: "https://m.media-amazon.com/images/I/81dSQ0tVdML._AC_SL1500_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "star-wars",
  },

  {
    id: 5,
    title: "Master Yoda",
    price: 29999,
    img: "https://m.media-amazon.com/images/I/81bhQsQ8aZL._AC_SL1500_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "star-wars",
  },

  {
    id: 6,
    title: "The Batman",
    price: 39999,
    img: "https://m.media-amazon.com/images/I/71rrQs5yWHL._AC_SL1500_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "di-ci",
  },

  {
    id: 7,
    title: "Joker",
    price: 14999,
    img: "https://m.media-amazon.com/images/I/71j6dbQtB+L._AC_SX679_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "di-ci",
  },

  {
    id: 8,
    title: "Flash",
    price: 12499,
    img: "https://m.media-amazon.com/images/I/71CF4WfI3nL._AC_SX679_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "di-ci",
  },

  {
    id: 9,
    title: "Spider-Man",
    price: 22499,
    img: "https://m.media-amazon.com/images/I/612UZVwwyOL._AC_SY879_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "marvel",
  },

  {
    id: 10,
    title: "Thor",
    price: 23499,
    img: "https://m.media-amazon.com/images/I/81ec9J+H0XL._AC_SY879_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "marvel",
  },
  {
    id: 11,
    title: "Deadpool",
    price: 11999,
    img: "https://m.media-amazon.com/images/I/71Pe2CSjHYL._AC_SY879_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "marvel",
  },

  {
    id: 12,
    title: "Captain Marvel",
    price: 22999,
    img: "https://m.media-amazon.com/images/I/71-2Bzcdq1L._AC_SY879_.jpg",
    stock: 10,
    size: "16 centímetros",
    weight: "300 gramos",
    description:
      "Esta figura de acción incluye casco removible, blaster y jetpack. Basada en el personaje de la serie STAR WARS: THE BOOK OF BOBA FETT",
    category: "marvel",
  },


  {
    id: 13,
    title: "Daryl Dixon",
    price: 28999,
    img:"https://m.media-amazon.com/images/I/61KzeMo5oTL._AC_SX679_.jpg",
    stock: 10,
    size: "19 centímetros",
    weight: "250 gramos",
    description:"Figura de acción de uno de los personajes principales de esta serie, Daryl Dixon. Incluye bayesta con sus respectivas flechas y poncho removible",
    category: "twd",

  },

  {
    id: 14
  },

  {
    id: 15
  },

  {
    id: 16
  },

  {
    id: 17
  },

  {
    id: 18
  },
];

export default dataItems;
