import App_Logo from '../utils/constants'
import { useState } from 'react';


const Header = () => {
    const [logBtn, setLogBtn] = useState('Login');
    
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={App_Logo} />
            </div>
            <div className='nav-items'>
                <ul className='unorder-list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Resturents</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='loginn-container'>
            <button className='log-btn' onClick={()=> {
                logBtn === 'Login' ? setLogBtn('Logout') : setLogBtn('Login')
            }}>{logBtn}</button>
            </div>
        </div>
    )
}

export default Header;