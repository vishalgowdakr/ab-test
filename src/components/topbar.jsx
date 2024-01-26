import { useEffect } from 'react'
import './topbar.css'
import confetti from 'canvas-confetti';
import { getCookie, setCookie } from '../utils/cookie';
import { sendPostRequest } from '../utils/sendAnalytics';

export default function TopBar({ topbar, b_r, p_x, theme }) {
  const signupClick = async () => {
    const isSignedUp = await getCookie('signedUp');
    if (isSignedUp !== true) {
      await confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setCookie('signedUp', 'true', 365);
      const analytics = JSON.stringify({
        'theme': theme,
      });
      const response = await sendPostRequest(analytics);
      console.log(response);

    } else {
      alert('You have already signed up!');
    }
  }
  useEffect(() => {
    const root = document.documentElement;

    // Update the value of the --main-color variable
    root.style.setProperty('--main-color', topbar
    );
    root.style.setProperty('--border-radius', b_r);
    root.style.setProperty('--padding-x', p_x)
  });
  return (
    <div className="h-16 .w-full bg-neutral-300  shadow-md flex flex-row justify-between py-2 items-center px-32" id='topbar'>
      <div className="topbar-element text-3xl max-sm:text-sm m-1 mx-7" id='logo'>
        SkillSync
      </div>
      <input type='text' placeholder='Search for a course' className="bg-zinc-100 w-1/2 max-sm:w-1/6 p-3 h-11  rounded-3xl border border-black mx-7" id='SearchBar' />
      <button className="bg-white p-2 h-4/5  text-sm border border-black text-black mx-7" id='teach'>Teach on Skill Sync</button>
      <button className='bg-white p-2 h-4/5  border border-black mx-7' id='login'>Log in</button>
      <button className='bg-black p-2 h-4/5  text-white mx-7' id='signup' onClick={signupClick}>Sign up</button>
      <span id='' className='border-black border h-4/5 w-10 flex justify-center items-center bg-white mx-7'>
        <button id='' className='material-symbols-outlined'>
          language
        </button></span>
    </div>
  )
}
