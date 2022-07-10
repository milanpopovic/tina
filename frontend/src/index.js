import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* function getData(){
  fetch('http://localhost:5000/artwork/record', {mode: 'cors'})
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );</Suspense>;
          root.render(
            <React.StrictMode>
              <App art={actualData} />
            </React.StrictMode>
          );
        })
        .catch((err) => {
          console.log(err.message);
  });r
} 
getData(); */
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = React.lazy(() => import('./App'));
root.render(
  <React.StrictMode>
    <Suspense >
    <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
