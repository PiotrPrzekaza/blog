import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
    <Layout pageTitle="Upss.. Nie wyprodukowałem jescze tego!!!">
        <SEO title="404: Not found" />
        <Link className="btn btn-primary text--uppercase" to={'/'}>
            Wróć Do Blogu
        </Link>
    </Layout>
)

export default NotFoundPage
