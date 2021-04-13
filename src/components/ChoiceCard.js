import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scisser.png";

const ChoiceCard =(props)=>{
    return(
        <div
      className={`choice-card ${
        props.winner === "win"
          ? "border-success"
            ? props.winner === "loss"
            : "border-danger"
          : "border-dark"
      }`}
    >
      <h2 className="text-center">{props.title}</h2>
      <img
        src={
          props.shape === "rock"
            ? rock
            : props.shape === "paper"
            ? paper
            : scissors
        }
        alt={props.shape}
      />
    </div>
    );
};

export default ChoiceCard;