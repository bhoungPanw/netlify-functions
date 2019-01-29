exports.handler = (event, context, callback) => {
  // Function code goes here
  console.log("------------------------------------");
  console.log(event);
  console.log("------------------------------------");
  callback(null, {
    statusCode: 200,
    body: event.body,
    data: event.body
  });
};
