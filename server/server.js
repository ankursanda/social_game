const express = require('express');
const cors = require('cors');
const birds = require("./birds");
const app = express();

const PORT = process.env.PORT || 8000


app.use(cors());
app.use('/birds',birds);

app.get('/', (req, res, next)=>{
    data = {name: 'atom'}
    res.send(JSON.stringify(data))
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