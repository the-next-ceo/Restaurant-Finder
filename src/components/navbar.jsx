/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css'

function Navbar() {


    return (
        <div>
            <nav className="nav">
                <div className="container">

                    <div className="logo">
                        <a href="">Food Hub</a>

                    </div>

                    <div id="navBar" className="navbar">

                        <ul className="navlinks">
                            <li><a href="https://github.com/the-next-ceo">About</a></li>
                            
                            
                        </ul>

                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>

                </div>
            </nav>
            
        </div>
    )
}

export default Navbar;