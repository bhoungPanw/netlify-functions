exports.handler = (event, context, callback) => {
  // Function code goes here

  const body =
    "text=Hi&attachments=%5B%7B%22color%22%3A%22good%22%2C%22fallback%22%3A%22plain+text%22%2C%22text%22%3A%22colored+text%22%7D%5D";

  callback(null, {
    statusCode: 200,
    body: body
  });
};
