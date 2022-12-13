import "./App.css";
import SlickCarousel from "./Components/SlickCarousel";
import React, { Component } from "react";
import ill from "./logo.png";
import ill2 from "./res/ill2.png";
import FirstComp from "./Components/FirstComp";
import SecondComp from "./Components/SecondComp";
import "./Components/Card.css";
import newsp from "./res/newsp.png";
import Card from "./Components/Card";
import MyCarousel from "./Components/CardCarousel/Cards";
import Sub from "./Components/Sub";
import Footer from "./Components/Footer";
import CardCarousel from "./Components/Testimonials";
import MediaQuery from "react-responsive";
import Header from "./Components/Header";
  
export default class App extends Component {
  render() {
    return (
      <div>
      <div>
         <Header/>

      </div>
      <div style={{overflowX:'hidden'}}>
         

        <div className="App">
          <div
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 80%)",
              marginLeft: "58vw",
              width: "50vw",
              height: "50vw",
              marginBottom: "-10vw",
            }}
            
          ></div>
          <div
          className="mlb2"
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 70%)",
              
              height: "50vw",
              marginTop:'-30vw',
             
            }}
             
          ></div>
  
          <FirstComp   />
          <div
          className="mlb1"
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 50%)",
            
              height: "90vw",
              width: "150vw",
             
            }}
            
          ></div>

          <SecondComp />
          <div
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, .3) 0%, rgba(255, 103, 96, 0) 60%)",
              
              height: "90vw",
              width: "150vw",
              marginLeft: "-40vw",
          marginTop:'85vw',
              marginBottom: "-170vw",
            }}
          
          ></div>

          <div className="container3">
            <img className="floatleft" src={newsp} width="8%" />
            <text className="floatleft"> some text here </text>{" "}
            <text className="link floatleft">Read more</text>
          </div>
          <div
           
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 50%)",
              
              height: "90vw",
              width: "150vw",
              marginTop:'-30vw',
              marginLeft: "-45vw",
              marginBottom: "-60vw",
            }}
          
          ></div>
          <SlickCarousel />
          <Card />
          <div style={{ marginBottom: "5vw" }} className="grad1">
            <img src={ill2} className="ill2" width="15%" />
            <text className="fade-in-text  boldtext">
              Experience the logistics of the future
            </text>
            <br /> <button className="cbutton arrow"> BOOK DEMO NOW </button>
          </div>

          <div style={{ justifyContent: "center" }}>
            <text
              style={{
                fontSize: "4vw",
                color: "antiquewhite",
                textShadow: "0px 0px 4px rgb(255, 255, 255)",
              }}
            >
              Testimonials
            </text>
          </div>
          <div
           
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 70%)",
                
              height: "90vw",
              width: "150vw",
              marginTop:'-30vw',
              marginLeft: "-110vw",
              marginBottom: "-60vw",
            }}
          
          ></div>
          <CardCarousel />

          <div
            style={{
              background:
                "radial-gradient(56.94% 56.94% at 50% 50%, rgba(255, 103, 96, 0.7) 0%, rgba(255, 103, 96, 0) 70%)",
              
              height: "90vw",
              width: "150vw",
              marginTop:'-30vw',
              marginLeft: "40vw",
              marginBottom: "-60vw",
            }}
          
          ></div>
          <Sub />
          <Footer />
        </div>
      </div>
      </div>
    );
  }
}
