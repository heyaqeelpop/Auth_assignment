require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const publicRoutes = require("./routes/publicRoutes")
const protectedRoutes = require("./routes/protectedRoutes");
const app = express();
app.use(express.json());


app.use("/auth",authRoutes);
app.use("/public",publicRoutes)
app.use("/protected", protectedRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});