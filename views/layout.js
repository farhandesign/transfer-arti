module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Artilytics</title>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <link href="/sass/main.css" rel="stylesheet" >

<link rel="icon" type="image/png" href="/img/output-onlinepngtools_1_32x32.png" sizes="32x32">

<!-- for IE -->
<link rel="icon" type="image/x-icon" href="/img/output-onlinepngtools_1_32x32.png" >
<link rel="shortcut icon" type="image/x-icon" href="/img/output-onlinepngtools_1_32x32.png"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>

      <header>
        <nav>   
          <a class="logo" href="/"><img class="arti-logo" src="/img/arti-logo.png" alt=""></a>

          <div class="nav-links-container">
             <!-- Capabilities 
              <div class="nav-link">
                Capabilities
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-capabilities">
                  <div class="dropdown-content">
                    <div class="dc-sections">
                      <!--CAPABILITIES 
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

                      <!--INDUSTRIES 
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
              -->

              
              <!-- Why Artilytics -->
              <div class="nav-link">
                <a href="/">What We Offer</a>
              </div>

              <div class="nav-link">
              What We Offer
              <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
              <div class="dropdown-menu dropdown-menu-capabilities">
                <div class="dropdown-content">
                  <div class="dc-sections">
                    <div class="c-column">
                      <h5>Offers</h5>
                      <div class="c-inner">
                        <div class="col">
                          <a class="thing" href=""><img class="i" src="/img/icon-four.svg" alt="">FinTech</a>
                          <a href=""><img class="i" src="/img/icon-one.svg" alt="">Packages</a>
                        </div>
                     
                
                      </div>
                      
                    </div>


                  </div>
                </div>
              </div>  
            </div>



              <div class="nav-link">
              <a href="/">About Arti</a>
            </div>
            <div class="nav-link">
            <a href="/">Careers</a>
          </div>
          <div class="nav-link">
          <a href="/">Blog</a>
     </div>
              <!-- Company 
              <div class="nav-link">
                Company
                <img class="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="">
                <div class="dropdown-menu dropdown-menu-company">
                  <div class="dropdown-content"></div>
                </div> 
              </div>
              -->
          </div>
          
          <!-- Request Demo -->
          <div class="d-flex">
          <div class="nav-link border-right" >
          <a class="pd-rg-10" href="/">Contact Us</a>
        </div>
          <a href="/demo">
            <button class="sales-btn">
            Request Demo
            </button>
          </a>
          </div>

          <!-- Drop Down -->
          <button class="burger__menu"><img class="burger__bars" src="/img/open-menu.svg" alt=""></button>
          <div class="menu__container">
            <button class="lvl1 oneCap burger__item">What We Offer<img class="d-arrows" src="/img/dropdown-arrow.svg" alt=""></button>
            <div class="lvl1-drop">
              <button class="lvl2 twoKey burger__item">Offers<img class="d-arrows" src="/img/dropdown-arrow.svg" alt=""></button>
              <div class="lvl2-drop">
                <a class="lvl3 burger__item" href="#"><img class="lvl3__icon" src="/img/icon-four.svg" alt="">FinTech</a>
                <a class="lvl3 burger__item"><img class="lvl3__icon" src="/img/icon-two.svg" alt="">Packages</a>
              </div>
          
            </div>
            <a href="/why-artilytics" class="lvl1 burger__item">Why Artilytics</a>

            <a href="#" class="lvl1 burger__item">About Arti</a>
            <a href="#" class="lvl1 burger__item">Careers</a>

            
            <a href="#" class="lvl1 burger__item">Blog</a>
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
              <h5>Capabilities</h5>
              <a href="/insights">Smart Insights</a>
              <a href="#">Purchase Pattern Identification</a>
              <a href="#">Predictive Ad-Audience</a>
              <a href="/marketing">Multi-Moment Marketing</a>
              <a href="/campaign-portal">Campaign Trigger Portal</a>
            </div>
            <div class="list">
              <h5>Company</h5>
              <a href="#">About Us</a>
              <a href="#">Partners</a>
              <a href="#">Team</a>
              <a href="#">Contact Us</a>
              </div>
            <div class="list">
              <h5>Policies</h5>
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Terms of Use</a>
            </div>
            <div class="list">
              <h5 class="center-text">Have a Question?</h5>
              <p class="center-text">Get in Touch!</p>
              <form>
              <div class="form-group">
              <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name">
              </div>
              <div class="form-group">
              <input type="text" class="form-control" id="contact" aria-describedby="emailHelp" placeholder="Contact">
              </div>
              <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group ">
            <input type="text" class="form-control" id="companyname" aria-describedby="emailHelp" placeholder="Company Name">
            </div>
              <div class="end-text">
              <button type="submit" class="btn btn-primary center-text">Submit</button>
              </div>
              </form>

              
            </div>
            
          </div>
          <div class="row">

          <div class="col-md-3">
          <div class="contact">
            <h5>Contact Us</h5>
            <p>Phone: 021-38942468</p>
            <p>Email: info@artilytics.com</p>
          </div>
          <div class="social-media">
            <p>© 2020 Artilytics, All rights reserved.</p>
          </div>
          </div>
  <div class="offset-md-6">
  </div>
          <div class="col-md-3  follow-us">
          <div class="ml-3">
                <div class="center-div">
                  <h5>Follow Us</h5>
                  </div>



          <div class="center-div">
                  <a href="#" class="fa fa-linkedin"></a>

                  <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>

        <a href="#" class="fa fa-twitter"></a>
        </div>
        </div>
          </div>
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

<script>
  const navColor = () => {
    const navigation = document.querySelector('nav');
    let x = document.URL;
    console.log(x);
    if (x != 'http://www.artilytics.com/') {
      navigation.classList.toggle('nav-white');
    }
  }
  navColor();
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
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <script type="text/javascript" src="/js/intersection-observer.js"></script> 
    </body>
    </html>
  `;
};
