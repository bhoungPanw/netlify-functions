exports.handler = (event, context, callback) => {
  // Function code goes here
  const body = JSON.stringify({
    text: "You have shouted out to: "
  });

  callback(null, {
    statusCode: 200,
    body: body
  });
};
