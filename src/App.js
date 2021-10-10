// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );
function App() {

  const [mode,setMode]=useState("light");

  // const [modeText,setModeText]=useState("dark");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    // setModeText('light');
    document.body.style.backgroundColor='#042743';
    showAlert("DarkMode has been Enabled","success")
    document.title="Text-Utils DarkMode";
  }else{
    setMode('light');
    // setModeText('dark');
    document.body.style.backgroundColor='white';
    showAlert("LightMode has been Enabled","success");
    document.title="Text-Utils DarkMode";

    // setInterval(() => {
    //   document.title="Text-Utils is Amazing Mode";
    // }, 2000);

    // setInterval(() => {
    //   document.title="Install Text-Utils now";
    // }, 1500);
  }
 
}


  return (
    <>
      {/* <Navbar title="textUtils" aboutText="about textUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* /Users-->Component 1
        /Users/home-->Component 2 */}
        {/* <Switch>
          <Route exact path="/about">
              <About/>
          </Route>
          <Route exact path="/"> */}
              <TextForm heading = "Enter the text to analyse" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch>   */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
