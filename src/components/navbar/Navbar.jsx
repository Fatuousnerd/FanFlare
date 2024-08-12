import './navbar.scss';
import ThemeToggle from '../../utils/ThemeTogggle.jsx';

const Navbar = () => {
  return (
    <>
        <div  className='navbar'>
            <div className="logo">
              <a href="/">
                <img src="./Logo.png" alt="" />
              </a>
            </div>

            <div className="right">
              <div className="toggle">
                <ThemeToggle />
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar