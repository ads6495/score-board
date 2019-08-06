const addTeam1Score = () => {
  // get the current score
  let currentTeam1Score = team1Score.textContent
  // console.log(currentTeam1Score)
  // add 1 to the current score
  currentTeam1Score++
  // console.log(currentTeam1Score)
  // update the html with new score
  team1Score.textContent = currentTeam1Score
}
team1Add.addEventListener("click", addTeam1Score)
const subTeam1Score = () => {
  let currentTeam1Score = team1Score.textContent
  currentTeam1Score--
  team1Score.textContent = currentTeam1Score
}
team1Sub.addEventListener("click", subTeam1Score)
const addTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent
  currentTeam2Score++
  team2Score.textContent = currentTeam2Score
}
team2Add.addEventListener("click", addTeam2Score)
const subTeam2Score = () => {
  let currentTeam2Score = team2Score.textContent
  currentTeam2Score--
  team2Score.textContent = currentTeam2Score
}
team2Sub.addEventListener("click", subTeam2Score)
const newTeam1Name = () => {
  team1Name.innerHTML = team1Input.value
}
team1Input.addEventListener("click", newTeam1Name)
const newTeam2Name = () => {
  team2Name.innerHTML = team2Input.value
}
team2Input.addEventListener("click", newTeam2Name)