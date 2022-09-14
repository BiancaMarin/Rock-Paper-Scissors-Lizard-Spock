console.log('Hello game!');

const displayMessage = document.querySelector('[data-display-message]');
const buttons = document.querySelectorAll('[data-message-button]');

for (const button of buttons) {
  button.addEventListener('click', handleClick);
}

function computerChoice(min = 0, max = 3) {
  const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return choice[randomNumber];
}

function handleClick(e) {
  const compChoice = computerChoice();
  const userChoice = e.target.dataset.messageButton;
  switch (userChoice + compChoice) {
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
    case 'rocklizard':
    case 'lizardspock':
    case 'spockscissors':
    case 'paperspock':
    case 'scissorslizard':
    case 'lizardpaper':
    case 'spockrock': {
      displayMessage.innerText = `Congratulations, you won! ${userChoice} beats ${compChoice} !`;
      displayMessage.classList.add('win');
      displayMessage.classList.remove('lose');
      break;
    }

    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
    case 'lizardrock':
    case 'spocklizard':
    case 'scissorsspock':
    case 'spockpaper':
    case 'lizardscissors':
    case 'lizardpaper':
    case 'rockspock': {
      displayMessage.innerText = `Sorry, the computer won! ${compChoice} beats ${userChoice} !`;
      displayMessage.classList.remove('win');
      displayMessage.classList.add('lose');
      break;
    }

    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
    case 'lizardlizard':
    case 'spockspock': {
      displayMessage.innerText = `It's a draw! You both chose ${userChoice} .`;
      displayMessage.classList.remove('win');
      displayMessage.classList.remove('lose');
      break;
    }
  }
}
