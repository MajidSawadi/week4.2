import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scisser.png";

const ChoiceCard = (props) => {
	return (
		<div className={`choice-card ${props.result === 'win' ? 'border-success' : props.result === 'tie' ? 'border-dark' : 'border-danger'}`}>
			<h2>{props.title}</h2>
			<img src={props.shape === 'rock' ? rock : props.shape === 'paper' ? paper : scissors} alt={props.shape} />
			<h3>{props.result === 'win' ? 'WIN' : props.result === 'tie' ? 'TIE' : 'LOSS'}</h3>
		</div>
	);
};

export default ChoiceCard;