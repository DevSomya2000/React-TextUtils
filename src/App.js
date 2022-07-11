// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';

function App() {
const [mode, setMode] = useState('light')
const [alert, setAlert] = useState(null)

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500)
}

const toggleMode = () => {
  if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    document.title = "TextUtils - Dark Mode"
    showAlert('Dark mode has been enabled', 'success')
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing Now"
    // }, 2000)
    // setInterval(() => {
    //   document.title = "Install TextUtils Now"
    // }, 1500)
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    document.title = "TextUtils - Light Mode"
    showAlert('Light mode has been enabled', 'success')
  }
}

  return (
    <>
      <Router>
        <Navbar title='TetxtUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
