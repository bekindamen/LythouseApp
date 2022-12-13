export default function Footer() {
    return (
      <div 
        style={{
          backgroundColor: "rgb(61, 60, 59)",
          height: "auto",
          width: "auto",
         
        }}
      >
        <div className="footer">
          <text style={{ cursor:'pointer',marginLeft: "20vw", marginTop: "6vw" }}>About us</text>
          <text style={{ cursor:'pointer',marginLeft: "20vw", marginTop: "6vw" }}>Help</text>
          <text style={{ cursor:'pointer',marginLeft: "20vw", marginTop: "6vw" }}>
            Our Specialities
          </text>
        </div>
  
        <div className="footer" style={{ marginTop: "-2vw" }}>
          <text style={{  cursor:'pointer',marginLeft: "20vw" }}>Who we are</text>
          <text style={{cursor:'pointer', marginLeft: "17.5vw" }}>FAQs</text>
          <text style={{ cursor:'pointer',marginLeft: "19.8vw" }}>Customisation</text> 
        </div>
        <div className="footer" style={{ marginTop: "-2vw" }}>
          <text style={{ cursor:'pointer',marginLeft: "20vw" }}>Blog</text>
          <text style={{cursor:'pointer', marginLeft: "23.6vw" }}>Delivery</text>
          <text style={{ cursor:'pointer',marginLeft: "17.3vw" }}>Altering</text>
        </div>
        <div className="footer" style={{ marginTop: "-2vw" }}>
          <text style={{ cursor:'pointer',marginLeft: "20vw" }}>Terms & Condition</text>
          <text style={{cursor:'pointer', marginLeft: "11.5vw" }}>Return</text>
          <text style={{cursor:'pointer', marginLeft: "18.7vw" }}>Recyling</text>
        </div>
        <div className="footer" style={{ marginTop: "-2vw" }}>
          <text style={{cursor:'pointer', marginLeft: "20vw" }}>Privacy Policy</text>
          <text style={{cursor:'pointer', marginLeft: "15.8vw" }}>Discount</text>
        </div>
        <div className="footer" style={{ marginTop: "-2vw" }}>
          <text style={{ cursor:'pointer',marginLeft: "47.4vw" }}>Contact</text> 
        </div>
      </div>
    );
  }
  