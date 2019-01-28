import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Generic</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <iframe src="https://docs.google.com/a/lasdk8.org/document/d/e/2PACX-1vQSKgVJhB4w60UxHLgyk8CQwU44np3WkOT6tDHM8gQ_BAlSH_YnhH7N6umfYxBeSF8dLNgDYTT8VNlZ/pub?embedded=true" width='900' height='800'></iframe>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
