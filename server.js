const express = require("express");
const path = require("path");

const app = express();
const PORT = 3008;

app.use("/bloom/", express.static(path.join(__dirname, "public/bloom")));
app.use("/imagesho/", express.static(path.join(__dirname, "public/imagesho")));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
