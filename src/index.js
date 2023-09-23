const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const notesRouter = require("./routes/notesRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
app.use("/notes",notesRouter);

app.get("/", (req, res) =>{
  res.send("Notes API From Shashank Ranjan");
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

  app.listen(PORT,()=>{
    console.log("Server Started on port no "+PORT);
 });
 
}).catch((error)=>{
  console.log(error);
});




