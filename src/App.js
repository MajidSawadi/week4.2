import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import PublicNav from "./components/PublicNav";
let streak = 0;
function App() {
	const shapes = ["rock", "paper", "scissors"];
	const [playerName, setPlayerName] = useState("You");
	const [playerChoice, setPlayerChoice] = useState("");
	const [playerResult, setPlayerResult] = useState("tie");
	const [playerScore, setPlayerScore] = useState(0);
	const [computerChoice, setComputerChoice] = useState("");
	const [computerResult, setComputerResult] = useState("tie");
	const [computerScore, setComputerScore] = useState(0);
  const[gameHistory , setGameHistory]=useState([{winner:"player", playerChoice:"peper" ,computerChoice:"rock"}]);

	const randomMove = (move) => {
		const newComputerChoice = shapes[Math.floor(Math.random() * 3)];

		setPlayerChoice(move);
		setComputerChoice(newComputerChoice);
		calculateWinner(newComputerChoice, move);
	};

	const calculateWinner = (computerChoice, playerChoice) => {
		if (computerChoice === playerChoice) {
			setComputerResult("tie");
			setPlayerResult("tie");
      setGameHistory([...gameHistory,
        {winner:"tie",
      playerChoice,
    computerChoice }
      ]);
			streak = 0;
		} else if (computerChoice === "rock") {
			if (playerChoice === "paper") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");
				setPlayerScore(playerScore + 1);
        setGameHistory([...gameHistory,
          {winner:"player",
        playerChoice,
      computerChoice }
        ]);
      
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}
				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
        setGameHistory([...gameHistory,
          {winner:"computer",
        playerChoice,
      computerChoice }
        ]);
				streak--;
			}
		} else if (computerChoice === "paper") {
			if (playerChoice === "scissors") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");
				setPlayerScore(playerScore + 1);
        setGameHistory([...gameHistory,
          {winner:"player",
        playerChoice,
      computerChoice }
        ]);
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}

				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
        setGameHistory([...gameHistory,
          {winner:"computer",
        playerChoice,
      computerChoice }
        ]);
			}
		} else {
			if (playerChoice === "rock") {
				if (streak >= 0) {
					streak++;
				} else {
					streak = 1;
				}
				if (streak === 3) {
					setPlayerResult("flawless victory");
				} else {
					setPlayerResult("win");
				}
				setComputerResult("loss");

				setPlayerScore(playerScore + 1);
			} else {
				if (streak <= 0) {
					streak--;
				} else {
					streak = -1;
				}
				if (streak === -3) {
					setComputerResult("flawless victory");
				} else {
					setComputerResult("win");
				}
				setComputerScore(computerScore + 1);
				setPlayerResult("loss");
        setGameHistory([...gameHistory,
          {winner:"computer",
        playerChoice,
      computerChoice }
        ]);
			}
		}
	};

	const restart = () => {
		setPlayerChoice("");
		setPlayerResult("tie");
		setPlayerScore(0);
		setComputerChoice("");
		setComputerChoice("");
		setComputerResult("tie");
		setComputerScore(0);
    setGameHistory([
      {winner:"tie",
    playerChoice,
  computerChoice }
    ]);
		streak = 0;
	};

	const handleChange = (e) => {
		if (e.target.value) {
			setPlayerName(e.target.value);
		} else {
			setPlayerName("You");
		}
	};
	return (
		<div className="App text-center">
			<PublicNav />
			<Container>
				Name:
				<input className="m-2" onChange={(e) => handleChange(e)}></input>
				<div className="d-flex justify-content-center flex-wrap">
					<ChoiceCard title={playerName} result={playerResult} shape={playerChoice} score={playerScore} />
					<ChoiceCard title="Computer" result={computerResult} shape={computerChoice} score={computerScore} />
				</div>
				<ButtonGroup>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("rock")}>
						Play 👊
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("paper")}>
						Play 🤚
					</Button>
					<Button variant="outline-dark" className="mx-1" onClick={() => randomMove("scissors")}>
						Play ✌
					</Button>
					<Button variant="dark" onClick={restart}>
						RESTART
					</Button>
				</ButtonGroup>
        <ul>
          
           {gameHistory.map((g, i)=>{
           
             return (
             <div>
             Game Number: {i+1}, winner:{g.winner}, playerChoice:{g.playerChoice}, computerChoice:{g.computerChoice}
             </div>

           );})};
        </ul>
			</Container>
		</div>
	);
}

export default App;