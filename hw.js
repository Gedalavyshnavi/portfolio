// // const person = {
// //     name: 'Alice',
// //     age: 25,
// //     location: 'New York'
// //   };
  
// //   // Destructuring the object
// //   const { name, age, location } = person;
  
// //   console.log(name);       // 'Alice'
// //   console.log(age);        // 25
// //   console.log(location);   // 'New York'
// //const colors = ['red', 'green', 'blue'];

// // Destructuring the array
// // const [color1, color2, color3] = colors;

// // console.log(color1); // 'red'
// // console.log(color2); // 'green'
// // console.log(color3); // 'blue'

// // http-server.js
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, HTTP World!\n');
// });

// // Listen on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('HTTP server running at http://127.0.0.1:3000/');
// });

fetch('http://example.com')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  
  