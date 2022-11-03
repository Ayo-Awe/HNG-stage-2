# HNG Task Two

## Description

This repo contains the code for HNG stage two task.

## Task Description

Using the same server setup from stage one

- Create an (POST) api endoint that takes the following sample json:

```json
{ “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
```

Operation can either be addition, subtraction or mutiplication

x can be a number and Integer datatype

y can be a number and Integer datatype

Based on the operation sent, perform a simple arithmetic operation on x and y

- Return a response with the result of the operation and your slack username

```json
{ “slackUsername”: String, “result”: Integer }
```

- Push to GitHub

```json
Sample Input { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
```

## Deployment

This task is currently live [here](https://hng-stage-2.onrender.com)
