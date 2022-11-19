const connectTomongo = require('./db');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
const express = require('express');
var cors = require('cors');

var csrfProtection = csrf({ cookie: true });

connectTomongo();
const app = express();

app.use(cookieParser());

const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/images', express.static('backend/images'));
app.get('/getcsrf', csrfProtection, function (req, res) {
  res.json({csrfToken:req.csrfToken()});
});

// app.use('/api/notes',require('./routes/notes'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})