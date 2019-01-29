exports.handler = (event, context, callback) => {
  // Function code goes here
  callback(null, {
    statusCode: 200,
    text: "You have shouted out to: ",
    attachments: [
      {
        text: event.body.text
      }
    ]
  });
};
