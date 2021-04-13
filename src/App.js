import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PublicNav from './components/PublicNav';
import 'react-bootstrap'
import ChoiceCard from './components/ChoiceCard';
import { Container , Button } from 'react-bootstrap';

const shapes = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
const randomMove = () => {
  computerChoice = shapes[Math.floor(Math.random() * 3)];
  playerChoice = shapes[Math.floor(Math.random() * 3)];
  console.log("Computer: ", computerChoice);
  console.log("Player: ", playerChoice);
};

randomMove();
let computerResult;
let playerResult;
const calculateWinner = () => {
  if (computerChoice === playerChoice) {
    computerResult = 'tie';
    playerResult = 'tie';
  } else if (computerChoice === 'rock') {
    if (playerChoice === 'paper') {
      computerResult = 'loss';
      playerResult = 'win';
    } else {
      computerResult = 'win';
      playerResult = 'loss';
    }
  } else if (computerChoice === 'paper') {
    if (playerChoice === 'scissors') {
      computerResult = 'loss';
      playerResult = 'win';
    } else {
      computerResult = 'win';
      playerResult = 'loss';
    }
  } else {
    if (playerChoice === 'rock') {
      computerResult = 'loss';
      playerResult = 'win';
    } else {
      computerResult = 'win';
      playerResult = 'loss';
    }
  }
};

const play = () => {
  randomMove();
  calculateWinner();
};

play();
function App() {
  return (
    <div className="App">
      <PublicNav/>
      <Container>
      <ChoiceCard title="You" winner={playerResult} shape={playerChoice} />
      <ChoiceCard title="Computer" winner={computerResult} shape={computerChoice} />
      </Container>
      <Button onClick={play}>Random</Button>
    </div>
  );
}

export default App;
