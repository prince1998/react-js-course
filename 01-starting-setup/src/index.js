// This file will always be first executed whenever the page is loaded
import ReactDOM from 'react-dom'; //react-dom is a 3rd party library but essential

import './index.css'; // You cannot import CSS into vanilla JS like this; with react you can!
import App from './App'; //you omit extension for your own js file and third party library

ReactDOM.render(<App />, document.getElementById('root')); //Load App component inside root element
//App is a component being rendered and put in root element
