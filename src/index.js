import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Bishop } from './asvs';
import { Runner } from './runner';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Bishop/> */}
// <Runner/>


//   </React.StrictMode>


<>
<App />
<Runner/>

</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
