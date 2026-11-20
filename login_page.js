const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {

    let css_login = fs.readFileSync('./css/css_login.css', 'utf8');
    let css_home = fs.readFileSync('./css/css_home.css', 'utf8');
    let css_menu = fs.readFileSync('./css/css_menu.css', 'utf8');
    let java_file = fs.readFileSync('./static/java.html', 'utf8');
    let node_file = fs.readFileSync('./static/nodejs.html', 'utf8');
    let python_file = fs.readFileSync('./static/python.html', 'utf8');
    let mobileapp_file = fs.readFileSync('./static/mobileapp.html', 'utf8');
    let rakhi_file = fs.readFileSync('./static/rakhi.html', 'utf8');
let profile_file = fs.readFileSync('./dynamic/profile.html', 'utf8');
   
    // Login Validation
    if (req.url.startsWith('/login')) {

        const q = url.parse(req.url, true).query;

        if (q.username == "admin" && q.password == "123") {

            res.writeHead(302, {
                Location: '/home'
            });

            res.end();
        }
        else {

            res.writeHead(200, { 'Content-Type': 'text/html' });

            res.write(`
            <html>
            <body>
                <h2>Invalid Username Or Password</h2>
                /Back</a>
            </body>
            </html>
            `);

            res.end();
        }

        return;
    }

    // Login Page
    if (req.url == '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write(`
        <html>
        <head>
            <title>Login Page</title>

            <style>
                ${css_login}
            </style>

        </head>

        <body>

            <form action="/login">

                <div class="container">

                    <h2>TYBCA DIV C - SCS</h2>

                    User Name :
                    <input type="text" name="username" placeholder="Enter Username">
                    <br><br>

                    Password :
                    <input type="password" name="password" placeholder="Enter Password">
                    <br><br>

                    <input type="submit" value="Login">

                </div>

            </form>

        </body>
        </html>
        `);

        res.end();
    }

    // Home Page
    else if (req.url == '/home') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           <html>
           <head>
              <title>Home Page</title>
              <style>
                ${css_home}
            </style>
            </head>
            <body>
               <div class="container">
                <h1>Welcome Admin</h1>
                      <h3><a href="/training_portal"> Visit TYBCA-SCS Training Portal</a></h3>
                      
                      </div>
            </body>
          </html>
        `);
    }
     else if (req.url == '/training_portal') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           <html>
           <head>
              <title>Home Page</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
              <style>
                ${css_menu}
            </style>
            </head>
   <body>
    <nav class="navbar">
     <div>
       <i class=fa-solid fa-graduation-cap"></i> TYBCA-SCS Training Portal
     </div>
     <ul class="menu">
      <li>
           <a href="home.html">
               <i class="fa-solid fa-house"></i> Home
           </a>
           <ul class="submenu">
            <li>
                  <a href="/update-profile">
                   <i class="fa-solid fa-user-pen"></i> Add Profile
                  </a>
            </li>
            
            <li>
                  <a href="/view-profile">
                   <i class="fa-solid fa-user-pen"></i> View Profile
                  </a>
            </li>

            <li>
                  <a href="/">
                   <i class="fa-solid fa-right-from-bracket""></i> Logout
                  </a>
            </li>

           </ul>
      </li>

      <li>
           <a href="home.html">
               <i class="fa-solid fa-house"></i> Celebrations
           </a>
           <ul class="submenu">
            <li>
                  <a href="/rakhi">
                   <i class="fa-solid fa-user-pen"></i> Raksha Bandhan Festival
                  </a>
            </li>

            <li>
                  <a href="/">
                   <i class="fa-solid fa-right-from-bracket""></i> Logout
                  </a>
            </li>

           </ul>
      </li>
       
      <li>
           <a href="training.html">
            <i class="fa-solid fa-laptop-code"></i> Training
           </a>
           <ul class="submenu">
               <li>
                 <a href="/java">
                   <i class="fa-brands fa-java"></i> Java
                 </a>
               </li>
               
                <li>
                 <a href="/python">
                   <i class="fa-brands fa-java"></i> python
                 </a>
               </li>

               <li>
                  <a href="php.html">
                    <i class="fa-brands fa-php"></i> PHP
                  </a>
               </li>
                
               <li>
                  <a href="/nodejs">
                    <i class="fa-brands fa-node-js"></i> Node.js
                  </a>
               </li>
          </ul>
       </li>


            <li>
           <a href="/services">
               <i class="fa-solid fa-house"></i> Services
           </a>
           <ul class="submenu">
            <li>
                  <a href="/mobileapp">
                   <i class="fa-solid fa-user-pen"></i> Mobile Application Devlopment
                  </a>
            </li>

            <li>
                  <a href="/webapp">
                   <i class="fa-solid fa-user-pen"></i> Web Application Devlopment
                  </a>
            </li>

             <li>
                  <a href="/designing">
                   <i class="fa-solid fa-user-pen"></i> Designing
                  </a>
            </li>

            <li>
                  <a href="/marketing">
                   <i class="fa-solid fa-right-from-bracket""></i> Digital Marketing
                  </a>
            </li>

           </ul>
      </li>
        



      </ul>
    </nav>

   </body>
  </html>
        `);
    }
    else if (req.url == '/java') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${java_file}
        `);
    }
     else if (req.url == '/nodejs') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${node_file}
        `);
    }
    else if (req.url == '/python') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${python_file}
        `);
    }
    else if (req.url == '/services') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${services_file}
        `);
    }
    else if (req.url == '/mobileapp') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${mobileapp_file}
        `);
    }
    else if (req.url == '/webapp') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${webapp_file}
        `);
    }
     else if (req.url == '/designing') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${designing_file}
        `);
    }
     else if (req.url == '/marketing') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${marketing_file}
        `);
    }
    else if (req.url == '/rakhi') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
           ${rakhi_file}
        `);
    }
   else if (req.url == '/update-profile') 
        {

        res.writeHead(200, { 'Content-Type': 'text/html' });
         res.write(`
            
           ${profile_file}
        `);

        
    }
    else if (req.url === '/view_profile' && req.method === 'POST') {
                   let body = '';
       req.on('data', chunk => {
                   body += chunk;
            });
       req.on('end', () => {
         let data = querystring.parse(body);

         res.writeHead(200, { 'Content-Type': 'text/html' });


         
         res.write(`
            <html>
              <head>
                <title>Update Page</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
              <style>
                ${css_menu}
            </style>
              </head>
             <body>

<nav class="navbar">
     <div>
       <i class=fa-solid fa-graduation-cap"></i> TYBCA-SCS Training Portal
     </div>
     <ul class="menu">
      <li>
           <a href="home.html">
               <i class="fa-solid fa-house"></i> Home
           </a>
           <ul class="submenu">
            <li>
                  <a href="/update-profile">
                   <i class="fa-solid fa-user-pen"></i> Update Profile
                  </a>
            </li>
            
            <li>
                  <a href="/view-profile">
                   <i class="fa-solid fa-user-pen"></i> View Profile
                  </a>
            </li>

            <li>
                  <a href="/">
                   <i class="fa-solid fa-right-from-bracket""></i> Logout
                  </a>
            </li>

           </ul>
      </li>

      <li>
           <a href="home.html">
               <i class="fa-solid fa-house"></i> Celebrations
           </a>
           <ul class="submenu">
            <li>
                  <a href="/rakhi">
                   <i class="fa-solid fa-user-pen"></i> Raksha Bandhan Festival
                  </a>
            </li>

            <li>
                  <a href="/">
                   <i class="fa-solid fa-right-from-bracket""></i> Logout
                  </a>
            </li>

           </ul>
      </li>
       
      <li>
           <a href="training.html">
            <i class="fa-solid fa-laptop-code"></i> Training
           </a>
           <ul class="submenu">
               <li>
                 <a href="/java">
                   <i class="fa-brands fa-java"></i> Java
                 </a>
               </li>
               
                <li>
                 <a href="/python">
                   <i class="fa-brands fa-java"></i> python
                 </a>
               </li>

               <li>
                  <a href="php.html">
                    <i class="fa-brands fa-php"></i> PHP
                  </a>
               </li>
                
               <li>
                  <a href="/nodejs">
                    <i class="fa-brands fa-node-js"></i> Node.js
                  </a>
               </li>
          </ul>
       </li>


            <li>
           <a href="/services">
               <i class="fa-solid fa-house"></i> Services
           </a>
           <ul class="submenu">
            <li>
                  <a href="/mobileapp">
                   <i class="fa-solid fa-user-pen"></i> Mobile Application Devlopment
                  </a>
            </li>

            <li>
                  <a href="/webapp">
                   <i class="fa-solid fa-user-pen"></i> Web Application Devlopment
                  </a>
            </li>

             <li>
                  <a href="/designing">
                   <i class="fa-solid fa-user-pen"></i> Designing
                  </a>
            </li>

            <li>
                  <a href="/marketing">
                   <i class="fa-solid fa-right-from-bracket""></i> Digital Marketing
                  </a>
            </li>

           </ul>
      </li>
        



      </ul>
    </nav>

               <h2>Profile Added Successfully</h2>
                       <p>Name : ${data.nm}  </p>
                       <p>City :  ${data.city} </p>
                
                <body>
                </html>       
                `);
          res.end();
       });
     }
     else if (req.url === '/add_profile' && req.method === 'POST') {
let body = '';
req.on('data', chunk => {
body += chunk;
});
req.on('end', () => {
let data = querystring.parse(body);
// Create JSON object
let profile = {
name: data.nm,
city: data.city
};
let profiles = [];

if (fs.existsSync('./data/profile.json')) {
let fileData = fs.readFileSync('./data/profile.json', 'utf8');
if (fileData.trim() !== '') {
profiles = JSON.parse(fileData);
}
}
profiles.push(profile);

// Save to file
fs.writeFileSync('./data/profile.json',JSON.stringify(profiles, null, 4));
res.writeHead(200, {'Content-Type':'text/html'});
res.write('<h2>Profile added Successfully</h2>');
res.write('<p>Name : ' + profile.name + '</p>');
res.write('<p>City : ' + profile.city + '</p>');
res.end();
});
}

     else {
       res.writeHead(404, {'Content-Type':'text/html'});
       res.end('<h2>404 - Page Not Found</h2>');
}


   

}).listen(3004);

console.log("Server Running at http://localhost:3004");