import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://openlibrary.org";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data...", results: [] });
});

app.post("/search", async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm.toLowerCase();
    const modifiedSearchTerm = searchTerm.split(' ').join('+');
    const apiUrl = `${API_URL}/search.json?q=${modifiedSearchTerm}&fields=*,availability&limit=10`;
    
    console.log("Modified URL:", apiUrl);
    
    const response = await axios.get(apiUrl);
    const books = response.data.docs;
    console.log("Books found:", books.length);
    
    res.render("index.ejs", { 
        content: `Search results for: ${searchTerm}`,
        results: books
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.render("index.ejs", { 
        content: "Error fetching results",
        results: []
    });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});