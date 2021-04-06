const layout = require("../layout");

module.exports = () => {
  return layout({
    content: `
      <section class="body-smart-insights" style="margin-top: 30px;">
        <div class="top">
          <div class="text-content">
            <h1>Smart Insights</h1>
            <p>Unify data across all digital and offiline touchpoints and use it to power
              deep personalization and unlock trends across your company's ecosystem.
            </p>
          </div>
          <img src="/img/smart-insights.svg" alt="">
        </div>
        <div class="bottom">
          <div class="bottom-content">
            <div class="point">
              <img src="/img/capture-data.svg" alt="">
              <h4>Capture individual-level data no matter the source</h4>
              <p>Smart Insights is a customizable dashboard that gives an overview of your company’s performance by presenting its analytics. In just one glance, you can view the stats and trends of your products as well as of your company. Artilytics’ Smart Insights also allow you to dive deeper into these analytics by suggesting ways to improve performance.  
              </p>
            </div>
            <div class="point">
              <img src="/img/segmentation.svg" alt="">
              <h4>Build Customer segmentation</h4>
              <p>Identify and target high-value customers, churning customers. Create audience segments based on digital interaction,
                context, and phase in the customer's journey third party data, offline purchase, and more. 
              </p>
            </div>
            <div class="point">
              <img src="/img/uncover.svg" alt="">
              <h4>Automatically uncover deeper segmentation opportunities</h4>
              <p>Expand your experimentation and personalization to deeper segments using a Predictive Targeting engine which 
                continuously identifies opportunities to serve the most relevant content.
              </p>
            </div>
            
          </div>
        </div>
        <div class="other-capabilities">
          <h1>Other capabilities</h1>
          <div class="squares-container">
            <a class="square" href="/marketing">
              <img src="/img/icon-five.svg" alt="">
              <h1>Multi-Moment Marketing</h1>
            </a>
            <a class="square" href="#">
              <img src="/img/icon-one.svg" alt="">
              <h1>Predictive Ad-Audience</h1>
            </a>
            <a class="square" href="#">
              <img src="/img/icon-two.svg" alt="">
              <h1>Purchase Pattern Identification</h1>
            </a>
            <a class="square" href="/campaign-portal">
              <img src="/img/icon-three.svg" alt="">
              <h1>Campaign Trigger Portal</h1>
            </a>
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
    `,
  });
};
