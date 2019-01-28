const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 4001;

const app = express();
const driftKey = "tinTgTPe76vNffb7BJtLyNdeodGxrTAN";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.listen(process.env.PORT || port, () =>
  console.log(`Your first bot is listening on port ${port}!`)
);

app.get("/api/shoutout", async (req, res) => {
  console.log("------------------------------------");
  console.log(res, req);
  console.log("------------------------------------");
  res.send("Hello World!");
});

function getRawApiResponse(api) {
  return new Promise((resolve, reject) => {
    request.get(
      {
        uri: api,
        headers: {
          Authorization: "Bearer " + driftKey
        }
      },
      function(error, response, body) {
        if (error) {
          reject(error);
        }
        resolve(body);
      }
    );
  });
}

function postApiResponse(api, bodyObj) {
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: api,
        headers: {
          Authorization: "Bearer " + driftKey,
          "Content-Type": "application/json"
        },
        json: true,
        body: bodyObj
      },
      function(error, response, body) {
        if (error) {
          reject(error);
        }
        resolve(body);
      }
    );
  });
}
