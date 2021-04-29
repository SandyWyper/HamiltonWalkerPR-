import React, { Component } from 'react'
import { navigate } from 'gatsby'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!emailIsValid(this.state.email)) {
      alert('invalid email, please check for typing mistakes.')
      return
    }
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .then(() => {
        if (this.props.menuToggle !== undefined) {
          this.props.menuToggle()
        }
        return
      })
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form
              onSubmit={this.handleSubmit}
              method="post"
              name="contact-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thankyou/"
            >
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special m-b-2point5"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" className="m-b-2point5" />
                </li>
              </ul>
            </form>
            <p style={{ fontSize: '0.875rem' }}>
              *By submitting your email address, you are permitting us to
              contact you by email in response to your enquiry. We will treat
              your personal information with respect in accordance with our
              privacy policy.
            </p>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="mailto:hello@hamiltonwalkerpr.com">
                  hello@hamiltonwalkerpr.com
                </a>
              </div>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Phone</h3>
                <span>+44 (0) 7837 095487</span>
              </div>
            </section>
            {/* <section></section> */}
            {/* <section>
                    <div className="contact-method">
                    <span className="icon alt fa-home"></span>
                    <h3>Address</h3>
                    <span>1234 Somewhere Road #5432<br />
                    Nashville, TN 00000<br />
                    United States of America</span>
                    </div>
                  </section> */}
          </section>
        </div>
      </section>
    )
  }
}

export default Contact
