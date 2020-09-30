const layout = require('../layout');

module.exports = () => {
  return layout({
    content: `
    <section class="body-smart-insights">
    <div class="top">
      <div class="text-content">
        <h1>Campaign Trigger Engine</h1>
        <p>Trigger personalized messageson mobile apps and emial upon key events. Automatically Trigger
          personalized emails and push notifications to reach customers at the most critical moments.
        </p>
      </div>
      <img src="/img/trigger.svg" alt="">
    </div>
    <div class="bottom">
      <div class="bottom-content">
        <div class="point">
          <img src="/img/rule.svg" alt="">
          <h4>Rule Based Campaigns</h4>
          <p>Engage with customers when they most expect it through rule-based triggers. Trigger push 
            notifications or email messages based on real-time user behaviour, like abandoning a shopping 
            cart or lack of activity shown in the past week.
          </p>
        </div>
        <div class="point">
          <img src="/img/email.svg" alt="">
          <h4>Schedule personalized push notifications</h4>
          <p>send timely, relevant push notifications based on user's behavior and activity. Target with
            reminders, content or product recommendations, tailored offers, and more to drive users back
            into your mobile app.
          </p>
        </div>
        <div class="point">
          <img src="/img/platforms.svg" alt="">
          <h4>Reach Customers on all platforms</h4>
          <p>Be it Facebook, Google, Email or push! Automate and design your trigger campaigns with customers.
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
      if (x == 'http://localhost:3600/campaign-portal') {
        navigation.classList.toggle('nav-white');
      }
    }
    navColor();
  </script>
    `
  });
};