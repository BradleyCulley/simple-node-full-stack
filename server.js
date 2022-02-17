const express = require('express');
const path = require('path');
const request = require('request');
const port = process.env.PORT || 80;
const app = express();

app.get('/api', (req, res) => {
  const requestOptions = {
    'url': 'https://api.tiingo.com/tiingo/daily/aapl/prices?startDate=2019-01-02&token=7f152d077759157d903064be4bc4b6c2fab11ddf',
    'headers': {
      'Content-Type': 'application/json'
    }
  };

  request(requestOptions, (error, response, body) => res.send(body));
});

app.use(express.static(__dirname));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
