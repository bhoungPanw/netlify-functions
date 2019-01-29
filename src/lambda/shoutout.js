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

  return { isBase64Encoded: True, statusCode: 200, headers: {}, body: body };

  //   callback(null, {
  //     statusCode: 200,
  //     body: body
  //   });
};
