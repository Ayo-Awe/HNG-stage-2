const express = require("express");
const app = express();
const cors = require("cors");
const { handlePost } = require("./controller");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Post route for task
app.post("/", handlePost);

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});
