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

    <body>
      <div class="signin__container">
        <h1>Sign in</h1>
        <form method="POST">
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <a href="/admin/signup">Sign Up</a> 
      </div>   
    </body>

    </html>    
  `;
}