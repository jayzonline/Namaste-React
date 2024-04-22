import  App_Logo  from '../utils/constants'


const Header = () => {
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
        </div>
    )
}

export default Header;