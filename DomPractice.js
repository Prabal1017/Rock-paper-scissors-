
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`

    function playGame(playerMove) {

      const computerMove = pickComputerMove()

      let result = 'damn'

      if (playerMove === 'Rock') {
        if (computerMove === 'Rock' && playerMove === 'Rock') {
          result = 'Tie.';
        }
        else if (computerMove === 'Paper' && playerMove === 'Rock') {
          result = 'You Lose.';
        }
        else if (computerMove === 'Scissors' && playerMove === 'Rock') {
          result = 'You Win.';
        }
      }

      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock' && playerMove === 'Paper') {
          result = 'You Win.';
        }
        else if (computerMove === 'Paper' && playerMove === 'Paper') {
          result = 'Tie.';
        }
        else if (computerMove === 'Scissors' && playerMove === 'Paper') {
          result = 'You Lose.';
        }
      }

      else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock' && playerMove === 'Scissors') {
          result = 'You Lose.';
        }
        else if (computerMove === 'Paper' && playerMove === 'Scissors') {
          result = 'You Win.';
        }
        else if (computerMove === 'Scissors' && playerMove === 'Scissors') {
          result = 'Tie.';
        }
      }

      if (result === 'You Win.') {
        score.wins++
      }
      else if (result === 'You Lose.') {
        score.loses++
      }
      else if (result === 'Tie.') {
        score.ties++
      }

      console.log(`niggr ${result}`)

      document.querySelector('.result').innerHTML = result

      document.querySelector('.score').innerHTML =
        `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`

      document.querySelector('.gameStats').innerHTML =
        `You
    <img class="button-images" src="Images/${playerMove}-emoji.png">
    <img class="button-images" src="Images/${computerMove}-emoji.png">
    Computer`



      console.log(score)

      localStorage.setItem('score', JSON.stringify(score))
    }
    function pickComputerMove() {

      let computerMove = ''
      const randomNumber = Math.random()

      if (randomNumber > 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock'
      }
      else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper'
      }
      else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors'
      }
      return computerMove
    }