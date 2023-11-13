const express = require('express');
const birds = require("./birds");
const app = express();

const PORT = process.env.PORT || 3000

app.use('/birds',birds);

app.get('/', (req, res, next)=>{
    res.send("Sending this response in the home page")
})

app.get('/service/:id', (req, res, next)=> {
    //res.send(`This is the service response to the is ${req.params.id}`);
    console.log("Passing  the control to the next call back function.")
    next();
},
(req, res, next) => {
    res.send(`This is the second callback function.`)
}

)

app.listen(PORT, () =>{
    console.log(`This server is listeining to ${PORT}`)
});