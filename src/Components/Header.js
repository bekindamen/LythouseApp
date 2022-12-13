import "../App.css";
import "./NewsAlert.css";
import MediaQuery from "react-responsive";
import ill from "../logo.png";


export default function Header (){
    return (
        <div>
            <MediaQuery query="(max-device-width: 440px)">
        <header style={{zIndex:'1',height:'50px', display:'block', position:'-webkit-sticky', position:'sticky', left:'0', top:'0' }} className="App-header">
          <div className="flex">
            <img
              className="  arrow"
              src={ill}
              width="9%"
              height="auto"
            ></img>
            <text className="headertext arrow"> LYTHOUSE </text>
          </div>
          <input   class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label style={{zIndex:'10',   }} for="menu-icon"></label>
  	<nav   class="nav"> 		
  		<ul   class="pt-5">
  			<li><a  style={{  marginLeft:'69vw', }}> </a></li>
  			<li><a  style={{fontSize:'10vw',marginTop:'-30vw',}} >Home</a></li><br/>
        <li><a   > </a></li>
  			<li><a  style={{fontSize:'10vw',marginRight:'69vw', marginTop:'-20vw'}}>Team</a></li>
        <li><a   > </a></li>
  			<li><a  style={{fontSize:'10vw',marginRight:'50vw', marginTop:'-5vw'}}>Product</a></li>
        <li><a   > </a></li>
  			<li><a  style={{fontSize:'10vw',marginRight:'58vw', marginTop:'-1vw'}}>Resources</a></li>
  			<li><a   > </a></li>
  			<li ><a  style={{fontSize:'10vw',marginRight:'53vw', marginTop:'-1vw'}}>Get in Touch</a></li>
  		</ul>
  	</nav>
        </header>
        </MediaQuery>
      <MediaQuery query="(min-device-width: 441px)">
        <header className="App-header">
          <div className="flex">
            <img
              className="App-header arrow"
              src={ill}
              width="10%"
              height="auto"
            ></img>
            <text className="headertext arrow"> LYTHOUSE </text>
          </div>
          <div>
            <a className="git">Get in Touch</a>
            <a className="res">Resources</a>
            <a className="pro">Product</a>
            <a className="team">Team</a>

            <a className="home">Home</a>
          </div>
        </header>
      </MediaQuery>
        </div>
    )
}