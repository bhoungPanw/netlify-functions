exports.handler = (event, context, callback) => {
  // Function code goes here
  callback(null, {
    statusCode: 200,
    body: event.body,
    text: "You have shouted out to: ",
    attachments: [
      {
        text: event.body.text
      }
    ]
  });
};
