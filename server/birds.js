const express = require('express');
const router = express.Router()


router.use( (req, res, next) => {
    console.log("Time =" ,Date.now())
    next()
});

router.get('/',(req, res, next) => {
    res.send("This is the home page for the bird.")
});

router.get('/about/:name',(req, res, next) => {
    res.send(`The name of the bird is ${req.params.name}.`)
});

module.exports = router;