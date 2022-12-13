import "./Card.css";
import ill3 from "../res/ill3.png";
import { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="d1 container4 marginbottomleft">
          <text
            className="t"
          >
            How we helped a logistics company plan movements during festivals in
            India
          </text>
          <button
            className="but"
          >
            Explore
          </button>
          <img
            className="i"
            src={ill3}
            
          />
        </div>
        <div
           
          className="d2 container4 marginbottomleft"
        >
          <text
           className="t"
          >
            How we helped a logistics company plan movements during festivals in
            India
          </text>
          <button
            className="but"
          >
            Explore
          </button>

          <img
            className="i"
            src={ill3}
          />
        </div>
        <div className="d3 container4 marginbottomleft">
          <text
           className="t"
          >
            How we helped a logistics company plan movements during festivals in
            India
          </text>
          <button
           className="but"
          >
            Explore
          </button>
          <img
            className="i"
            src={ill3}
           
          />
        </div>
        <div
          style={{
             
            marginBottom: "15vw",
          }}
          className="d4 container4 marginbottomleft"
        >
          <text
           className="t"
          >
            How we helped a logistics company plan movements during festivals in
            India
          </text>
          <button className="but"
          >
            Explore
          </button>

          <img
            className="i"
            src={ill3}
             
          />
        </div>
      </div>
    );
  }
}
