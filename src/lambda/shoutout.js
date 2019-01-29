exports.handler = (event, context, callback) => {
    // Function code goes here
    callback(null, {
      statusCode: 200,
      data: event.data
    });
  };
