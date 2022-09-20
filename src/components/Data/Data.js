const dataItems = [
  {
    id: 1,
    title: "Boba Fett",
    price: 19000,
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
      "Figura de acción articulada de uno de los villanos de Star Wars que cuenta con dos sables rojos removibles.",
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
      "Figura del principal antagonista de esta saga. Articulada, con sable rojo y con su característico casco removible.",
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
      "Uno de los personajes que más ha sorprendido a los fans. Totalmente articulado y con cada una de sus armas removibles, lo hacen una pieza única. Próximamente, podrás tenerlo junto a la figura de acción 'The Child' ",
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
      "Sin dudas, esta figura de acción no puede faltar en tu colección. El gran Maestro Yoda, con baston removible y que puede ser reemplazado por su sable verde. May the Force be with you.",
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
      "Inspirada en la última entrega diriga por Matt Reeves, esta figura de acción cuenta con los característicos accesorios del personaje: batarangs, bombas y máscara removible.",
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
      "¿Quién no quisiera tener a uno de los villanos más importante de la historia en su collección? Esta figura del Joker cumple con todos los detalles que se merece. ",
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
      "The Flash en su figura de acción, propiamente dicho. El héroe más rápido de DC puede ser parte de tu colleción.",
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
      "Sin dudas, uno de los héroes que más ha crecido estos últimos años gracias a la creación del multiverso. En este caso, te ofrecemos al arácnido protagonizado por Tom Holland, quien supo adaptar la nanotecnología en su traje.",
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
      "El Dios del Trueno viene con su martillo y capa removible. Uno de los héroes más aclamados de las entregas de Advengers.",
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
      "Fuerza, resistencia, agilidad y reflejos sobrehumanos. Francotirador, espadachín, experto en artes marciales y explosivos. ¿Dudas en sumarlo a tu colección?",
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
      "Niveles sobrehumanos de fuerza, resistencia,y durabilidad física, así como vuelo, un precognitivo sexto sentido limitado son los poderes de esta gran heroína",
    category: "marvel",
  },

  {
    id: 13,
    title: "Daryl Dixon",
    price: 28999,
    img: "https://m.media-amazon.com/images/I/61KzeMo5oTL._AC_SX679_.jpg",
    stock: 10,
    size: "19 centímetros",
    weight: "250 gramos",
    description:
      "Para arrancar con las nuevas figura de acción de la aclamada serie 'The Walking Dead, te presentamos a Daryl Dixon, figura articulada que cuenta con poncho y ballesta removibles",
    category: "twd",
  },
];

export default dataItems;
