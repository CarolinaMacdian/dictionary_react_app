/** @format */

import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className='Meaning'>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <p>
        <span>
          <strong>Type: </strong>
          {props.meaning.partOfSpeech}
        </span>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
