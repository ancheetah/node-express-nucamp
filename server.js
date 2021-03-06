const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // use development versino of morgan
app.use(express.json());  // when server receives json formatted request this Middleware func will parse that data into JS properties of that object

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

// Serve files from the public folder
app.use(express.static(__dirname + '/public')); // double underscore refers to absolute path of current directory that variable is in

app.use((req, res) => { // app.use() takes a callback Middleware function
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// If you send a request to the hostname, Express automatically serves up index.html without having to write additional code