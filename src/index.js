import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

// Styles
import './index.css'

function App() {
  return (
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
  )
}


//React ver 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
