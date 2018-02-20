import React from 'react'
import Link from 'gatsby-link'
import angular from "../images/angular.png"
import apollo from "../images/apollo.png"
import graphql from "../images/graphql.png"
import meteor from "../images/meteor.png"
import nodejs from "../images/nodejs.png"
import react from "../images/react.png"
import gatsby from "../images/gatsby.png"

const IndexPage = () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="columns">
          <div className="column">
            <div className="hero-bg"></div>
          </div>
          <div className="column">
            <div className="hero-desc">
              <h1 className="title">Lorem Ipsum is simply dummy text of the</h1>
              <p>Typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="section-dark">
          <h6 className="title">SIMPLE. INTEGRATED. PROVEN.</h6>
          <p>Famous Instant Apps provide proven conversion and engagement uplift in the heart of critical mobile micro-moments.</p>
        </div>
      </div>
    </section>

    <section className="section section-image-container is-large">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="section-image">
              <div className="side-image"></div>
            </div>
          </div>
          <div className="column is-three-fifths">
            <div className="box">
              <h3 className="subtitle">Services we offer</h3>
              <ul>
                <li>UI/UX Design
                  <ul>
                    <li>Brand identity</li>
                    <li>Landing page</li>
                  </ul>
                </li>
                <li>Web App Development
                  <ul>
                    <li>Fully customised</li>
                    <li>Single page</li>
                    <li>Real time</li>
                  </ul>
                </li>
                <li>Mobile App Development
                  <ul>
                    <li>Native</li>
                    <li>Cross platform</li>
                    <li>Multi device support</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-large no-padding-b">
      <div className="container">
        <div className="section-dark">
          <h6 className="title">TECHNOLOGIES WE WORK WITH.</h6>
          <div className="inline-image-list">
            <ul>
              <li><img src={gatsby} alt="Gatsby - PintoBin Techno Solutions" /></li>
              <li><img src={angular} alt="Angular - PintoBin Techno Solutions" /></li>
              <li><img src={react} alt="React - PintoBin Techno Solutions" /></li>
              <li><img src={apollo} alt="Apollo GraphQL - PintoBin Techno Solutions" /></li>
              <li><img src={graphql} alt="Graphql - PintoBin Techno Solutions" /></li>
              <li><img src={meteor} alt="Meteor - PintoBin Techno Solutions" /></li>
              <li><img src={nodejs} alt="NodeJs - PintoBin Techno Solutions" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-medium no-padding-lr">
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="box is-medium">
            <div>
              <h3 className="subtitle">Get in Touch</h3>
              <p>Typesetting industry. Lorem Ipsum has been the industry's standard.</p>
              <div className="inline-list">
                <div>
                  <h4>Where to find us</h4>
                  <ul>
                    <li>101, Garden View Apartments,</li>
                    <li>1st C Cross, varsova layout, Kaggadasapura</li>
                    <li>Bengaluru, Karnataka 560093</li>
                  </ul>
                </div>
                <div>
                  <h4>Contact us</h4>
                  <ul>
                    <li><a href="mailto:hello@pintobin.in">hello@pintobin.in</a></li>
                    <li>+91 869 132 3603</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default IndexPage
