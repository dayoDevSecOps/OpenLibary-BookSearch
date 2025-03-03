import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://openlibrary.org";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/search", (req, res) => {
  const searchTerm = req.body.searchTerm;
  console.log(`Search term:, ${searchTerm}`);
  
  // For now, just redirect back to homepage with the search term
  res.render("index.ejs", { 
      content: `You searched for: ${searchTerm}`
  });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});