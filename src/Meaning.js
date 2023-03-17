/** @format */

import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className='Meaning'>
      <span>{props.meaning.partOfSpeech}</span>
      <p> {props.meaning.definition}</p>
      <div className='Example'>{props.meaning.example}</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
