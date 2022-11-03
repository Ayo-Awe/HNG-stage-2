const { handleOperator } = require("./utils/helpers");
const Joi = require("joi");

function handlePost(req, res) {
  const { x, y, operation_type } = req.body;

  console.log(req.body);

  // Define input validation schema
  const schema = Joi.object({
    x: Joi.number().required(),
    y: Joi.number().required(),
    operation_type: Joi.string().required(),
  });

  // Validate input
  const { error } = schema.validate({ x, y, operation_type });

  if (error) return res.status(400).json({ error: error.details[0].message });

  // Perform arithemetic operation on input
  const result = handleOperator(operation_type, x, y);

  res.status(200).json({ result, slackUsername: "aweayo", operation_type });
}

module.exports = {
  handlePost,
};
