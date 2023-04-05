// errorHandlers.js

const path = require('path');

function handle404Error(req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname, 'pages', '404.html'));
}

module.exports = { handle404Error };
