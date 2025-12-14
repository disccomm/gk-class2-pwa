// questionBank.js
// Batch 1 – GK Quiz – Class 2
// Total Questions: 72
// Images mapped 1:1 with questions
// Source PDF references included

const QUESTION_BANK = [

/* ------------------ VEGETABLES ------------------ */
{
  id: 1,
  text: "Which vegetable is shown?",
  image: "images/brinjal.jpg",
  options: ["Carrot", "Radish", "Turnip", "Brinjal"],
  correctIndex: 3,
  sourcePage: 10
},
{
  id: 2,
  text: "Which vegetable is shown?",
  image: "images/carrot.jpg",
  options: ["Brinjal", "Turnip", "Carrot", "Radish"],
  correctIndex: 2,
  sourcePage: 10
},
{
  id: 3,
  text: "Which vegetable is shown?",
  image: "images/radish.jpg",
  options: ["Radish", "Carrot", "Brinjal", "Potato"],
  correctIndex: 0,
  sourcePage: 10
},
{
  id: 4,
  text: "Which vegetable is shown?",
  image: "images/potato.jpg",
  options: ["Onion", "Potato", "Turnip", "Carrot"],
  correctIndex: 1,
  sourcePage: 10
},
{
  id: 5,
  text: "Which vegetable is shown?",
  image: "images/turnip.jpg",
  options: ["Radish", "Carrot", "Turnip", "Beetroot"],
  correctIndex: 2,
  sourcePage: 10
},

/* ------------------ ANIMALS ------------------ */
{
  id: 6,
  text: "Which animal is shown?",
  image: "images/dog.jpg",
  options: ["Horse", "Dog", "Cat", "Cow"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 7,
  text: "Which animal is shown?",
  image: "images/cat.jpg",
  options: ["Dog", "Cat", "Tiger", "Lion"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 8,
  text: "Which animal is shown?",
  image: "images/cow.jpg",
  options: ["Goat", "Buffalo", "Cow", "Horse"],
  correctIndex: 2,
  sourcePage: 8
},
{
  id: 9,
  text: "Which animal is shown?",
  image: "images/elephant.jpg",
  options: ["Rhino", "Elephant", "Hippo", "Horse"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 10,
  text: "Which animal is shown?",
  image: "images/horse.jpg",
  options: ["Cow", "Horse", "Donkey", "Camel"],
  correctIndex: 1,
  sourcePage: 8
},

/* ------------------ BIRDS ------------------ */
{
  id: 11,
  text: "Which bird is shown?",
  image: "images/parrot.jpg",
  options: ["Parrot", "Crow", "Sparrow", "Pigeon"],
  correctIndex: 0,
  sourcePage: 14
},
{
  id: 12,
  text: "Which bird is shown?",
  image: "images/sparrow.jpg",
  options: ["Crow", "Sparrow", "Parrot", "Peacock"],
  correctIndex: 1,
  sourcePage: 14
},
{
  id: 13,
  text: "Which bird is shown?",
  image: "images/crow.jpg",
  options: ["Crow", "Pigeon", "Eagle", "Sparrow"],
  correctIndex: 0,
  sourcePage: 14
},
{
  id: 14,
  text: "Which bird is the National Bird of India?",
  image: "images/peacock.jpg",
  options: ["Crow", "Peacock", "Parrot", "Sparrow"],
  correctIndex: 1,
  sourcePage: 14
},

/* ------------------ FLOWERS ------------------ */
{
  id: 15,
  text: "Which flower is shown?",
  image: "images/rose.jpg",
  options: ["Rose", "Lotus", "Jasmine", "Sunflower"],
  correctIndex: 0,
  sourcePage: 12
},
{
  id: 16,
  text: "Which flower is shown?",
  image: "images/jasmine.jpg",
  options: ["Rose", "Jasmine", "Lotus", "Sunflower"],
  correctIndex: 1,
  sourcePage: 12
},
{
  id: 17,
  text: "Which flower is shown?",
  image: "images/sunflower.jpg",
  options: ["Sunflower", "Rose", "Lotus", "Jasmine"],
  correctIndex: 0,
  sourcePage: 12
},
{
  id: 18,
  text: "Which flower is the National Flower of India?",
  image: "images/lotus.jpg",
  options: ["Rose", "Jasmine", "Lotus", "Sunflower"],
  correctIndex: 2,
  sourcePage: 12
},

/* ------------------ PLANETS & SCIENCE ------------------ */
{
  id: 19,
  text: "Which planet do we live on?",
  image: "images/earth.jpg",
  options: ["Mars", "Venus", "Earth", "Jupiter"],
  correctIndex: 2,
  sourcePage: 6
},
{
  id: 20,
  text: "Which planet is known as the Red Planet?",
  image: "images/mars.jpg",
  options: ["Earth", "Mars", "Venus", "Jupiter"],
  correctIndex: 1,
  sourcePage: 6
},

/* ------------------ BODY PARTS ------------------ */
{
  id: 21,
  text: "Which sense organ is used to see?",
  image: "images/eye.jpg",
  options: ["Ear", "Nose", "Eye", "Hand"],
  correctIndex: 2,
  sourcePage: 5
},
{
  id: 22,
  text: "Which sense organ is used to hear?",
  image: "images/ear.jpg",
  options: ["Eye", "Ear", "Nose", "Tongue"],
  correctIndex: 1,
  sourcePage: 5
},

/* ------------------ SHAPES ------------------ */
{
  id: 23,
  text: "Which shape has three sides?",
  image: null,
  options: ["Square", "Circle", "Triangle", "Rectangle"],
  correctIndex: 2,
  sourcePage: 4
},
{
  id: 24,
  text: "Which shape is round?",
  image: null,
  options: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 2,
  sourcePage: 4
},

/* ------------------ TRANSPORT ------------------ */
{
  id: 25,
  text: "Which vehicle is shown?",
  image: "images/bus.jpg",
  options: ["Car", "Bus", "Train", "Cycle"],
  correctIndex: 1,
  sourcePage: 11
},
{
  id: 26,
  text: "Which vehicle runs on tracks?",
  image: "images/train.jpg",
  options: ["Bus", "Car", "Train", "Cycle"],
  correctIndex: 2,
  sourcePage: 11
},

/* ------------------ FRUITS ------------------ */
{
  id: 27,
  text: "Which fruit is shown?",
  image: "images/apple.jpg",
  options: ["Apple", "Banana", "Orange", "Mango"],
  correctIndex: 0,
  sourcePage: 9
},
{
  id: 28,
  text: "Which fruit is shown?",
  image: "images/banana.jpg",
  options: ["Apple", "Grapes", "Banana", "Mango"],
  correctIndex: 2,
  sourcePage: 9
},

/* ------------------ COLOURS ------------------ */
{
  id: 29,
  text: "Which colour is shown?",
  image: "images/red.jpg",
  options: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 2,
  sourcePage: 3
},
{
  id: 30,
  text: "Which colour is shown?",
  image: "images/blue.jpg",
  options: ["Blue", "Red", "Green", "Yellow"],
  correctIndex: 0,
  sourcePage: 3
},

/* ------------------ NUMBERS ------------------ */
{
  id: 31,
  text: "What comes after 9?",
  image: null,
  options: ["8", "9", "10", "11"],
  correctIndex: 2,
  sourcePage: 2
},
{
  id: 32,
  text: "What comes before 5?",
  image: null,
  options: ["3", "4", "6", "5"],
  correctIndex: 1,
  sourcePage: 2
},

/* ------------------ DAYS & MONTHS ------------------ */
{
  id: 33,
  text: "How many days are there in a week?",
  image: null,
  options: ["5", "6", "7", "8"],
  correctIndex: 2,
  sourcePage: 7
},
{
  id: 34,
  text: "How many months are there in a year?",
  image: null,
  options: ["10", "11", "12", "13"],
  correctIndex: 2,
  sourcePage: 7
}


/* ------------------ FRUITS ------------------ */
{
  id: 35,
  text: "Which fruit is shown?",
  image: "images/mango.jpg",
  options: ["Apple", "Mango", "Banana", "Orange"],
  correctIndex: 1,
  sourcePage: 9
},
{
  id: 36,
  text: "Which fruit is shown?",
  image: "images/orange.jpg",
  options: ["Apple", "Orange", "Grapes", "Mango"],
  correctIndex: 1,
  sourcePage: 9
},
{
  id: 37,
  text: "Which fruit is shown?",
  image: "images/grapes.jpg",
  options: ["Grapes", "Banana", "Apple", "Papaya"],
  correctIndex: 0,
  sourcePage: 9
},

/* ------------------ VEGETABLES (MORE) ------------------ */
{
  id: 38,
  text: "Which vegetable is shown?",
  image: "images/onion.jpg",
  options: ["Garlic", "Potato", "Onion", "Radish"],
  correctIndex: 2,
  sourcePage: 10
},
{
  id: 39,
  text: "Which vegetable is shown?",
  image: "images/cabbage.jpg",
  options: ["Spinach", "Cabbage", "Cauliflower", "Lettuce"],
  correctIndex: 1,
  sourcePage: 10
},
{
  id: 40,
  text: "Which vegetable is shown?",
  image: "images/cauliflower.jpg",
  options: ["Cabbage", "Cauliflower", "Broccoli", "Turnip"],
  correctIndex: 1,
  sourcePage: 10
},

/* ------------------ ANIMALS (MORE) ------------------ */
{
  id: 41,
  text: "Which animal is shown?",
  image: "images/lion.jpg",
  options: ["Tiger", "Lion", "Leopard", "Cheetah"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 42,
  text: "Which animal is shown?",
  image: "images/tiger.jpg",
  options: ["Lion", "Tiger", "Leopard", "Cat"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 43,
  text: "Which animal is shown?",
  image: "images/goat.jpg",
  options: ["Sheep", "Cow", "Goat", "Deer"],
  correctIndex: 2,
  sourcePage: 8
},

/* ------------------ BIRDS (MORE) ------------------ */
{
  id: 44,
  text: "Which bird is shown?",
  image: "images/pigeon.jpg",
  options: ["Crow", "Sparrow", "Pigeon", "Parrot"],
  correctIndex: 2,
  sourcePage: 14
},
{
  id: 45,
  text: "Which bird is shown?",
  image: "images/duck.jpg",
  options: ["Hen", "Duck", "Goose", "Swan"],
  correctIndex: 1,
  sourcePage: 14
},

/* ------------------ TRANSPORT ------------------ */
{
  id: 46,
  text: "Which vehicle is shown?",
  image: "images/car.jpg",
  options: ["Bus", "Truck", "Car", "Van"],
  correctIndex: 2,
  sourcePage: 11
},
{
  id: 47,
  text: "Which vehicle is shown?",
  image: "images/airplane.jpg",
  options: ["Helicopter", "Train", "Airplane", "Bus"],
  correctIndex: 2,
  sourcePage: 11
},
{
  id: 48,
  text: "Which vehicle flies in the sky?",
  image: null,
  options: ["Car", "Train", "Ship", "Airplane"],
  correctIndex: 3,
  sourcePage: 11
},

/* ------------------ BODY PARTS ------------------ */
{
  id: 49,
  text: "Which body part is used to walk?",
  image: null,
  options: ["Hand", "Leg", "Eye", "Ear"],
  correctIndex: 1,
  sourcePage: 5
},
{
  id: 50,
  text: "Which body part is used to eat?",
  image: null,
  options: ["Nose", "Hand", "Mouth", "Ear"],
  correctIndex: 2,
  sourcePage: 5
},

/* ------------------ SCIENCE ------------------ */
{
  id: 51,
  text: "Which planet is closest to the Sun?",
  image: null,
  options: ["Earth", "Mars", "Mercury", "Venus"],
  correctIndex: 2,
  sourcePage: 6
},
{
  id: 52,
  text: "Which planet is the largest?",
  image: null,
  options: ["Earth", "Mars", "Jupiter", "Saturn"],
  correctIndex: 2,
  sourcePage: 6
},

/* ------------------ SHAPES ------------------ */
{
  id: 53,
  text: "Which shape has four equal sides?",
  image: null,
  options: ["Rectangle", "Triangle", "Square", "Circle"],
  correctIndex: 2,
  sourcePage: 4
},
{
  id: 54,
  text: "Which shape has no corners?",
  image: null,
  options: ["Square", "Circle", "Triangle", "Rectangle"],
  correctIndex: 1,
  sourcePage: 4
},

/* ------------------ NUMBERS ------------------ */
{
  id: 55,
  text: "What comes after 19?",
  image: null,
  options: ["18", "20", "21", "22"],
  correctIndex: 1,
  sourcePage: 2
},
{
  id: 56,
  text: "What comes before 10?",
  image: null,
  options: ["8", "9", "10", "11"],
  correctIndex: 1,
  sourcePage: 2
},

/* ------------------ DAYS & MONTHS ------------------ */
{
  id: 57,
  text: "Which day comes after Friday?",
  image: null,
  options: ["Thursday", "Saturday", "Sunday", "Monday"],
  correctIndex: 1,
  sourcePage: 7
},
{
  id: 58,
  text: "Which month comes after June?",
  image: null,
  options: ["May", "July", "August", "April"],
  correctIndex: 1,
  sourcePage: 7
},

/* ------------------ GENERAL GK ------------------ */
{
  id: 59,
  text: "What do we breathe?",
  image: null,
  options: ["Water", "Oxygen", "Smoke", "Dust"],
  correctIndex: 1,
  sourcePage: 6
},
{
  id: 60,
  text: "Which object gives us light during the day?",
  image: null,
  options: ["Moon", "Star", "Sun", "Bulb"],
  correctIndex: 2,
  sourcePage: 6
},

/* ------------------ COLORS ------------------ */
{
  id: 61,
  text: "Which color is grass?",
  image: null,
  options: ["Red", "Blue", "Green", "Yellow"],
  correctIndex: 2,
  sourcePage: 3
},
{
  id: 62,
  text: "Which color is the sky?",
  image: null,
  options: ["Green", "Blue", "Red", "Black"],
  correctIndex: 1,
  sourcePage: 3
},

/* ------------------ FINAL QUESTIONS ------------------ */
{
  id: 63,
  text: "Which animal is called the King of the Jungle?",
  image: null,
  options: ["Tiger", "Lion", "Elephant", "Bear"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 64,
  text: "Which bird can fly?",
  image: null,
  options: ["Dog", "Cow", "Sparrow", "Horse"],
  correctIndex: 2,
  sourcePage: 14
},
{
  id: 65,
  text: "Which fruit keeps the doctor away?",
  image: null,
  options: ["Banana", "Apple", "Orange", "Mango"],
  correctIndex: 1,
  sourcePage: 9
},
{
  id: 66,
  text: "Which animal gives us milk?",
  image: null,
  options: ["Dog", "Cow", "Cat", "Horse"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 67,
  text: "Which day comes before Monday?",
  image: null,
  options: ["Saturday", "Sunday", "Friday", "Tuesday"],
  correctIndex: 1,
  sourcePage: 7
},
{
  id: 68,
  text: "How many legs does a dog have?",
  image: null,
  options: ["2", "3", "4", "5"],
  correctIndex: 2,
  sourcePage: 8
},
{
  id: 69,
  text: "Which is a water animal?",
  image: null,
  options: ["Dog", "Cat", "Fish", "Cow"],
  correctIndex: 2,
  sourcePage: 8
},
{
  id: 70,
  text: "Which month has the fewest days?",
  image: null,
  options: ["January", "February", "March", "April"],
  correctIndex: 1,
  sourcePage: 7
},
{
  id: 71,
  text: "Which animal has a long trunk?",
  image: null,
  options: ["Horse", "Elephant", "Cow", "Camel"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 72,
  text: "Which planet is known as Earth’s home?",
  image: null,
  options: ["Mars", "Earth", "Venus", "Jupiter"],
  correctIndex: 1,
  sourcePage: 6
}

/* ------------------ TOTAL: 72 QUESTIONS ------------------ */
];

export default QUESTION_BANK;