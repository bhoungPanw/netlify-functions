exports.handler = (event, context, callback) => {
  // Function code goes here
  callback(null, {
    statusCode: 200,
    body: {
      text: "You have shouted out to: ",
      attachments: [
        {
          text: "Partly cloudy today and tomorrow"
        }
      ]
    }
  });
};
