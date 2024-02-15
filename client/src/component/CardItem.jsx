import React from "react";
import { Link } from "react-router-dom";
import art1 from "../img/art1.jpg";

function CardItem({imageURL}) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category="Art">
            <img className="cards__item__img" src={imageURL} alt="art2" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">
              The intersection of art and technology{" "}
            </h5>
            <p className="cards__item__text">
              {" "}
              From digital art to interactive installations, this piece explores
              how modern artists are using technology...{" "}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
