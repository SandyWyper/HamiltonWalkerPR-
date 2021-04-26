import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import WhiteLogoSVG from './Frame.png'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" style={{ width: '100%' }}>
      {/* <WhiteLogoSVG classes={`logo-hw`} /> */}
      <img src={WhiteLogoSVG} alt="Hamilton Walker PR" className="logo-hw" />
    </Link>
    {/* <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav> */}
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
