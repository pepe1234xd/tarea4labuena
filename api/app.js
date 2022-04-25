const express = require(`express`);
const session = require('express-session');
const v1 = require(`./controllers/v1`); 

const app = express ()
const port = 3000
     
//routes
app.use(`/v1`,v1);

//Midleware
app.use(express.json())

//solo imprimir
app.listen (port,() => {
    console.log(`example app`)
})

app.use(session({
    secret:'424679',
    resave: true,
    saveUninitialized: true
}))

app.get('/contador', (req, res) => {
    req.session.visita = req.session.visita ? ++req.session.visita: 1;  
    res.send("the user has entered: " + req.session.visita + "times")
})