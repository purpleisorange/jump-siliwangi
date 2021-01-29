
import styles from '../styles/Home.module.css'

export default function Home() {
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
              <img src="/Illustration1.png" alt="Illustration1"></img>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className={styles.container} id="features">
          <div className={styles.detailWrap}>
            <div className={styles.users}>
              <img src="/user.png"></img>
              <div>
              <h1>90+</h1>
              <p>Users</p>
              </div>
            </div>
            <div className={styles.locations}>
              <img src="/location.png"></img>
              <div>
              <h1>30+</h1>
              <p>Locations</p>
              </div>
            </div>
            <div className={styles.server}>
              <img src="/Server.png"></img>
              <div>
              <h1>50+</h1>
              <p>Server</p>
              </div>
            </div>
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
          <img className={styles.imgGlobal} src="/hugeglobal.svg"></img>
          <ul>
            <li><img className={styles.imgTesti} src="/netflix.png"></img></li>
            <li><img className={styles.imgTesti} src="/reddit.png"></img></li>
            <li><img className={styles.imgTesti} src="/amazon.png"></img></li>
            <li><img className={styles.imgTesti} src="/discord.png"></img></li>
            <li><img className={styles.imgTesti} src="/spotify.png"></img></li>
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
        <div className={styles.footerWrap}>
          <div className={styles.footerAbout}>
            <img src="/Logo.png"></img>
            <h1>
              <span>LaslesVPN</span> is a private virtual network that has unique features and has high security.
            </h1>
            <ul>
              <li><img src="/Facebook.png"></img></li>
              <li><img src="/Twitter.png"></img></li>
              <li><img src="/Instagram.png"></img></li>
            </ul>
            <p>
              ©2020Lasles<span>VPN</span>
            </p>
          </div>
          <div className={styles.footerProduct}>
            <h1>
              Product
            </h1>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className={styles.footerEngage}>
            <h1>
              Engage
            </h1>
            <p>LaslesVPN ?</p>
            <p>FAQ</p>
            <p>Tutorial</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className={styles.footerEarn}>
            <h1>
              Earn Money
            </h1>
            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
