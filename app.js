const express = require("express");
const app = express();
const cors = require("cors");
const Joi = require("joi");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/", (req, res) => {
  const { x, y, operation_type } = req.body;

  // Create input validation schema
  const schema = Joi.object({
    x: Joi.number().required,
    y: Joi.number().required,
    operation_type: Joi.string().required(),
  });

  const { error } = schema.validate({ x, y, operation_type });

  if (error) return res.status(400).json({ error: error.details[0].message });

  const result = handleOperator(operation_type, x, y);

  res.status(200).json({ result, slackUsername: "aweayo" });
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});

function handleOperator(operator_type, x, y) {
  switch (operator_type.trim().toLowerCase()) {
    case operators.ADDITION:
      return x + y;
    case operators.SUBTRACTION:
      return x - y;
    case operators.MULTIPLICATION:
      return x * y;
    default:
      return null;
  }
}

const operators = {
  ADDITION: "addition",
  SUBTRACTION: "subtraction",
  MULTIPLICATION: "multiplication",
};
