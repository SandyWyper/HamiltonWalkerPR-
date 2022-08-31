import React from 'react'
// import { Link } from 'gatsby'

import '../assets/scss/main.scss'
// import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
// import LogoSVG from './LogoSVG'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <div id="wrapper">
          {/* <Header onToggleMenu={this.handleToggleMenu} /> */}
          {/* <Link to="/">
            <LogoSVG classes={`logo-hw`} />
          </Link> */}
          {children}
          <Contact />
          <footer class="footer">
            <div>
              <p>
                &copy;Hamilton Walker Public Relations Limited{' '}
                {new Date().getFullYear()}
              </p>
              <p>
                Powered by
                <a
                  href="https://tinderboxwebsolutions.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  &nbsp;Tinderbox Web Solutions
                </a>
              </p>
            </div>
          </footer>
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

export default Layout
