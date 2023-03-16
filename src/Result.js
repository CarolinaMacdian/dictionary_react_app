/** @format */

import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className='Result'>
        <p>
          <strong>{props.result.word} | </strong>
          {props.result.phonetic}
        </p>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
