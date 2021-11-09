import dimension from 'images/dimensiondata.png';
import gowyd from 'images/gowyd.jpg';
import krm from 'images/krm.jpg';
import zoe from 'images/zoe.jpg';

import './About.css';

 

export default function About() {
     return (
        <div className="about" style={{height:"2000px"}}>
        {/* <div className="about__sidebar">
            <div className="aboutsidebar_item selected">
                <span>About Koscourier</span>
                <TrendingFlatIcon />
            </div>
            <a href="#team" style={{textDecoration:"none"}}>
            <div className="aboutsidebar_item last">
                <span>Team</span>
                <TrendingFlatIcon />
            </div>
            </a>
            
        </div> */}
        <div className="about__main">
      
        <div className="aboutMain__content">
            <h3>Who We Are</h3>
            
            <p>Our story as a business started small as a logistics department in a Shipping company. 
                We grew from a logistics/ transport department to a Courier company.
                 With the exposure and experience gathered over the years we are now 
                 able to serve clients fully with express delivery, vessel cargo delivery, and more.
                  Our logistics include a fleet of Motor Bikes, Delivery Vans and Cargo Trucks.</p>
            <p>We have rapidly grown into a brand recognized for customized services and innovative solutions. 
                KOS Courier connects with partners around the world and related service providers to offer customized
                 logistics solutions effectively and reach more businesses and consumers regionally and globally.
We are committed to continually enhancing our operations across the nation while pursuing opportunities for business growth in emerging markets abroad.
 This approach is core to the sustainable development of our business and commitment to facilitating wider global trade. 
</p>      
<p>KOS Courier Limited is well positioned to execute courier and delivery contracts as well as partnership projects.</p>
        </div>
        <div className="aboutMain__content">
            <h3>What We Do</h3>
            
            <p>Our hallmark is smart delivery, we manage a web based delivery system which collects details of our clients and delivery and match with our riders and drivers in real time. 
In the area of express delivery we provide a smart system to our clients to enable us make accurate delivery and on time. We also offer partnership schemes to our clients to have our bikes or vans stationed at their business location for fast and easy delivery. 
With the use of technology we have successfully introduced market leading delivery and logistics platform which operates throughout the nation. As a leading global provider of comprehensive logistics and transportation solutions, our breadth of services include Express Delivery, Port Cargo Delivery, Package Tracking, Supply Chain Management, E-commerce Solutions, Dedicated Corporate Delivery.
</p>
            
        </div>
        <div className="aboutMain__content">
            <h3>How We Do It</h3>
            
            <p>Our unique, asset-light business model underlies all of the strategic decisions we make. It has proved highly successful, allowing us to swiftly adapt to challenging market conditions, execute last-mile delivery solutions and quickly respond to changing customer preferences.
Innovation in technology is critical to maintaining our asset-light business model and leveraging the KOS Courier global network. Instead of investing heavily in infrastructure, we acquire or partner with domestic-focused logistics companies that have logistics and knowledge already in place for efficient and effective last-mile delivery. This approach has proven to have significant benefits for both our business and customers and why we consider ourselves a technology enterprise, selling transportation and logistics solutions
 without being encumbered by heavy investments in assets. We also believe that
 investing in and sourcing new technologies in the field of e-commerce in particular is core to a swifter, more efficient movement of goods and services globally and maintaining our market leadership position.
We also recognize that to continue to grow a truly sustainable business we must serve and develop the markets and communities where we operate. Our “Smart Delivery” platform is globally active for courier projects and we have partnered with a number of international and local organizations devoted to similar causes. We are proud of the close ties we have with the communities where we operate and the contributions we have made to their sustainable economic development.
  </p>
            
        </div>
        <div className="aboutMain__content">
            <h3>The Future of KOS Courier</h3>
            
            <p>Our business initiatives are always informed by our larger vision of supporting greater trade in and between emerging markets. We believe our future growth will be based on thinking and acting differently, on embracing change as our customers and markets change.
We live in an era where technology transforms and influences our daily lives more than ever before. Increasingly, consumers rely on digital connectivity, using it to enhance their lifestyles. This in turn presents opportunities for us to serve them better.
We have actively developed a culture where innovation can thrive. We will continue to invest in our people, technology and partnership, and also to implement innovative solutions to satisfy our customers’ evolving needs, while still delivering maximum value to our stakeholders and maintaining our partnerships with local communities.
</p>
            
        </div>
        <div className="aboutMain__content">
            <h3>Our Clients</h3>
            
            <p>Our good work has attracted a long list of clients. 
                Through dedication and customer satisfaction we have maintained our customers over the years. KOS Courier Limited is proud to say most of our clients are won through recommendations.
                 Below is a list of our key clients.</p>
             <div className="client__logos">
                <img src={dimension} alt="" />
                <img src={krm} alt="" />
                <img src={zoe} alt="" />
                <img src={gowyd} alt="" />
             </div>    
            
        </div>
     
     
        </div>
    </div>
     )
} 