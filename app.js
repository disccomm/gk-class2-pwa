let questions = [];
let selectedCount = 0;
let current = 0;
let answers = [];
let locked = false;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const reviewScreen = document.getElementById("reviewScreen");

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const imageEl = document.getElementById("questionImage");
const progressEl = document.getElementById("progress");

const nextBtn = document.getElementById("nextBtn");
const clearBtn = document.getElementById("clearBtn");

function init() {
  const max = window.questionBank.length;
  const select = document.getElementById("questionCount");

  for (let i = 5; i <= max; i += 5) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    select.appendChild(opt);
  }
}

function startQuiz() {
  selectedCount = parseInt(document.getElementById("questionCount").value);
  questions = shuffle([...window.questionBank]).slice(0, selectedCount);
  answers = Array(selectedCount).fill(null);

  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  render();
}

function render() {
  locked = answers[current]?.locked || false;
  nextBtn.disabled = !answers[current];

  progressEl.textContent = `Question ${current + 1} of ${selectedCount}`;
  questionText.textContent = questions[current].question;

  optionsDiv.innerHTML = "";
  imageEl.style.display = "none";

  if (questions[current].image) {
    imageEl.src = `images/${questions[current].image}`;
    imageEl.style.display = "block";
  }

  questions[current].options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt, btn);

    if (answers[current]) {
      if (opt === questions[current].correctAnswer)
        btn.classList.add("correct");
      else if (opt === answers[current].value)
        btn.classList.add("wrong");
    }

    optionsDiv.appendChild(btn);
  });

  clearBtn.disabled = locked;
}

function selectAnswer(value, btn) {
  if (locked) return;

  answers[current] = { value, locked: true };
  locked = true;
  nextBtn.disabled = false;

  render();
}

function clearAnswer() {
  if (locked) return;
  answers[current] = null;
  render();
}

function nextQuestion() {
  if (current === selectedCount - 1) {
    showReview();
    return;
  }
  current++;
  render();
}

function prevQuestion() {
  if (current > 0) {
    current--;
    render();
  }
}

function skipQuestion() {
  current++;
  if (current >= selectedCount) showReview();
  else render();
}

function exitQuiz() {
  if (confirm("Exit quiz? Progress will be lost.")) location.reload();
}

function showReview() {
  quizScreen.style.display = "none";
  reviewScreen.style.display = "block";

  const review = document.getElementById("reviewContent");
  review.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>Q${i + 1}:</strong> ${q.question}<br>
      Your answer: <span style="color:${answers[i]?.value === q.correctAnswer ? 'green' : 'red'}">
        ${answers[i]?.value || "Skipped"}
      </span><br>
      Correct: <strong>${q.correctAnswer}</strong>
      <hr>
    `;
    review.appendChild(div);
  });
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

init();
