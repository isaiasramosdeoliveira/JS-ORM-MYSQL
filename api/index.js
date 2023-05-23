const express = require("express");
const router = require("./routes/router");

const app = express();
app.use(express.json());
router(app);

const port = process.env.PORT || 3000

app.listen(port, (req, res) =>{
    console.log(`http://localhost:${port}`);
})