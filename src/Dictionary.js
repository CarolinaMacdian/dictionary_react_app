/** @format */

import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }

  function handleDictionaryResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "466o652f33a4a9b0t59607ec49888d3f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let apiPhotoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(apiPhotoUrl).then(handleDictionaryResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type='search'
            onChange={handleKeywordChange}
          />
        </form>
        <div className='hint'>
          <strong>Suggested words: </strong>sunset, wine, yoga, plant...
        </div>
      </section>
      <Result result={result} />
      <Photos photos={photos} />
    </div>
  );
}
