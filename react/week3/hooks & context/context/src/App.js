import React,{useState} from 'react';
import './App.css';
import {ThemeContext} from "./compenents/ThemeContext"
import MyPage from "./compenents/MyPage"

console.log(ThemeContext);

export function App(props) {

  const onChangeTheme = (bahasa)=>{
    setTheme({
      bahasa:bahasa=="indonesia"?"inggris":"indonesia",
      tema:bahasa=="indonesia"?"dark":"light",
      onChangeTheme:onChangeTheme
    });
  }

  const [theme,setTheme] = useState({
    bahasa:"indonesia",
    tema:"light",
    onChangeTheme:onChangeTheme
  })

  return(
    <ThemeContext.Provider value={theme}>
      <MyPage />
    </ThemeContext.Provider>
  )
}

export default App;