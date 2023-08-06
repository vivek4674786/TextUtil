import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'
import { useState } from 'react';

function App() {

  const [mode,setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      
    }
    else{
      setMode('dark');
    }
    console.log(mode);
  }

  return (
    <div className={`${mode === 'light'?'clr_bg_white_1':'clr_bg_g_1'}`}>
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Home mode={mode}/>
    </div>
  );
}

export default App;
