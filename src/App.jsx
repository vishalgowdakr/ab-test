import './App.css';
import TopBar from './components/topbar';
import banner1 from './assets/document.jpeg'
import banner2 from './assets/Designer (2).png'
import banner3 from './assets/Designer (3).png'
import Companies from './components/companies';
import { useState, useEffect} from 'react';
import { getCookie, setCookie } from './cookie';


function App() {

  const neutral = {
    banner:  banner1,
    background: '#F4F4F4',
    topbar: 'rgb(212, 212, 212)',
    b_r: '0px',
    p_x: '8px'
    
  }
  const dark = {
    banner:  banner2,
    background: '#1F1F1F',
    topbar: 'rgb(151,116,48)',
    b_r: '20px',
    p_x: '10px',
  }
  const light = {
    banner:  banner3,
    background: '#FFFFFF',
    topbar: 'rgb(94,28,196)',
    b_r: '20px',
    p_x: '10px'
  }
  const [theme, setTheme] = useState(neutral);
  // const [newUser, setNewUser] = useState(false);
  var newUser = false;

  useEffect(()=>{
    const storedTheme = getCookie('colourScheme');
    switch(storedTheme){
      case 'neutral': setTheme(neutral);
      break;
      case 'dark': setTheme(dark);
      break;
      case 'light': setTheme(light)
      break;
      default: newUser = true;
      break;
    }
  },[]);

  useEffect(()=>{
  if(newUser === true){
  const randomNumber = Math.floor(Math.random()*3)
  switch(randomNumber){
    case 0: setTheme(neutral);
            setCookie('colourScheme', 'neutral', 365)
    break;
    case 1: setTheme(dark);
            setCookie('colourScheme', 'dark', 365)
    break;
    case 2: setTheme(light);
            setCookie('colourScheme', 'light', 365)
    break;
    default: setTheme(neutral);
            setCookie('colourScheme', 'neutral', 365)
  }
}

},[newUser]);

  return (
  <div className='flex-1 flex-col justify-items-center max-h-full'>
    <TopBar topbar={theme.topbar} b_r={theme.b_r} p_x={theme.p_x}/>
    <div className='flex flex-row  items-center my-10'>
    <img src={theme.banner} alt='banner' className='my-10'/>
    <Companies />
    </div>
  </div>  );
}

export default App
