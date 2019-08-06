/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
const main = () => {
  console.log('Hello, World!')
}

const restartButton = () => {
  document.querySelector = '.reset-button'
  team2Add.disabled = false
  team2Subtract1Button.disabled = false
  updateTeam2Name.disabled = false
  team1Add.disabled = false
  team1Subtract1Button.disabled = false
  updateTeam1Name.disabled = false
  // document.querySelector('.team-1-name').textContent = 'team 1'
}

//selected "update" button
const team1Input = document.querySelector('.team-1-input')
const team2Input = document.querySelector('.team-2-input')

// selected "team 1" h2 at top
let team1Name = document.querySelector('.team-1-name')
let team2Name = document.querySelector('.team-2-name')
// update button selector
const updateTeam1Name = document.querySelector('.update-team-1-name')
const updateTeam2Name = document.querySelector('.update-team-2-name')
// add 1 button
const team1Add = document.querySelector('.team-1-add-1-button')
const team2Add = document.querySelector('.team-2-add-1-button')
//subtract one
const team1Subtract1Button = document.querySelector('.team-1-subtract-1-button')
const team2Subtract1Button = document.querySelector('.team-2-subtract-1-button')

// select team 1 score
let team1Score = document.querySelector('.team-1-score')
let team12Score = document.querySelector('.team-2-score')

const add1ToTeam1Score = () => {
  // get the current value
  const currentScore = document.querySelector('.team-1-score').textContent
  // add 1
  const newScore = parseInt(currentScore) + 1
  // update the html
  document.querySelector('.team-1-score').textContent = newScore

  if (parseInt(newScore) === 21) {
    document.querySelector('.team-1-score').textContent = 'you win!!'
    team1Add.disabled = true
    team1Subtract1Button.disabled = true
    updateTeam1Name.disabled = true
    team2Add.disabled = true
    team2Subtract1Button.disabled = true
    updateTeam2Name.disabled = true
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const add1toTeam2score = () => {
  const currentScore = document.querySelector('.team-2-score').textContent
  const newScore = parseInt(currentScore) + 1
  document.querySelector('.team-2-score').textContent = newScore

  if (parseInt(newScore) === 21) {
    document.querySelector('.team-2-score').textContent = 'you win!!'
    team2Add.disabled = true
    team2Subtract1Button.disabled = true
    updateTeam2Name.disabled = true
    team1Add.disabled = true
    team1Subtract1Button.disabled = true
    updateTeam1Name.disabled = true
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

const subtract1ToTeam1Score = () => {
  const currentScore = document.querySelector('.team-1-score').textContent
  const newScore = parseInt(currentScore) - 1
  document.querySelector('.team-1-score').textContent = newScore

  if (newScore < 0) {
    document.querySelector('.team-1-score').textContent = 0
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const subtract1ToTeam2Score = () => {
  const currentScore = document.querySelector('.team-2-score').textContent
  const newScore = parseInt(currentScore) - 1
  document.querySelector('.team-2-score').textContent = newScore

  if (newScore < 0) {
    document.querySelector('.team-2-score').textContent = 0
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

const newTeam1Name = () => {
  team1Name.innerHTML = team1Input.value
  console.log(team1Input.value)
}
updateTeam1Name.addEventListener('click', newTeam1Name)

const newTeam2Name = () => {
  team2Name.innerHTML = team2Input.value
}
updateTeam2Name.addEventListener('click', newTeam2Name)

// eventlisteners
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', add1ToTeam1Score)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', add1toTeam2score)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtract1ToTeam1Score)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtract1ToTeam2Score)

document.querySelector('.reset-button').addEventListener('click', restartButton)

document.addEventListener('DOMContentLoaded', main)
