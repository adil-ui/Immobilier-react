import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery'



$(document).ready(() => {
    $(window).scroll(() => {
        if($(window).scrollTop() !== 0 ) {
            $('nav').removeClass("bg-transparent").addClass('bg-light')
            $('nav').css("box-shadow", "rgba(99, 99, 99, 0.400) 0 0 8rem")
        }
        else{
          $('nav').removeClass('bg-light').addClass('bg-transparent');
          $('nav').css("box-shadow", 'none')

        }

      
        
    })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
