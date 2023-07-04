import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')

  const [toggleText, setToggleText] = useState('Enable Dark Mode');

  const [textColor, setTextColor] = useState('dark')

  const [alert, setAlert] = useState("Welcome to my Textutiles App.....")
  setTimeout(() => {
    setAlert(null);
  },2300);

  const [result, setResult] = useState('success')

  const show = (message) => {

    setAlert(message)

    setTimeout(() => {
      setAlert(null);
    },2300);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      setToggleText('Disable Dark Mode')
      setTextColor('light');
      document.body.style.backgroundColor = 'rgb(2, 0, 20)';
      document.body.style.color = 'white';
      setAlert("Success, Dark Mode is Enabled");
      setResult('success');

      setTimeout(() => {
        setAlert(null);
      },2300);
    }

    else {
      setMode('light');
      setToggleText('Enable Dark Mode');
      setTextColor('dark');
      document.body.style.backgroundColor = 'rgb(216, 247, 247)';
      document.body.style.color = '#212529';
      setAlert("Success, Dark Mode is Disabled");
      setResult('warning');

      setTimeout(() => {
        setAlert(null);
      },2300);
    }
  }

  

  return (
    <>

     
      <Navbar title="Textutiles" abt="About" mode={mode} toggleMode={toggleMode} toggleText={toggleText} textColor={textColor} />

      <Alert alert={alert} show={show} result={result}/>

      <Textform heading="Enter the text here to analyze :" show={show} setResult={setResult}/>

      {/* <About/> */}


    </>
  );
}

export default App;
