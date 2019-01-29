exports.handler = (event, context, callback) => {
  // Function code goes here
  const body = {
    response_type: "in_channel",
    text: "It's 80 degrees right now.",
    attachments: [
      {
        text: "Partly cloudy today and tomorrow"
      }
    ]
  };

  callback(
    null,
    JSON.stringify({
      statusCode: 200,
      body: JSON.parse(body)
    })
  );
};
