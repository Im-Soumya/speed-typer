const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
const wordEl = document.querySelector('#word')
const inputEl = document.querySelector('#text')
const endGameEl = document.querySelector('#end-game-container')
const settingsBtn = document.querySelector('#settings-btn')
const settingsForm = document.querySelector('#settings-form')
const difficultySelect = document.querySelector('#settings')

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

let word
let time = 10
let score = 0
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

const gameOver = () => {
  document.querySelector('.container').innerHTML = ''
  endGameEl.innerHTML = `
  <h1>Time ran out!</h1>
  <p>Your final score is ${score}</p>
  <button class='reload-btn' onclick="location.reload()">Reload</button>
  `
  endGameEl.style.display = 'flex'
}

const updateTime = () => {
  time--
  timeEl.innerText = `${time}s`
  if(time === 0) {
    clearInterval(timer)
    gameOver()
  }
}

const timer = setInterval(updateTime, 1000)

const addWordDOM = () => {
  word = words[Math.floor(Math.random() * words.length)]
  wordEl.innerText = word
}

const updateScore = () => {
  score++
  scoreEl.innerText = score
}

addWordDOM()

inputEl.addEventListener('input', (e) => {
  const text = e.target.value
  if(text === word) {
    addWordDOM()
    updateScore()
    e.target.value = ''

    if(difficulty === 'easy') {
      time += 5
    } else if(difficulty === 'medium') {
      time += 3
    } else {
      time += 2
    }

    updateTime()
  }
})

difficultySelect.addEventListener('change', (e) => {
  difficulty = e.target.value
  localStorage.setItem('difficulty', JSON.stringify(difficulty))
})

settingsBtn.addEventListener('click', () => {
  document.querySelector('.settings').classList.toggle('hide')
})