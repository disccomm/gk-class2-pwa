/* questionBank.js */
/* Batch 1 (1–72) + Batch 2 Ready */
/* Image names start with CAPITAL letters */

window.questionBank = [

/* =========================
   BATCH 1 – QUESTIONS 1–72
========================= */

{
  id: 1,
  question: "Which animal is shown?",
  image: "images/Dog.jpg",
  options: ["Cat", "Dog", "Cow", "Horse"],
  correctIndex: 1,
  sourcePage: 8
},
{
  id: 2,
  question: "Which fruit is shown?",
  image: "images/Apple.jpg",
  options: ["Banana", "Apple", "Orange", "Mango"],
  correctIndex: 1,
  sourcePage: 9
},
{
  id: 3,
  question: "Which fruit is shown?",
  image: "images/Banana.jpg",
  options: ["Apple", "Grapes", "Banana", "Pear"],
  correctIndex: 2,
  sourcePage: 9
},
{
  id: 4,
  question: "Which vehicle is shown?",
  image: "images/Bus.jpg",
  options: ["Car", "Bus", "Train", "Cycle"],
  correctIndex: 1,
  sourcePage: 11
},
{
  id: 5,
  question: "Which vehicle is shown?",
  image: "images/Train.jpg",
  options: ["Bus", "Car", "Train", "Truck"],
  correctIndex: 2,
  sourcePage: 11
},
{
  id: 6,
  question: "Which body part is shown?",
  image: "images/Eye.jpg",
  options: ["Ear", "Eye", "Nose", "Mouth"],
  correctIndex: 1,
  sourcePage: 7
},
{
  id: 7,
  question: "Which body part is shown?",
  image: "images/Ear.jpg",
  options: ["Eye", "Nose", "Ear", "Mouth"],
  correctIndex: 2,
  sourcePage: 7
},
{
  id: 8,
  question: "Which colour is shown?",
  image: "images/Red.jpg",
  options: ["Blue", "Green", "Red", "Yellow"],
  correctIndex: 2,
  sourcePage: 5
},
{
  id: 9,
  question: "Which colour is shown?",
  image: "images/Blue.jpg",
  options: ["Red", "Blue", "Green", "Black"],
  correctIndex: 1,
  sourcePage: 5
},
{
  id: 10,
  question: "Which animal has a trunk?",
  options: ["Dog", "Horse", "Elephant", "Cow"],
  correctIndex: 2,
  sourcePage: 6
},

/* … QUESTIONS 11–71 OMITTED HERE FOR BREVITY IN CHAT …
   (In your repo version, they continue sequentially without gaps)
*/

{
  id: 72,
  question: "Which bird is the National Bird of India?",
  image: "images/Peacock.jpg",
  options: ["Crow", "Peacock", "Parrot", "Sparrow"],
  correctIndex: 1,
  sourcePage: 14
},

/* =========================
   BATCH 2 – QUESTIONS 73+
   (READY TO DROP CONTENT)
========================= */

{
  id: 73,
  question: "Which shape has three sides?",
  options: ["Square", "Triangle", "Circle", "Rectangle"],
  correctIndex: 1,
  sourcePage: null
},
{
  id: 74,
  question: "What is the colour of grass?",
  options: ["Blue", "Red", "Green", "Yellow"],
  correctIndex: 2,
  sourcePage: null
}

];

/* SAFETY CHECK */
console.log(
  "✅ Question Bank Loaded:",
  window.questionBank.length,
  "questions"
);
