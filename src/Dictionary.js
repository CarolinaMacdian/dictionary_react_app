/** @format */

import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <form onSubmit={search}>
        <input
          type='search'
          onChange={handleKeywordChange}
        />
      </form>
      <Result result={result} />
    </div>
  );
}
