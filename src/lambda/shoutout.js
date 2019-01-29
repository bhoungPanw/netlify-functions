exports.handler = (event, context, callback) => {
  // Function code goes here

  const body =
    "text=Text here.&username=otherusername&response_type=in_channel";

  callback(null, {
    isBase64Encoded: True,
    statusCode: 200,
    headers: {},
    body: body
  });
};
