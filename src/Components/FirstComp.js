import { Component } from "react";
import "../App.css";
import phone from "../res/newphone.png";
import linkedin from "../res/linked in.png";
import dribbble from "../res/dribbble.png";
import medium from "../res/medium.png";
import behance from "../res/behance.png";
import MediaQuery from "react-responsive";

export default class FirstComp extends Component {
  render() {
    return (
      <div>
        <div className="  container">
           <MediaQuery query="(max-device-width:520px)">
          <div className="firstcomp  ">
            <text>Manage your </text>
            <text className="just">supply chain risks better</text>
            <br />
            <p style={{marginTop:'-20vw'}} className="just2">
              Get predictive risk alerts to plan your movements better
            </p> 
            <p className="just3">& ensure you remain ahead of competition</p>
            <button style={{ width:'15vw', height:'5vw', borderRadius:"10px", marginLeft:"5vw", textAlign:'center', alignItems:'center', justifyContent:"center", fontSize:"1.5vw", display:'flex', position:'relative', marginTop:'2vw'}} className='c1but  ' >Try it for FREE</button>
            <img  width="12%" style={{marginLeft:'65vw', marginTop:'-55vw', marginBottom:"50vw", position:"relative", display:'flex'}} src={phone} />
          </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width:521px)">
          <div className="firstcomp  ">
            <text>Manage your </text>
            <text className="just">supply chain risks better</text>
            <br />
            <p className="just2">
              Get predictive risk alerts to plan your movements better
            </p>
            <p className="just3">& ensure you remain ahead of competition</p>
            <button style={{width:'15vw', height:"3vw", textAlign:'center', alignItems:'center', justifyContent:"center", fontSize:"1.5vw", display:'flex', position:'relative', marginTop:'2vw'}}  className="c1but arrow">Try it for FREE</button>
          </div>
          <img  width="19%" src={phone} />
          </MediaQuery>
          
        </div>
        <div   className="container2" >
          <img className="dribbble arrow margind" src={dribbble} width="10%" height="auto" />
          <img className="linkedin arrow" src={linkedin} width="10%" height="auto" />
          <img className="dribbble arrow marginm" src={medium} width="10%" height="auto" />
          <img className="dribbble arrow marginb" src={behance} width="10%" height="auto" />
        </div>
      </div>
    );
  }
}
