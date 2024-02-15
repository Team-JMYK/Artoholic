import React, { useState } from "react";
import CardItem from "./CardItem";
import "../styles/cards.css";

function Cards() {
  const singlePost = () => {
    const [single, setSingle] = useState(false);
    console.log("singlePost");
  };
  
  const imageUrl = [
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707964956/artoholic/h6jrzlhdbpdm7yd1nwj4.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707965007/artoholic/jaapxus2qcmdnyce5mnj.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986319/artoholic/n14q5vbwyuww6d1vfhc9.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986364/artoholic/hflhwn63j14rha8fvctf.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986445/artoholic/uaphc54gtd1ktykpt6yq.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986476/artoholic/jae76oatr7q5ydg2cp6t.webp"
  ];

  return (
    <div className="cards">
      <h1>Recent post</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem imageURL={imageUrl[0]}/>
            <CardItem imageURL={imageUrl[1]}/>
            <CardItem imageURL={imageUrl[2]}/>
          </ul>
          <ul className="cards__items">
            <CardItem imageURL={imageUrl[3]}/>
            <CardItem imageURL={imageUrl[4]}/>
            <CardItem imageURL={imageUrl[5]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
