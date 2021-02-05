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
                        <p className="list-features">Powerfull online protection.</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="list-features">Internet without borders..</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="list-features">Supercharged VPN.</p>
                     </li>
                     <li>
                        <img  className="image-features" src="/check-circle.svg" />
                        <p className="list-features">No specific time limits.</p>
                     </li>
                  </div>
               </div>
             </div>
         </section>

         <section className="hero">
            <div className="container">
               
             </div>
         </section>
        
    </>
  );
}
