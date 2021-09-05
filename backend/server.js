import express from 'express'

const App = express();

App.get("/", (req, res) => {
    res.send("Hey, you have made a get request!");
})

App.listen(5000, () => {
    console.log("Server is running at port 5000")
})