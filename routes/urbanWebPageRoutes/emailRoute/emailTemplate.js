const emailTmp = (keyword, brandName, email) =>{

return ( 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>

    .voucher-container {
      width: 500px;
      height: 650px;
      border: 1px solid gray;
      border-radius: 20px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      text-align: center;
    }

    .greet-info {
        padding: 1rem;
        text-align: justify;
    }

    .voucher {
        box-sizing: border-box;
        width: 400px;
        height: 250px;
        margin: 0 auto 100px;
        padding: 50px;
        background-image: linear-gradient(15deg, #0066CC 0%, #00CC99 100%);
        border-radius: 20px;
    }

    .globe-icon {
        width: 20px;
    }

    .smaller-font {
        font-size: smaller;
    }

    .voucher-label {
        color: #f0f8ff;
        text-align: center;
        text-transform: uppercase;
        font-size: larger;
    }

    .text-left {
        text-align: left;
    }

    a {
        color: #00CC99;
        text-decoration: none;
    }

    a:visited {
        color: #00CC99;
    }

  </style>

  </head>
  <body>

      <div class="voucher-container">
          <h2>Congratulations!</h2>
          <p class="greet-info">You have just successfully passed the process of receiving our Voucher for your website. 
              All you need to do is call the number provided and tell us the keyword from the Voucher for verification.</p>
          <div class="voucher">
              <div>
                  <div>
                  Urban<span> &#127760; </span> Web
                      <p class="voucher-label">Voucher</p>
                  </div>
              </div>

              <div class="smaller-font">
                  <span>Call us and say you voucher keyword:</span>  <span>${keyword}</span>
              </div>
              <a href="tel:+491626793890">
                &#9742; +49 162 679 3890
              </a>


              <div class="circle circle1"></div>
              <div class="circle circle2"></div>
          </div>
          <div>
              <p>This voucher is issued to ${brandName} - ${email}.</p> 
              <p>It entitles to use the website creation service once. </p>
          </div> 
      </div>
      
  </body>
  </html>
  `
  )
};

export default emailTmp;