import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../styles/cards.css";

function Cards({newImageURL}) {
  const singlePost = () => {
    const [single, setSingle] = useState(false);
    console.log("singlePost");
  };

  
  
  const [imageUrls, setImageUrls] = useState([
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707964956/artoholic/h6jrzlhdbpdm7yd1nwj4.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707965007/artoholic/jaapxus2qcmdnyce5mnj.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986319/artoholic/n14q5vbwyuww6d1vfhc9.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986364/artoholic/hflhwn63j14rha8fvctf.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986445/artoholic/uaphc54gtd1ktykpt6yq.webp",
    "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707986476/artoholic/jae76oatr7q5ydg2cp6t.webp"
  ]);

  useEffect(() => {
    console.log(imageUrls);
    console.log(newImageURL);
    setImageUrls((currentImageUrls) => {
      // Create a copy of the current array, modify it, then return the new array
      const updatedImageUrls = [...currentImageUrls];
      if(newImageURL) {
        updatedImageUrls.push(newImageURL); // Add new image URL to the end
        updatedImageUrls.shift(); // Remove the first image URL
      }
      return updatedImageUrls;
    });
    console.log(imageUrls);
  }, [newImageURL]);

  return (
    <div className="cards">
      <h1>Recent post</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem imageURL={imageUrls[5]}/>
            <CardItem imageURL={imageUrls[4]}/>
            <CardItem imageURL={imageUrls[3]}/>
          </ul>
          <ul className="cards__items">
            <CardItem imageURL={imageUrls[2]}/>
            <CardItem imageURL={imageUrls[1]}/>
            <CardItem imageURL={imageUrls[0]}/>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
