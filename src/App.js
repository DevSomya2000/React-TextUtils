// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
const [mode, setMode] = useState('light')
const [alert, setAlert] = useState('light')

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type
  })
}

const toggleMode = () => {
  if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = '#042743'
    setAlert()
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    setAlert()
  }
}

  return (
    <>
      <Navbar title='TetxtUtils' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={`This is ${alert} mode`} />
      <div className='container'>
        <TextForm heading='Enter the text to analyze' mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
