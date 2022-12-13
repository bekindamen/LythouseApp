import React, { useEffect, useCallback, useState } from "react";
import "./Testimonials.css";

import ill5 from '../res/ill5.png'
import ill6 from '../res/ill6.png'

 
const cardItems = [
  {
    id: 1,
    text: "Amazing!! professionalism and customer services at high level great appreciation. Many thanks",
   },
  {
    id: 2,
    text: "Amazing!! professionalism and customer services at high level great appreciation. Many thanks",
   },
  {
    id: 3,
    text: "Amazing!! professionalism and customer services at high level great appreciation. Many thanks",
   },
  {
    id: 4,
    text: "Amazing!! professionalism and customer services at high level great appreciation. Many thanks",
   },
  {
    id: 5,
    text: "Amazing!! professionalism and customer services at high level great appreciation. Many thanks",

   }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const CardCarousel = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
   
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 3000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className="container">
      <ul className="card-carousel">
        {cardItems.map((card, index) => (
          <li
            key={card.id}
            className={`card ${determineClasses(indexes, index)}`}
          >
             <h2 style={{color:'black', marginTop:'-1vw', marginRight:'20vw' }}>Li Jie</h2>
             <p style={{color:'black'}}>Amazing!! professionalism and customer services at high level great appreciation. Many thanks</p>
             <img style={{marginTop:'10vw', width:'30%', marginRight:'12vw'}} src={ill6} />
             <img src={ill5} ></img>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
