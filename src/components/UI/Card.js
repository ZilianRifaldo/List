import React from "react";
import clases from "./Card.module.css";

const Card = (props) => {
  //<div>{props.children}</div> kenapa begini karna {props.children} merupakan javacript ekspresi yang berfungi untuk memanggil kontent yang diberikan antara tag pembuka dan taq penutup dari card component
  // className={`${clases.card} ${props.className}`} untukk aplikasikan css dari Card dan css yang ada di AddUser.js menggunakan props className
  return (
    <div className={`${clases.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
