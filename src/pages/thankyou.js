import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// import pic11 from '../assets/images/pic11.jpg'

const Thankyou = props => (
  <Layout>
    <Helmet>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Thank you for your enquiry</h1>
          </header>
          {/* <span className="image main">
            <img src={pic11} alt="" />
          </span> */}
          <p>Your form was submitted. Someone will contact you soon.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Thankyou
