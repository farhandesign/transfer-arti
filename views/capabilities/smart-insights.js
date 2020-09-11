const layout = require('../layout');

module.exports = () => {
  return layout({
    content: `
      <section class="body-smart-insights">
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
              <p>No matter what the source, Artilytics helps you create a custom & cohesive dashboard which on boards
                different data sets from whichever source to power experiences.
                Collect, store categorize and synchronize data from CR,.ESP,.DMP API and POS. 
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
      </section>

      <script>
        const navColor = () => {
          const navigation = document.querySelector('nav');
          let x = document.URL;
          if (x == 'http://localhost:3600/insights') {
            navigation.classList.toggle('nav-white');
          }
        }
        navColor();
      </script>
    `
  });
};
