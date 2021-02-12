import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function About() {
   return (
      <>
        <Head>
           <title>LaslesVPN</title>
           <link rel="icon" href="/icon.svg" />
         </Head>
         <Navbar />

         <section className="hero">
            <div className="container">
               <div className="text-wrapper">
                  <h1 className="text-title">Want anything to be easy with <b>LaslesVPN</b>.</h1>
                  <p className="description">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>

                  <Link href="/contact"><a className="cta">Get Started</a></Link>
               </div>

               <div className="image-wrapper">
                  <img src="/Illustration-1.png" />
               </div>
             </div>
         </section>

      <section className="hero">
            <div className="container">
                <div className="card-wrapper">
                    <div className="card-item">
                        <img src="/users.svg" className="card-image" />
                        <h4 className="card-name">90+</h4>
                        <div className="card-category">Users</div>
                    </div>
                    <div className="card-item">
                        <img src="/locations.svg" className="card-image" />
                        <h4 className="card-name">30+</h4>
                        <div className="card-category">Locations</div>
                    </div>
                    <div className="card-item">
                        <img src="/servers.svg" className="card-image" />
                        <h4 className="card-name">50+</h4>
                        <div className="card-category">Servers</div>
                    </div>
                    </div>
              </div>
        </section>

        <section className="hero">
            <div className="container">
               <div className="image-wrapper-features">
                  <img src="/Illustration-2.png" />
               </div>

               <div className="text-wrapper-features">
                  <h1 className="text-title-features">We Provide Many Features You Can Use</h1>
                  <p className="description-features">You can explore the features that we provide with fun and have their own functions each feature.</p>
                  <div className="list-features">
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="desc-list-features">Powerfull online protection.</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="desc-list-features">Internet without borders..</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="desc-list-features">Supercharged VPN.</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="desc-list-features">No specific time limits.</p>
                     </li>
                  </div>
               </div>
             </div>
         </section>

         <section className="hero-2">
               <div className="pricing">
                  <h1 className="pricing-title">Choose Your Plan</h1>
                  <p className="pricing-description">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
               </div>
               
               <div class="wrapper-card">
               <div class="card">
                  <div class="card-title">
                     <img  className="image-pricing" src="/Illustration-3.png" />
                        <h3>Free Plan</h3>
                  </div>
                  <div class="card-description">
                        <ul>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">No Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Works an All Devices</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>Free</h1>
                        <button type="button">Select</button>
                  </div>
               </div>

               <div class="card">
                  <div class="card-title">
                     <img  className="image-pricing" src="/Illustration-3.png" />
                        <h3>Standart Plan</h3>
                  </div>
                  <div class="card-description">
                        <ul>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Yes Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Works an All Devices</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Connect Anywhere</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>$9 / mo</h1>
                        <button type="button">Select</button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-title">
                        <img  className="image-pricing" src="/Illustration-3.png" />
                        <h3>Premium Plan</h3>
                  </div>
                  <div class="card-description">
                       <ul>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Yes Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Works an All Devices</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Connect Anywhere</h1>
                           </li>
                           <li>
                              <img  className="image-list-pricing" src="/check.svg" />
                              <h1 className="desc-list-pricing">Get New Features</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>$12 / mo</h1>
                        <button type="button">Select</button>
                  </div>
               </div>
            </div>
         </section>
                  
         <section className="hero-2">
         <div className="network">
                  <h1 className="network-title">Huge Global Network<br />of Fast VPN</h1>
                  <p className="network-description">See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</p>
                  <img  className="image-network" src="/Illustration-4.png" />

               </div>

         </section>

         <section className="hero-2">
         <div className="sponsor">
                  <img  className="image-sponsor" src="/Sponsor-1.png" />
                  <img  className="image-sponsor" src="/Sponsor-2.png" />
                  <img  className="image-sponsor" src="/Sponsor-3.png" />
                  <img  className="image-sponsor" src="/Sponsor-4.png" />
                  <img  className="image-sponsor" src="/Sponsor-5.png" />
               </div>

         </section>

         <section className="hero-2">
               <div className="testimonials">
                  <h1 className="testimonials-title">Trusted by Thousands of Happy Customer</h1>
                  <p className="testimonials-description">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
               </div>
               
               <div class="wrapper-card">
               <div class="card">
                  <div class="card-title">
                     <img  className="image-testimonials" src="/Illustration-3.png" />
                        <h3>Free Plan</h3>
                  </div>
                  <div class="card-description">
                        <ul>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">No Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Works an All Devices</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>Free</h1>
                        <button type="button">Select</button>
                  </div>
               </div>

               <div class="card">
                  <div class="card-title">
                     <img  className="image-testimonials" src="/Illustration-3.png" />
                        <h3>Standart Plan</h3>
                  </div>
                  <div class="card-description">
                        <ul>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Yes Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Works an All Devices</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Connect Anywhere</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>$9 / mo</h1>
                        <button type="button">Select</button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-title">
                        <img  className="image-testimonials" src="/Illustration-3.png" />
                        <h3>Premium Plan</h3>
                  </div>
                  <div class="card-description">
                       <ul>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Encrypted Connection</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Yes Traffic Logs</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Works an All Devices</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Connect Anywhere</h1>
                           </li>
                           <li>
                              <img  className="image-list-testimonials" src="/check.svg" />
                              <h1 className="desc-list-testimonials">Get New Features</h1>
                           </li>
                        </ul>
                  </div>
                  <div class="card-action">
                        <h1>$12 / mo</h1>
                        <button type="button">Select</button>
                  </div>
               </div>
            </div>
         </section>
        
    </>
  );
}
