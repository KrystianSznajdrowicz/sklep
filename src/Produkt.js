import React from "react";
import './App.css';


const Produkt = (props) => (
    <div className='produkt'>
        <img src={props.zdjecie} alt="owoc"/>
          <h1>{props.owoc}</h1>
          <p>opis: {props.opis}</p> <br></br>
          <p>na stanie: {props.stan}</p>
        </div>
);

export default Produkt