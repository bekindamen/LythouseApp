import ill13 from '../res/ill13.png'
import './Card.css'

export default function () {
  return (
    <div style={{marginBottom:'10vw'}}>
      <text
        style={{
          color: "antiquewhite",
          fontSize: "4vw",
          fontWeight: "500",
          marginBottom: "5vw",
          display: "flex",
          position: "relative",
          marginLeft: "25vw",
        }}
      >
        Subscribe to Our Newsletter
      </text>
      <div
        style={{
          backgroundColor: "black",
          borderRadius: "25px",
          height: "30vw",
          width: "80vw",
          borderColor: "red",
          boxShadow: "0 0 10px red",
          marginLeft: "10vw",
          color:'antiquewhite'
        }}
      >
        <img src={ill13} style={{borderRadius:'10px', float:'left', alignItems:'center', width:'43%', marginLeft:'1vw'}} />
        <text style={{  alignItems:'center', fontSize:'2.5vw', display:'relative',  float:'right', width:'100%',marginTop:'-22vw', marginRight:'-17vw' }}>Subscribe to our newsletter and</text><br />
        <text style={{  alignItems:'center', fontSize:'2.5vw', width:'100%', float:'right', marginTop:'-17vw', marginRight: '-17vw' }}>never miss our latest news</text>
        <input style={{backgroundColor: 'antiquewhite',
    color: '#ff6760',
    height: '5vw',
    fontSize:'1.5vw',
    marginRight:'14vw',
    font: 'Arial',
  marginTop:'-10vw',
  alignItems:'center',
  display:'flex',
  float:'right',
    width: '25vw',
    boxSizing: 'border-box',
    boxShadow: '0 0px 8px rgba(228, 141, 220, 0.6)',
    borderRadius: '3px'}} className='input1' placeholder='Enter your email address' />  
        <button style={{ justifyContent: 'center',
  width: '15vw',
  height: '5vw',
  cursor: 'pointer',
    marginRight:'7vw',
    marginTop:'-10vw',
     
  font: 'Arial',
  float:'right',
  display:'flex',
   alignItems:'center',
   
    fontWeight:'700',
   border:'0px',
  color:'rgba(255, 255, 255, 255)',
  fontSize:'1.8vw',
  backgroundImage: 'linear-gradient( to right  , #5f211e 8.21%, #ff6760 143.5% )',
  borderRadius: '2.5vw'}} >Subscribe</button>
      </div>
    </div>
  );
}
