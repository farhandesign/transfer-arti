const layout = require("./layout");

module.exports = () => {
  return layout({
    content: `
      <section class="home-page">
        <div class="jumbotron">
          <div class="jumbotron-content-container">
            <div class="jumbotron-content">
              <div class="row1">
                <h1 class="title" data-wait="1500" data-words='["Predict.", "Act.", "Perform."]'></h1>
              </div>
              <div class="row2">
                <p>Driving growth requires delivering consistent and personalized
                  customer experiences across channels. Increase your marketing
                  ROI by using our cross-platform AI Powered Growth engine.
                  <br>
                  Artilytics brings web, mobileweb. app, messaging, email and 
                  advertising channels into a singular platform where marketers
                  can drive growth from acquisition to activation, retention 
                  and revenue. Our platform Leverages real-time customer 
                  intelligence while driving conversions and lifetime value.
                </p>
              </div>  
            </div>          
          </div>

          <div class="particles-bg">
            <div id="particles-js"></div>
          </div>
        </div>
        
        <section class="platform">
          <div class="beige">
            <img src="/img/wave.svg" alt="">
          </div>
          <h1>Platform Capabilities</h1>
          <div class="cards">
            <div class="card">
              <div>
                <img class="i" src="/img/icon-four.svg" alt="">
                <h3>Smart Insights</h3>
              </div>
              <p>Smart Insights is a customizable dashboard that gives an overview of your company’s performance by presenting its analytics. In just one glance, you can view the stats and trends of your products as well as of your company. Artilytics’ Smart Insights also allow you to dive deeper into these analytics by suggesting ways to improve performance. 
              </p>
              <a href="/insights">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-five.svg" alt="">
                <h3>Multi-Moment Marketing</h3>
              </div>
              
              <p>Signals, Sequence and Speed help activate Moment Marketing and Predictive Ad-Audience. With Moment Marketing, you can reach out to your customer with accurate content, when it is most appropriate and when there are higher chances of conversions. 
              </p>
              <a href="/marketing">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-one.svg" alt="">
                <h3>Predictive Ad-Audience</h3>
              </div>
              
              <p>Artilytics’ ‘Likelihood To Purchase’ Model is designed to provide you with Predictive Segments within your ad channels, so you can target the right audience. 
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-two.svg" alt="">
                <h3>Purchase Pattern Identification</h3>
              </div>
              <p>Identify your customer’s buying patterns in real time. Study these patterns to send out relevant deals and offers at the most appropriate time. 
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-three.svg" alt="">
                <h3>Campaign Trigger Portal</h3>
              </div>
              <p>With the help of our analytics and Purchase Pattern Identification, design flawless, targeted campaigns, and keep your customers engaged. </p>
              <a href="/campaign-portal">Learn more</a>
            </div>
          </div>
        </section>
        
        <!--  
        <div class="infographics">        
          <img src="/img/infographics.svg" alt="">
        </div>
      

        <section class="integrations">
          <div class="integrations-container">
            <h1>Integrations to help you succeed</h1>
            <p>Personalize, optimize and act on your data with the tools you already use, 
             including data management platforms, eCommerce enterprise systems, email 
             marketing services, web analytics solutions and more.
            </p>
            <div class="int-boxes-container">
              <div class="int__box"><img src="/img/google.png" alt=""></div>
              <div class="int__box"><img src="/img/facebook.png" alt=""></div>
              <div class="int__box"><img src="/img/mailchimp.png" alt=""></div>
              <div class="int__box"><img src="/img/adobe.png" alt=""></div>
              <div class="int__box"><img src="/img/sap.png" alt=""></div>
              <div class="int__box"><img src="/img/oracle.png" alt=""></div>
            </div>
          </div>
        </section>

        <section class="request-demo">
          <div class="demo-container">
            <img src="/img/demo-bg.svg" alt="">
            <div class="background"></div>
            <h1>Request a Demo Today</h1>
            <a href="/demo">Request Demo</a>
          </div>
        </section>
        -->
      </section>
      
      <script type="text/javascript" src="/js/type-writer.js"></script> 
      <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      <script>
        particlesJS.load('particles-js',
        '/js/particles.json', function(){
          console.log('particles.json loaded...');
        });
      </script>
    `,
  });
};
