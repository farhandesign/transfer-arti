module.exports = () => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Artilytics</title>
      
      <link href="/sass/main.css" rel="stylesheet" >
    </head>
    <body class="demo__body">
        <a class="hp-button" href="/"><img src="/img/left-arrow.svg" alt=""></a>
        <div class="demo__container">
            <div class="demo__left">
                    <h1>Get in touch with the Artilytics Team</h1>
                    <ul>
                        <li>Find out why leading brands choose Artilytics.</li>
                        <li>Discover top use cases and success stories for your industry.</li>
                        <li>Learn how Artilytics can help you increase your revenue.</li>
                    </ul>    
            </div>

            <div class="demo__right">
                <h1>GET YOUR DEMO</h1>
                <h2>Please Tell Us A Bit About Yourself</h2>
                <form action="/demo" method="POST">
                    <input type="text" name="firstName" id="first-name" placeholder="First Name*">
                    <input type="text" name="lastName" id="last-name" placeholder="Last Name*">
                    <input type="email" name="email" id="email" placeholder="Email*">
                    <input type="text" name="company" id="company" placeholder="Company">
                    <input type="text" name="phone" id="phone" placeholder="Phone*">
                    <button type="submit">Request Demo</button>
                </form>
            </div>         
        </div>  
    </body>
    </html>
  `;
};
