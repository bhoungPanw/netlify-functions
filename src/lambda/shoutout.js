exports.handler = (event, context, callback) => {
  // Function code goes here

  const body =
    "text=Text here.&username=otherusername&response_type=in_channel";

  callback(null, {
    statusCode: 200,
    body: body
  });
};
