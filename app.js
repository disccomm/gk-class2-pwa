let questions = [];
let current = 0;
let answers = {};
let locked = false;

/* ---------------- INIT ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  populateQuestionCount();
});

function populateQuestionCount() {
  const select = document.getElementById("questionCount");
  const total = window.questionBank.length;

  [5,10,15,20,25,50,total].forEach(n => {
    if (n <= total) {
      const opt = document.createElement("option");
      opt.value = n;
      opt.textContent = n === total ? `All (${total})` : n;
      select.appendChild(opt);
    }
  });
}

/* ---------------- START ---------------- */

function startQuiz() {
  const count = Number(document.getElementById("questionCount").value);
  if (!count) return alert("Select number of questions");

  questions = shuffle([...window.questionBank]).slice(0, count);
  current = 0;
  answers = {};

  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";
  showQuestion();
}

/* ---------------- QUESTION ---------------- */

function showQuestion() {
  locked = false;
  const q = questions[current];

  document.getElementById("progress").textContent =
    `Question ${current + 1} of ${questions.length}`;

  document.getElementById("questionText").textContent = q.question;

  const img = document.getElementById("questionImage");
  if (q.image) {
    img.src = `images/${q.image}`;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  shuffle([...q.options]).forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(btn, opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("nextBtn").disabled = true;
  document.getElementById("clearBtn").disabled = false;
}

/* ---------------- ANSWER ---------------- */

function selectAnswer(btn, value) {
  if (locked) return;

  const q = questions[current];
  locked = true;
  answers[q.id] = value;

  [...document.querySelectorAll(".options button")].forEach(b => {
    if (b.textContent === q.correctAnswer) b.classList.add("correct");
    if (b.textContent === value && value !== q.correctAnswer)
      b.classList.add("wrong");
  });

  document.getElementById("nextBtn").disabled = false;
  document.getElementById("clearBtn").disabled = true;
}

function clearAnswer() {
  if (locked) return;
  answers[questions[current].id] = null;
  showQuestion();
}

/* ---------------- NAV ---------------- */

function nextQuestion() {
  current++;
  current >= questions.length ? showReview() : showQuestion();
}

function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function skipQuestion() {
  current++;
  current >= questions.length ? showReview() : showQuestion();
}

function exitQuiz() {
  if (confirm("Exit quiz?")) location.reload();
}

/* ---------------- REVIEW ---------------- */

function showReview() {
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("reviewScreen").style.display = "block";

  const review = document.getElementById("reviewContent");
  review.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    const ans = answers[q.id];
    div.innerHTML = `
      <p><strong>Q${i+1}:</strong> ${q.question}</p>
      <p style="color:${ans===q.correctAnswer?'green':'red'}">
        Your answer: ${ans || 'Skipped'}<br>
        Correct: ${q.correctAnswer} (Page ${q.page})
      </p><hr>`;
    review.appendChild(div);
  });
}

/* ---------------- UTILS ---------------- */

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
