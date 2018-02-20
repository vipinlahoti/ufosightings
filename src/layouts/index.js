import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/main.sass'

const TemplateWrapper = ({ children }) => (
  <div className="has-navbar-fixed-top">
    <Helmet
      title="UFO Sightings"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    
    <h1>Comming soon</h1>
    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
