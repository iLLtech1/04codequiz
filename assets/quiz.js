// const question = document.querySelector('#question')
// const choices = Array.from(document.querySelector('.choice-text')
// const progressText = document.querySelector('#progressText')
// const scoreText = document.querySelector('#score')
// // const question = document.querySelector('#question')

// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let avalibleQuestions = []

// let questions = [
//   {
//     question: 'What is the character call out for a class in CSS?',
//     choice1: 'Money Symbol',
//     choice2: 'Question Mark',
//     choice3: 'And Symbol',
//     choice4: 'Period',
//     answer: 4,
//   },

//   {
//     question: 'What does CSS stand for?',
//     choice1: 'Cool Style Syntax',
//     choice2: 'Cause Smooth Style',
//     choice3: 'Come Super Saying',
//     choice4: 'Cascading Style Sheet',
//     answer: 4,
//   },

//   {
//     question: 'What does HTML stand for?',
//     choice1: 'Hot Tamali Mama Love',
//     choice2: 'Hyper Text MarkUp Language',
//     choice3: 'Hyper Tour Masking Light',
//     choice4: 'Have Too Much Load',
//     answer: 2,
//   },

//   {
//     question: 'What is Repo short for?',
//     choice1: 'Grim Repo',
//     choice2: 'Repossession',
//     choice3: 'Repository',
//     choice4: 'Nothing',
//     answer: 3,
//   },
// ]

// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

// startQuiz => () => {
//   questionCounter = 0
//   score = 0
//   avalibleQuestions = [...questions]
//   getNewQuestions()
// }

// getNewQuestions = () => {
//   if (availibleQuestions.lenght === 0 || questionCounter > MAX_QUESTIONS) {
//     localStorage.setItem('mostRecentScore', score)

//     return window.location.assign('/end.html')
//   }
//   questionCounter++
//   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//   progressBarFull.style.width = `{(questionCounter/MAX_QUESTIONS) * 100}%`

//   const questionsIndex = Math.floor(Math.random() * availibleQuestions.length)
//   currentQuestion = availibleQuestions[questionsIndex]
//   question.innertext = currentQuestion.question

//   choices.forEach(choice => {
//     const number = choice.dataset{'number'}
//     choice.innerText = currentQuestion ['choice' + number]
//   })

//   availibleQuestions.splice(questionsIndex, 1)

//   acceptingAnswers = true
// }

// choices.forEach(choice => {
//   choice.addEventListener('click', e => {
//     if(!acceptingAnswers) return

//     acceptingAnswers = false
//     const selectedChoice = e.target
//     const selectedAnswer = selectedChoice.dataset['number']

//     let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
//     'incorrect'

//     if(classToApply === 'correct') {
//       incrementScore(SCORE_POINTS)
//     }

//     selectedChoice.parentElement.classList.add(classToApply)

//     setTimeout(() => {
//       selectedChoice.parentElement.classList.remove(classToApply)
//       getNewQuestion()

//     }, 1000)
//   })
// })

// incrementScore = num => {
//   score +=num
//   scoreText.innerText = score
// }





