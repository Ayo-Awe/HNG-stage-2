function handleOperator(operator_type, x, y) {
  switch (operator_type.trim().toLowerCase()) {
    case operators.ADDITION:
      return x + y;
    case operators.SUBTRACTION:
      return x - y;
    case operators.MULTIPLICATION:
      return x * y;
    default:
      return x + y;
  }
}

const operators = {
  ADDITION: "addition",
  SUBTRACTION: "subtraction",
  MULTIPLICATION: "multiplication",
};

module.exports = {
  operators,
  handleOperator,
};
