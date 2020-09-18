const layout = require('../layout');

module.exports = () => {
  return layout({
    content: `
    <section class="body-smart-insights">
    <div class="top">
      <div class="text-content">
        <h1>Multi-Moment Marketing</h1>
        <p>Omni channel personalization and experimentation capabilities, together in one platform.
        </p>
      </div>
      <img src="/img/marketing.svg" alt="">
    </div>
    <div class="bottom">
      <div class="bottom-content">
        <div class="point">
          <img src="/img/automate.svg" alt="">
          
          <h4>Automate content personalization at scale</h4>
          <p>Let machine learning algorithms dynamically select the most relevant content for each user in carousels,
            multi-item banners, and more, by syncing your personalization campaigns with fresh data feeds and creative
            libraries.
          </p>
        </div>
        <div class="point">
          <img src="/img/equity.svg" alt="">
          <h4>Build brand equity</h4>
          <p>Mastering Moments raises the odds of seizing attention for the immediate purchase and building brand 
            equity in the longer run.
          </p>
        </div>
        <div class="point">
          <img src="/img/audience.svg" alt="">
          <h4>Capture & predict audiences</h4>
          <p>Predictive Marketing Audience and moment marketing comes into play through Signals, Sequence & Speed.
          </p>
        </div>
        
      </div>
    </div>
  </section>

  <script>
    const navColor = () => {
      const navigation = document.querySelector('nav');
      let x = document.URL;
      if (x == 'http://localhost:3600/marketing') {
        navigation.classList.toggle('nav-white');
      }
    }
    navColor();
  </script>
    `
  });
};