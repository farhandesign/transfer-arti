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
        <div class="dashboard__container">
          <h1>Dashboard</h1>
          <a href="/admin/signout">Sign Out</a>
        </div>    
      </body>
  
      </html>    
    `;
  }