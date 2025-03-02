import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://openlibrary.org";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });