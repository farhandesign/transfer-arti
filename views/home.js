const layout = require('./layout');

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
              <p>Customizable dashboard which gives in-depth analysis of your company.
                With just one glance, Artilytic's Smart Insights shows different 
                trends of how your products and company is performing and how you 
                can improve it.
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-five.svg" alt="">
                <h3>Multi-Moment Marketing</h3>
              </div>
              
              <p>Predictive Marketing Audience and moment marketing comes into play
                through Signals, Sequence & Speed. Reach your customers at the right time-
                right moment & right context.
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-one.svg" alt="">
                <h3>Predictive Ad-Audience</h3>
              </div>
              
              <p>Use Artilytic;s likelihood to purchase model to creatte Predictive
                segments within your ad channels.
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-two.svg" alt="">
                <h3>Purchase Pattern Identification</h3>
              </div>
              <p>Understand true customer patterns and identify them in real time to 
                send out relevant offers.
              </p>
              <a href="">Learn more</a>
            </div>
            <div class="card">
              <div>
                <img class="i" src="/img/icon-three.svg" alt="">
                <h3>Campaign Trigger Portal</h3>
              </div>
              <p>Send targeted campaigns and engage with your customers real time.</p>
              <a href="">Learn more</a>
            </div>
          </div>
        </section>
        <div class="infographics">
          <div>
            <img src="/img/infographics.svg" alt="">
          </div>    
        </div>
        
      </section>
    `
  });
};