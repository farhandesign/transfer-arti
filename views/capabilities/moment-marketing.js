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
      <a href="#">Request Demo</a>
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