import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const SLIDES = [
  {
    title: "Today's workout plan",
    text: "We're gonna do 3 fundamental exercises."
  },
  {
    title: "First, 5 long jump",
    text: "we will do this in 2 minutes"
  },
  {
    title: "then we will do 20 high jump",
    text: "we will do this in 5 minutes"
  },
  {
    title: "Then we will do 30 low jump",
    text: "we will do this in 2 minutes"
  },
  {
    title: "Now we will take rest",
    text: "Thats All For Today"
  }
];

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'));
registerServiceWorker();


