import { useEffect } from 'react'
import './topbar.css'

export default function TopBar({topbar, b_r, p_x}) {
    useEffect(()=>{
        const root = document.documentElement;

        // Update the value of the --main-color variable
        root.style.setProperty('--main-color', topbar
        );
        root.style.setProperty('--border-radius', b_r);
        root.style.setProperty('--padding-x', p_x)
    });
    return (
        <div className="h-16 .w-full bg-neutral-300  shadow-md flex flex-row justify-around p-2 items-center px-24" id='topbar'>
            <div className="topbar-element text-3xl m-1" id='logo'>
                SkillSync
            </div>
            <input type='text' placeholder='Search for a course' className="bg-zinc-100 w-1/2 p-3 h-11 m-1 rounded-3xl border border-black " id='SearchBar'/>
            <button className="bg-white p-2 h-4/5 m-1 border border-black text-black" id='teach'>Teach on Skill Sync</button>
            <button className='bg-white p-2 h-4/5 m-1 border border-black' id='login'>Log in</button>
            <button className='bg-black p-2 h-4/5 m-1 text-white' id='signup'>Sign up</button>
            <span id='' className='border-black border h-4/5 w-10 flex justify-center items-center bg-white'>
            <button id='' className='material-symbols-outlined'>
            language
            </button></span>
        </div>
    )
}