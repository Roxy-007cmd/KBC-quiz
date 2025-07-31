const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    question: "Who is known as the father of the Indian Constitution?",
    options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "B. R. Ambedkar", "Sardar Patel"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Earth", "Mars", "Jupiter"],
    answer: 2
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Leopard"],
    answer: 1
  }
]

let currentQuestion = 0

function loadQuestion() {
  const q = questions[currentQuestion]
  document.getElementById("question").textContent = q.question
  const buttons = document.querySelectorAll(".option")
  buttons.forEach((btn, index) => {
    btn.textContent = q.options[index]
    btn.disabled = false
    btn.style.backgroundColor = "#004080"
  })
  document.getElementById("result").textContent = ""
}

function selectOption(selected) {
  const q = questions[currentQuestion]
  const buttons = document.querySelectorAll(".option")
  if (selected === q.answer) {
    buttons[selected].style.backgroundColor = "green"
    document.getElementById("result").textContent = "Correct!"
  } else {
    buttons[selected].style.backgroundColor = "red"
    buttons[q.answer].style.backgroundColor = "green"
    document.getElementById("result").textContent = "Wrong!"
  }
  buttons.forEach(btn => btn.disabled = true)
  setTimeout(() => {
    currentQuestion++
    if (currentQuestion < questions.length) {
      loadQuestion()
    } else {
      document.getElementById("question-box").innerHTML = "<h2>Quiz Finished!</h2>"
      document.getElementById("result").textContent = ""
    }
  }, 2000)
}

window.onload = loadQuestion
