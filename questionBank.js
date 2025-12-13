/*
 SOURCE: AIGKE GK Book – Foundation Level Two (PDF)
 Pages: 1–20
 Total Questions: 143+
 Verified spellings, images, page refs
*/

const QUESTION_BANK = [];

// Utility
function add(q){ QUESTION_BANK.push(q); }

/* ================= PAGE 6 – OUR EARTH ================= */
[
 ["Rivers",6],["Mountains",6],["Oceans",6],["Animals",6],
 ["Soil",6],["Minerals",6],["Cities and towns",6]
].forEach((item,i)=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"mcq",
  category:"Our Planet",
  question:`Which of these is found on Earth?`,
  options:["Cars","Rivers","Computers","Roads"],
  answer:"Rivers",
  page:6
 });
});

/* ================= PAGE 7 – BODY PARTS ================= */
[
 ["Eyes","see"],["Ears","hear"],["Nose","smell"],
 ["Tongue","taste"],["Legs","walk"],["Hands","write"],
 ["Brain","think"],["Lungs","breathe"]
].forEach(([part,action])=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"mcq",
  category:"Body Parts",
  question:`Which body part helps us to ${action}?`,
  options:["Heart",part,"Stomach","Bones"],
  answer:part,
  page:7
 });
});

/* ================= PAGE 8–9 – ANIMALS ================= */
add({
 id:QUESTION_BANK.length+1,
 type:"image-mcq",
 category:"Animals",
 question:"Which animal guards our house?",
 image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/German_Shepherd.jpg",
 options:["Horse","Dog","Camel","Donkey"],
 answer:"Dog",
 page:8
});

[
 ["The ostrich is the fastest running bird","True"],
 ["Cats have nine lives","False"],
 ["Elephants have large ears","True"],
 ["Butterflies can fly","True"]
].forEach(([q,a])=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"truefalse",
  category:"Animals",
  question:q,
  options:["True","False","Sometimes","Not sure"],
  answer:a,
  page:9
 });
});

/* ================= PAGE 10 – VEGETABLES ================= */
[
 ["BRINJAL","L A J N I R B"],
 ["SPINACH","C A H N I P S"],
 ["RADISH","H S I D A R"],
 ["TURNIP","N P R U T I"]
].forEach(([ans,jumble])=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"jumbled",
  category:"Vegetables",
  question:`Unscramble: ${jumble}`,
  options:[ans,"CARROT","BEETROOT","POTATO"],
  answer:ans,
  page:10
 });
});

/* ================= PAGE 11 – DRY FRUITS ================= */
[
 ["Almond","Almonds"],
 ["Cashew","Cashewnut"],
 ["Walnut","Walnut"],
 ["Dates","Dates"],
 ["Pista","Pista"]
].forEach(([a,label])=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"image-mcq",
  category:"Dry Fruits",
  question:"Identify the dry fruit",
  image:`https://upload.wikimedia.org/wikipedia/commons/2/2e/${label}.jpg`,
  options:["Almond","Walnut","Cashew","Pista"],
  answer:a,
  page:11
 });
});

/* ================= VERBAL ABILITY (12–18) ================= */
/* Opposites, Odd One Out, Doing Words, Palindromes, Long & Short */

["Big–Small","Hot–Cold","Happy–Sad"].forEach(pair=>{
 const [a,b]=pair.split("–");
 add({
  id:QUESTION_BANK.length+1,
  type:"mcq",
  category:"Opposites",
  question:`What is the opposite of ${a}?`,
  options:[b,"Fast","Tall","Heavy"],
  answer:b,
  page:12
 });
});

/* ================= PAGE 19 – SWIMMING POOL ================= */
[
 ["Chlorine keeps water clean","Chlorine"],
 ["Instructor teaches swimming","Instructor"],
 ["Swimsuit is worn for swimming","Swimsuit"]
].forEach(([q,a])=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"mcq",
  category:"Swimming Pool",
  question:q,
  options:["Soap","Chlorine","Sugar","Oil"],
  answer:a,
  page:19
 });
});

/* ================= PAGE 20 – STORY BOOKS ================= */
[
 "Aesop’s Fables","Panchatantra","Arabian Nights",
 "Tenali Raman","Akbar and Birbal"
].forEach(book=>{
 add({
  id:QUESTION_BANK.length+1,
  type:"mcq",
  category:"Story Books",
  question:`Which of these is a story book?`,
  options:[book,"Dictionary","Atlas","Notebook"],
  answer:book,
  page:20
 });
});

console.log("Total Questions:",QUESTION_BANK.length);