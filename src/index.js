import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      {/* asagidaki APP componenti Providerin icine girir (context.js-deki child olur)  */}
      <App />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// React baslayanda "index.html" isleyir orada "id=root" olacaqdir ve bu id-ni 7-ci setirde burada tuturuq ve icine App componenti render edirik (renderin içi jsx-dir)
// Daha sonra App componenti icindeki child componentlerin ise salir (App-in ozunde olan deyerleri(state-leri) props gonderir child componentlere)
// Meqsed hisslere bolub isletmkedir