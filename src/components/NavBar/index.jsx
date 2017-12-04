import React from 'react';
import Giphy_Logo from '../images/Giphy_Logo.png'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <img src="https://giphy.com/static/img/labs.gif" 
                    alt="logo" className="logoHeading"/>
            </div>
        )
    }
}

export default NavBar;