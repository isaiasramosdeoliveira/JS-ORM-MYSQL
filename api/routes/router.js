const express = require("express");
const pessoasRouter = require("./pessoasRouter");

module.exports = app => {
    app.get("/", (req, res) => {
        res.send({message: "Page main"});
    })
    app.use(
        express.json(),
        pessoasRouter
    )
}