//Import Packages
import express from "express";

//Import Customs
import { Storage } from "./src/data/Storage.js";
import { redirect } from "./src/redirect.js";
import { cutURL } from "./src/cutURL.js";

//Declarations
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());

//Start Scripts
if (Storage.data.links === undefined) {
  data.links = [];
  write();
}

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!!");
});
app.post("/cut", cutURL);
app.get("/[a-f0-9]{5}", redirect);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});