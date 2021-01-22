import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [halo, ds] = useState('Halo Next')

  return (
    <div className={styles.template}>
      <header>
        <div className={styles.headerWrap}>
          <div className={styles.headerLeft}>
            <img src="/Logo.png"></img>
          </div>
          <div className={styles.headerRight}>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#help">Help</a>
            <button className={styles.SignIn} type="button">Sign In</button>
            <button className={styles.SignUp} type="button">Sign Up</button>
          </div>
        </div>
      </header>

      <section>
        <div className={styles.container} id="about">
          <div className={styles.aboutWrap}>  
            <div className={styles.aboutLeft}>
              <h1>
                Want anything to be easy with <span>LaslesVPN.</span>
              </h1>
              <p>
                Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
              </p>
              <button className={styles.btn} type="button"> Get Started </button>
            </div>
            <div className={styles.aboutRight}>
              <img className={styles.img} src="/Illustration1.png" alt="Illustration1"></img>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className={styles.container} id="features">
          <div className={styles.detailWrap}>

          </div>
          <div className={styles.featuresWrap}>
            <div className={styles.featuresLeft}>
              <img src="/Illustration2.png"></img>
            </div>
            <div className={styles.featuresRight}>
              <h1>
                We Provide Many Features You Can Use
              </h1>
              <p>
                You can explore the feature thah we provide with fun and heva their own functions each feature.
              </p>
              <ul>
                <li> Powerfull online protection.</li>
                <li> Internet without border.</li>
                <li> Supercharger VPN.</li>
                <li> No specific time limits.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.pricingWrap} id="pricing">
          <h1>Choose Your Plan</h1>
          <p>Lets's choose the package that is best for you and explore it happily and cheerfully.</p>

          <div className={styles.pricing}>
            <div>
              <img src="/Free.png"></img>
              <h1>Free Plan</h1>
              <ul>
                <li> Unlimites Bandwitch</li>
                <li> Encrypted Connection</li>
                <li> No Traffic Logs</li>
                <li> Works on All Devices</li>
              </ul>
              <h2>Free</h2>
              <button type="button">Select</button>
            </div>
            <div>
              <img src="/Free.png"></img>
              <h1>Standart Plan</h1>
              <ul>
                <li> Unlimites Bandwitch</li>
                <li> Encrypted Connection</li>
                <li> Yes Traffic Logs</li>
                <li> Works on All Devices</li>
                <li> Connect Anyware</li>
              </ul>
              <h2>$9 / mo</h2>
              <button type="button">Select</button>
            </div>
            <div>
              <img src="/Free.png"></img>
              <h1>Premium Plan</h1>
              <ul>
                <li> Unlimites Bandwitch</li>
                <li> Encrypted Connection</li>
                <li> Yes Traffic Logs</li>
                <li> Works on All Devices</li>
                <li> Connect Anyware</li>
                <li> Get New Features</li>
              </ul>
              <h2>$12 / mo</h2>
              <button type="button">Select</button>
            </div>
          </div>
        </div>
        <div className={styles.testimonialsWrap} id="testimonials">
          <h1>
            Huge Global Network of Fast VPN
          </h1>
          <p>
            See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.
          </p>
          <img src="/hugeglobal.svg"></img>
          <ul>
            <li><img src="/netflix.png"></img></li>
            <li><img src="/reddit.png"></img></li>
            <li><img src="/amazon.png"></img></li>
            <li><img src="/discord.png"></img></li>
            <li><img src="/spotify.png"></img></li>
          </ul>
        </div>
        
        <div className={styles.sliderWrap}>
          <h1>
            Trusted by Thousands of Happy Customer
          </h1>
          <p>
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
        </div>

        <div className={styles.subscribeWrap}>
          <div>
            <h1>
              Subscribe Now for Get Special Features!
            </h1>
            <p>
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div>
            <button type="button">Subscribe Now</button>
          </div> 
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
