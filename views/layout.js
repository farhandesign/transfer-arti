module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Artilytics</title>

      <link href="/sass/main.css" rel="stylesheet" >
    </head>
    <body>
      <header>
        <nav>   
          <a class="logo" href="/">Artilytics</a>

          <div class="nav-links-container">
              <div class="nav-link">
                Capabilities
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-capabilities">
                  <div class="dropdown-content">
                    <div class="dc-sections">
                      <!--CAPABILITIES -->
                      <div class="c-column">
                        <h4>Key Capabilities</h4>
                        <div class="c-inner">
                          <div class="col">
                            <a class="thing" href="/insights"><img class="i" src="/img/icon-four.svg" alt="">Smart Insights</a>
                            <a href=""><img class="i" src="/img/icon-one.svg" alt="">Predictive Ad-Audience</a>
                            <a href="/campaign-portal"><img class="i" src="/img/icon-three.svg" alt="">Campaign Trigger Portal</a>
                          </div>
                          <div class="col">
                            <a href=""><img class="i" src="/img/icon-two.svg" alt="">Purchase Pattern Identification</a>
                            <a class="thing" href="/marketing"><img class="i" src="/img/icon-five.svg" alt="">Multi-Moment Marketing</a>
                          </div>    
                        </div>
                        
                      </div>

                      <!--INDUSTRIES -->
                      <div class="i-column">
                        <h4>Industries</h4>
                        <a href="">eCommerce</a>
                        <a href="">Retail</a>
                        <a href="">Finance</a>
                        <a href="">Travel</a>
                      </div>

                    </div>
                  </div>
                </div>  
              </div>
              <div class="nav-link">
                Why Artilytics
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-why">
                  <div class="dropdown-content"></div>
                </div> 
              </div>
              <div class="nav-link">
                Company
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-company">
                  <div class="dropdown-content"></div>
                </div> 
              </div>
          </div>

          <button class="sales-btn">
            <a href="">Request Demo</a>
          </button>

        </nav>
      </header>
      
      <div class="observer"></div>
      <div class="page-content">
        ${content}
      </div>
      

      <footer>
        <div class="container">
          <div class="sub-links">
            <div class="list">
              <h5>Key Capabilities</h5>
              <a href="">Smart Insights</a>
              <a href="">Purchase Pattern Identification</a>
              <a href="">Predictive Ad-Audience</a>
              <a href="">Multi-Moment Marketing</a>
              <a href="">Campaign Trigger Portal</a>
            </div>
            <div class="list">
              <h5>Industries</h5>
              <a href="">eCommerce</a>
              <a href="">Retail</a>
              <a href="">Finance</a>
              <a href="">Travel</a>
            </div>
            <div class="list">
              <h5>Why Artilytics</h5>
              <a href="">Customer Success</a>
              <a href="">Select Customers</a>
              <a href="">Artilytics Reviews</a>
              <a href="">Security and Compliance</a>
            </div>
            <div class="list">
              <h5>Company</h5>
              <a href="">About Us</a>
              <a href="">Events</a>
              <a href="">Press</a>
              <a href="">Contact</a>
              <a href="">Team</a>
            </div>
          </div>
          <div class="contact">
            <h5>Contact Us</h5>
            <p>Phone: 021-38942468</p>
            <p>Email: info@artilytics.com</p>
          </div>
          <div class="social-media">
            <p>© 2020 Artilytics, All rights reserved.</p>
          </div>
        </div>
      </footer>
    
    
      <script type="text/javascript" src="/js/intersection-observer.js"></script> 
      <script type="text/javascript" src="/js/type-writer.js"></script> 
      <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      <script>
        particlesJS.load('particles-js',
        '/js/particles.json', function(){
          console.log('particles.json loaded...');
        });
      </script>
    </body>
    </html>
  `;
};
