import Main from "./components/main"
import Navbar from "./components/navbar"
import React from "react"
import './style.css'

function App() {
  let [darkMode, setDarkMode] = React.useState(false);
  
  function handleChange (){
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={handleChange}/>
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;