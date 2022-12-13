import { Component } from "react";
import "../App.css";
import "./Card.css";
import card1 from "../res/cars1.png";
import card2 from "../res/card2.png";
import card3 from "../res/card3.png";
import card4 from "../res/card4.png";
import newsp from "../res/newsp.png";

export default class SecondComp extends Component {
  render() {
    return (
      <div className="container">
        <div className="secondcomp">
          <text>Lythouse Riskmatics for Supply Chain</text>
          <br />
          <p className="justs">
            Lythouse Riskmatic is an AI/ML based intelligent risk tracker which
            instantly
          </p>

          <p>alerts companies based on their location of interest</p>
        </div>
        <div className="cardabs" >
          <img className="paddingtopP" src={card1} />
          <img className="paddingtopR" src={card4} />
          <img className="paddingtopA" src={card3} />
          <img className="paddingtopT" src={card2} />
        </div>

        <div className="alignleft news">Real time news alert</div>
        
      </div>
    );
  }
}
