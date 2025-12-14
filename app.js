/* app.js */

if (!window.questionBank || !Array.isArray(window.questionBank)) {
  document.getElementById("app").innerHTML =
    "<b style='color:red'>Question Bank not loaded</b>";
  throw new Error("Question bank missing");
}

let questions = [];
let index = 0;
let answers = {};
let selectedCount = 0;

const app = document.getElementById("app");

/* ---------- START SCREEN ---------- */
function startScreen() {
  app.innerHTML = `
    <h3>How many questions?</h3>
    <label><input type="radio" name="q" value="5"> 5</label><br>
    <label><input type="radio" name="q" value="10" checked> 10</label><br>
    <label><input type="radio" name="q" value="15"> 15</label><br><br>
    <button class="primary" onclick="startQuiz()">Start Quiz</button>
  `;
}

window.startQuiz = function () {
  const count =
    Number(document.querySelector("input[name='q']:checked")?.value) || 10;

  questions = shuffle([...window.questionBank]).slice(0, Math.min(count, window.questionBank.length));
  index = 0;
  answers = {};
  renderQuestion();
};

/* ---------- QUESTION RENDER ---------- */
function renderQuestion() {
  const q = questions[index];
  const userAnswer = answers[q.id];

  let imgHTML = q.image
    ? `<img src="${q.image}" onerror="this.style.display='none'">`
    : "";

  app.innerHTML = `
    <div>
      <span>Question ${index + 1} of ${questions.length}</span>
      <span class="exit" onclick="exitQuiz()">Exit ✕</span>
    </div>
    <h3>${q.question}</h3>
    ${imgHTML}
    <div class="options">
      ${q.options.map((opt, i) => `
        <button
          class="${userAnswer !== undefined
            ? i === q.correctIndex
              ? "correct"
              : i === userAnswer
                ? "wrong"
                : ""
            : ""}"
          onclick="selectAnswer(${i})"
          ${userAnswer !== undefined ? "disabled" : ""}
        >
          ${String.fromCharCode(65 + i)}. ${opt}
        </button>
      `).join("")}
    </div>

    <div class="controls-row">
      <button class="secondary" onclick="clearAnswer()">🧽 Clear</button>
      <button class="secondary" onclick="skip()">⏭ Skip</button>
    </div>

    <div class="controls-row">
      <button class="secondary" onclick="prev()" ${index === 0 ? "disabled" : ""}>← Previous</button>
      <button class="primary" id="nextBtn" onclick="next()" disabled>
        ${index === questions.length - 1 ? "Finish Quiz" : "Next →"}
      </button>
    </div>
  `;

  if (userAnswer !== undefined) {
    document.getElementById("nextBtn").disabled = false;
  }
}

/* ---------- ACTIONS ---------- */
window.selectAnswer = function (i) {
  const q = questions[index];
  answers[q.id] = i;
  document.getElementById("nextBtn").disabled = false;
  renderQuestion();
};

window.clearAnswer = function () {
  const q = questions[index];
  delete answers[q.id];
  renderQuestion();
};

window.skip = function () {
  next();
};

window.prev = function () {
  index--;
  renderQuestion();
};

window.next = function () {
  if (index < questions.length - 1) {
    index++;
    renderQuestion();
  } else {
    showReview();
  }
};

window.exitQuiz = function () {
  showReview();
};

/* ---------- REVIEW ---------- */
function showReview() {
  let correct = 0;

  const rows = questions.map((q, i) => {
    const ua = answers[q.id];
    const ca = q.correctIndex;
    if (ua === ca) correct++;

    return `
      <p>
        <b>Q${i + 1}:</b> ${q.question}<br>
        Your answer: ${ua !== undefined ? q.options[ua] : "Skipped"}<br>
        Correct: ${q.options[ca]} (PDF page ${q.sourcePage ?? "—"})
      </p>
      <hr>
    `;
  }).join("");

  app.innerHTML = `
    <h2>Quiz Review</h2>
    ${rows}
    <h3>Score: ${correct}/${questions.length}</h3>
    <button class="primary" onclick="startScreen()">Restart</button>
  `;
}

/* ---------- UTIL ---------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

startScreen();
