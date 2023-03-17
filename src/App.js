/** @format */

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Dictionary defaultKeyword='sunrise' />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href='https://linkedin.com/in/carolinamacdian'
              className='link'
              target='_blank'
              rel='noreferrer'>
              Carolina Macdian
            </a>
            , is{" "}
            <a
              href='https://github.com/CarolinaMacdian/dictionary_react_app'
              className='link'
              target='_blank'
              rel='noreferrer'>
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href='https://sprightly-starlight-cf8f53.netlify.app/'
              className='link'
              target='_blank'
              rel='noreferrer'>
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
