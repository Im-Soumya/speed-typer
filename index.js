const timeEl = document.querySelector('#time')
const scoreEl = document.querySelector('#score')
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

let time = 10
let score = 0
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium'

console.log(inputEl)