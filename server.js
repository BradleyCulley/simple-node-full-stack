const express = require("express");
const path = require("path");
const request = require("request");
const port = process.env.PORT || 8080;
const app = express();

app.get("/api", (req, res) => {
  const requestOptions = {
    url: "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate=2019-01-02&token=7f152d077759157d903064be4bc4b6c2fab11ddf",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(requestOptions, (error, response, body) => res.send(body));
});

app.get("/average", (req, res) => {
  const requestOptions = {
    url: "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate=2019-01-02&token=7f152d077759157d903064be4bc4b6c2fab11ddf",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(requestOptions, (error, response, body) => {
    console.log("body", body);
    // const sum = body.reduce(
    //   (accumulator, entry) => accumulator + entry.adjClose,
    //   0
    // );
    res.send({
      sum: 1,
    });
  });
});

app.get("/sumTwoNumbers/:a/:b", (req, res) => {
  const requestOptions = {
    url: "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate=2019-01-02&token=7f152d077759157d903064be4bc4b6c2fab11ddf",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(requestOptions, (error, response, body) => {
    console.log("a", req.params.a);
    console.log("b", req.params.a);

    res.send({
      sum: 1,
    });
  });
});

app.get("/add", (req, res) => {
  const requestOptions = {
    url: "https://api.tiingo.com/tiingo/daily/aapl/prices?startDate=2019-01-02&token=7f152d077759157d903064be4bc4b6c2fab11ddf",
    headers: {
      "Content-Type": "application/json",
    },
  };

  request(requestOptions, (error, response, body) => res.send(body));
});

app.use(express.static(__dirname));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);
console.log("server started on port " + port);
