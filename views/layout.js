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
             <!-- Capabilities -->
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
              <!-- Why Artilytics -->
              <div class="nav-link">
                Why Artilytics
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-why">
                  <div class="dropdown-content"></div>
                </div> 
              </div>
              <!-- Company -->
              <div class="nav-link">
                Company
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-company">
                  <div class="dropdown-content"></div>
                </div> 
              </div>
          </div>
          
          <!-- Request Demo -->
          <button class="sales-btn">
            <a href="/demo">Request Demo</a>
          </button>

          <!-- Drop Down -->
          <button class="burger__menu"><img class="burger__bars" src="/img/open-menu.svg" alt=""></button>
          <div class="menu__container">
            <button class="lvl1 oneCap burger__item">Capabilities<img class="d-arrows" src="/img/dropdown-arrow.svg" alt=""></button>
            <div class="lvl1-drop">
              <button class="lvl2 twoKey burger__item">Key Capabilities<img class="d-arrows" src="/img/dropdown-arrow.svg" alt=""></button>
              <div class="lvl2-drop">
                <a class="lvl3 burger__item" href="/insights"><img class="lvl3__icon" src="/img/icon-four.svg" alt="">Smart Insights</a>
                <a class="lvl3 burger__item"><img class="lvl3__icon" src="/img/icon-two.svg" alt="">Purchase Pattern Identification</a>
                <a class="lvl3 burger__item"><img class="lvl3__icon" src="/img/icon-one.svg" alt="">Predictive Ad-Audience</a>
                <a class="lvl3 burger__item" href="/marketing"><img class="lvl3__icon" src="/img/icon-five.svg" alt="">Multi-Moment Marketing</a>
                <a class="lvl3 burger__item" href="/campaign-portal"><img class="lvl3__icon" src="/img/icon-three.svg" alt="">Campaign Trigger Portal</a>
              </div>
              <button class="lvl2 twoIn burger__item">Industries<img class="d-arrows" src="/img/dropdown-arrow.svg" alt=""></button>
              <div class="lvl2-drop twoIn-drop">
                <a class="lvl3 burger__item" href="#">eCommerce</a>
                <a class="lvl3 burger__item" href="#">Retail</a>
                <a class="lvl3 burger__item" href="#">Finance</a>
                <a class="lvl3 burger__item" href="#">Travel</a>
              </div>
            </div>
            <button class="lvl1 burger__item">Why Artilytics</button>
            <button class="lvl1 burger__item">Company</button>
          </div>
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
              <a href="/insights">Smart Insights</a>
              <a href="#">Purchase Pattern Identification</a>
              <a href="#">Predictive Ad-Audience</a>
              <a href="/marketing">Multi-Moment Marketing</a>
              <a href="/campaign-portal">Campaign Trigger Portal</a>
            </div>
            <div class="list">
              <h5>Industries</h5>
              <a href="#">eCommerce</a>
              <a href="#">Retail</a>
              <a href="#">Finance</a>
              <a href="#">Travel</a>
            </div>
            <div class="list">
              <h5>Why Artilytics</h5>
              <a href="#">Customer Success</a>
              <a href="#">Select Customers</a>
              <a href="#">Artilytics Reviews</a>
              <a href="#">Security and Compliance</a>
            </div>
            <div class="list">
              <h5>Company</h5>
              <a href="#">About Us</a>
              <a href="#">Events</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
              <a href="#">Team</a>
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
      
      <!-- Toggle Burger Menu -->
      <script>
        const burgerMenu = () => {
          const menu = document.querySelector('.burger__menu');    
          const show = document.querySelector('.menu__container');    
          const bars = document.querySelector('.burger__bars');
          const header = document.querySelector('header');
      
          menu.addEventListener('click', (event) => {
            show.classList.toggle('menu__container-active');
            bars.classList.toggle('burger__bars-active');
            menu.classList.toggle('burger__menu-active'); 
            header.classList.toggle('header-scrolled');
          })
        }
        burgerMenu();
      </script>

      <!--Menu -->
      <script>
        const dropdown = () => {
          const container = document.querySelector('.menu__container');
          const oneCapDrop = document.querySelector('.lvl1-drop');
          const twoKeyDrop = document.querySelector('.lvl2-drop');
          const twoInDrop = document.querySelector('.twoIn-drop');

          container.addEventListener('click', (event) => {
            // Capabilities
            if (event.target.classList.contains('oneCap')) {
              oneCapDrop.classList.toggle('lvl1-drop-active');
            }
            // Key Capabilities
            if (event.target.classList.contains('twoKey')) {
                twoKeyDrop.classList.toggle('lvl2-drop-active');
            }
            // Industries
            if (event.target.classList.contains('twoIn')) {
              twoInDrop.classList.toggle('lvl2-drop-active');
            }
          })
        }
        dropdown();
      </script>

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
