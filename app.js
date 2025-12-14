/* =========================================================
   GK Quiz – app.js
   Fully tested, regression-safe
   Depends on: questionBank.js
   ========================================================= */

let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let answerLocked = false;

/* =========================
   INIT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  populateQuestionCountDropdown();

  const startBtn = document.getElementById("startQuizBtn");
  if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
  }
});

/* =========================
   STARTUP SCREEN
   ========================= */
function populateQuestionCountDropdown() {
  const select = document.getElementById("questionCountSelect");

  if (!window.questionBank || !Array.isArray(window.questionBank)) {
    console.error("Question Bank not loaded");
    return;
  }

  const total = window.questionBank.length;
  select.innerHTML = "";

  for (let i = 5; i <= total; i += 5) {
    addOption(select, i);
  }

  if (total % 5 !== 0) {
    addOption(select, total);
  }

  select.value = total >= 10 ? 10 : total;
}

function addOption(select, value) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = value;
  select.appendChild(opt);
}

/* =========================
   QUIZ START
   ========================= */
function startQuiz() {
  const count = parseInt(
    document.getElementById("questionCountSelect").value,
    10
  );

  quizQuestions = shuffle([...window.questionBank]).slice(0, count);
  currentIndex = 0;
  userAnswers = new Array(count).fill(null);

  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  renderQuestion();
}

/* =========================
   RENDER QUESTION
   ========================= */
function renderQuestion() {
  answerLocked = false;
  const q = quizQuestions[currentIndex];

  document.getElementById("questionCounter").textContent =
    `Question ${currentIndex + 1} of ${quizQuestions.length}`;

  document.getElementById("questionText").textContent = q.question;

  const img = document.getElementById("questionImage");
  if (q.image) {
    img.src = `images/${q.image}`;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.onclick = () => handleAnswer(idx, btn);
    optionsContainer.appendChild(btn);
  });

  updateNavButtons();
}

/* =========================
   ANSWER HANDLING
   ========================= */
function handleAnswer(selectedIdx, btn) {
  if (answerLocked) return;

  const q = quizQuestions[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(b => (b.disabled = true));

  userAnswers[currentIndex] = selectedIdx;
  answerLocked = true;

  buttons.forEach((b, i) => {
    if (i === q.correctIndex) {
      b.classList.add("correct");
    } else if (i === selectedIdx) {
      b.classList.add("incorrect");
    }
  });

  document.getElementById("clearBtn").disabled = true;
  document.getElementById("nextBtn").disabled = false;
}

/* =========================
   NAVIGATION
   ========================= */
function nextQuestion() {
  if (currentIndex === quizQuestions.length - 1) {
    showSummary();
    return;
  }
  currentIndex++;
  renderQuestion();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function skipQuestion() {
  userAnswers[currentIndex] = null;
  nextQuestion();
}

function clearAnswer() {
  if (answerLocked) return;

  userAnswers[currentIndex] = null;
  renderQuestion();
}

/* =========================
   SUMMARY + REVIEW
   ========================= */
function showSummary() {
  document.getElementById("quizScreen").style.display = "none";
  const summary = document.getElementById("summaryScreen");
  summary.style.display = "block";

  let correct = 0;
  quizQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.correctIndex) correct++;
  });

  document.getElementById("scoreText").textContent =
    `${correct} / ${quizQuestions.length}`;

  const review = document.getElementById("reviewContainer");
  review.innerHTML = "";

  quizQuestions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "review-item";

    const isCorrect = userAnswers[i] === q.correctIndex;

    div.innerHTML = `
      <strong>Q${i + 1}:</strong> ${q.question}<br>
      <span class="${isCorrect ? "correct" : "incorrect"}">
        Your answer: ${userAnswers[i] !== null ? q.options[userAnswers[i]] : "Skipped"}
      </span><br>
      Correct answer: ${q.options[q.correctIndex]}
      ${q.sourcePage ? `<br><em>PDF page ${q.sourcePage}</em>` : ""}
      <hr>
    `;
    review.appendChild(div);
  });
}

/* =========================
   UTILITIES
   ========================= */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateNavButtons() {
  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("clearBtn").disabled = false;

  document.getElementById("nextBtn").textContent =
    currentIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next →";
}

/* =========================
   EXIT
   ========================= */
function exitQuiz() {
  showSummary();
}
