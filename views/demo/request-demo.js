module.exports = () => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Artilytics</title>
      
<link rel="icon" type="image/png" href="/img/output-onlinepngtools_1_32x32.png" sizes="32x32">

<!-- for IE -->
<link rel="icon" type="image/x-icon" href="/img/output-onlinepngtools_1_32x32.png" >
<link rel="shortcut icon" type="image/x-icon" href="/img/output-onlinepngtools_1_32x32.png"/>
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
                    <button type="submit" id="request_demo">Request Demo</button>
                </form>
            </div>         
        </div>  
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

        <script>
        $('#request_demo').click(function(event) {
          event.preventDefault();
          document.getElementById("request_demo").disabled = true;
        if(document.getElementById('first-name').value !== "" && document.getElementById('last-name').value !== "" && document.getElementById('email').value !== "" && document.getElementById('company').value !== "" && document.getElementById('phone').value !== ""){
      
          $.ajax({
              global: false,
              type: 'POST',
              url: "/demo",
              dataType: 'html',
              data: {
                firstName: $("#first-name").val(),
                  lastName: $("#last-name").val(),
                  email: $("#email").val(),
                  company: $("#company").val(),
                  phone: $("#phone").val(),
                  
              },
              success: function (result) {
                Swal.fire({
                  title:'Thank you for your interest.',
                 text: 'Please check your email for more information.',
                 icon:  'success'
                })
                document.getElementById('first-name').value = "";
                document.getElementById('last-name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('company').value = "";
                document.getElementById('phone').value = "";
                  document.getElementById("request_demo").disabled = false;

              },
              error: function (request, status, error) {
                  document.getElementById("request_demo").disabled = false;

              }
          });
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please make sure the fields are filled correctly!',
          });
          document.getElementById("request_demo").disabled = false;

        }
      });
        </script>

    </body>
    </html>
  `;
};
