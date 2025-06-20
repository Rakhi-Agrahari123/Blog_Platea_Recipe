const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db"); 
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/userRoute')
const recipeRoute = require('./routes/recipeRoute')
const cuisineRoute = require('./routes/cuisineRoute');
const cors = require('cors');

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/user', userRoute);
app.use('/api/recipe', recipeRoute);
app.use('/api/cuisines', cuisineRoute);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
