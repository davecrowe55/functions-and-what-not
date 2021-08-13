import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// count the value and count through the array .filter approach
var arr = [0,2,3,4,4,2,1,1,3,2,123,7,1,2,4,1,1,4,4,1,0];

function getOccurrences(array, value) {
  return array.filter((v) => (v === value)).length;
}

console.log(getOccurrences(arr, 1));  // 6
console.log(getOccurrences(arr, 2));  //4
console.log(getOccurrences(arr, 3));  //2
console.log(getOccurrences(arr, 4));  //5
console.log(getOccurrences(arr, 123)); //1

//filter and .length
function getOccur(array, value) {
  return array.filter((v) => (v === value)).length;
}
console.log(getOccur(arr, 1));//6

// using .reduce
var a = [0,2,3,4,4,2,1,1,3,2,123,7,1,2,4,1,1,4,4,1,0];

var map = a.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});
console.log(map);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
