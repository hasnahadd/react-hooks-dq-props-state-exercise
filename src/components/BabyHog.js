import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import offspring from "../data"

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
 const [weight, setweight]=useState(20);
  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
if (e.target.name === "+") {
  setweight(weight +1);
}else{
  setweight(weight -1);
}

  }
let item
offspring.forEach((index)=>{
if(props.id == index.id){
item = index
}
})
const object = {blue:BlueBaby , sun:SunBaby , glowing:GlowingBaby}
  return (
    <li className="hogbabies">
      <h1>{item.name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby:{item.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>
      <button name="+" onClick={handleChangeWeight} >Increase Weight</button>
      <button name="-" onClick={handleChangeWeight} >Decrease Weight</button>
      <div className="hb-wrap">
        <img
          src={object[props.eyeColor]}
          style={{ height: weight*10 }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
