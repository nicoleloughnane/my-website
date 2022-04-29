import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import {createRoot} from 'react-dom/client';



//ReactDOM.render(<App />, document.querySelector("#root"));
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App tab="home" />);
