import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Creating connections that drive change.</h1>
      </header>
      <div className="content">
        <div>
          <p>
            We work with our clients to build and protect positive reputations.
            <br />
            <br className="hidden-large" />
            Using strategic, integrated public relations and marketing
            communications, we create connections with the people who matter to
            you.
          </p>
          <p className="margin-bottom-4point5" style={{ fontSize: '1.185rem' }}>
            New website launching soon. In the meantime, let’s talk!
          </p>
          <ul
            className="actions"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <li>
              <a href="#contact" className="button next scrolly">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Banner
