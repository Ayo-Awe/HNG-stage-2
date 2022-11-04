function handleOperator(operator_type, x, y) {
  switch (operator_type.trim().toLowerCase()) {
    case operators.ADDITION:
      return x + y;
    case operators.SUBTRACTION:
      return x - y;
    case operators.MULTIPLICATION:
      return x * y;
    default:
      return handleOther(operator_type, x, y);
  }
}

const operators = {
  ADDITION: "addition",
  SUBTRACTION: "subtraction",
  MULTIPLICATION: "multiplication",
};

function handleOther(operation_type, x, y) {
  const add = checkAddition(operation_type, x, y);
  const subtract = checkProduct(operation_type, x, y);
  const multiply = checkSubtraction(operation_type, x, y);

  if (add) {
    return add;
  } else if (subtract) {
    return subtract;
  } else if (multiply) {
    return multiply;
  }
  return 0;
}

function checkAddition(operation_type, x, y) {
  const terms = ["addition", "+", "sum", "add"];
  let result = null;
  terms.forEach((term) => {
    if (operation_type.includes(term)) result = x + y;
  });

  return result;
}

function checkSubtraction(operation_type, x, y) {
  const terms = ["subtract", "subtraction", "-", "difference"];
  let result = null;

  terms.forEach((term) => {
    if (operation_type.includes(term)) result = x - y;
  });

  return result;
}

function checkProduct(operation_type, x, y) {
  const terms = ["product", "multiply", "*", "multiplication"];
  let result = null;

  terms.forEach((term) => {
    if (operation_type.includes(term)) result = x * y;
  });

  return result;
}
module.exports = {
  operators,
  handleOperator,
};
