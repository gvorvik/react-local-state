import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

//takes in a component and the id that it should target in the html
ReactDOM.render(<App />, document.getElementById('root'));

//best practice to have one parent component (in this case App) and have other components within that