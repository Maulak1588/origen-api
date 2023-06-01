require('./db/mongoose')
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const cors = require('cors')
const Dish = require('./model/dish');
const Header = require('./model/header');

app.use(cors());
app.use(express.json())

app.post('/dish', (req, res) => {
    console.log(req.body)
    const dish = new Dish(req.body);
    dish.save()
        .then(() => {
            res
            .status(201)
            .send(dish)
        })
        .catch((error) => {
            res
            .status(400)
            .send(error)
        })
    });

app.post('/header', (req, res) => {
    console.log(req.body)
    const header = new Header(req.body);
    header.save()
        .then(() => {
            res
            .status(201)
            .send(dish)
        })
        .catch((error) => {
            res
            .status(400)
            .send(error)
        })
    });

app.get('/dishes', (req, res) => {
    Dish.find()
       .then((dishes)=>{
            res.send(dishes)
        })
        .catch((error) => {
            res
            .status(500)
            .send(error)
     })
})

app.get('/headers', (req, res) => {
    Header.find()
       .then((headers)=>{
            res.send(headers)
        })
        .catch((error) => {
            res
            .status(500)
            .send(error)
     })
})

app.get('/dishes/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id)
        .then((user) => {
            if(!user){
                return res.status(404).send('No encieuntn')
            }
            res.send(user)
        .catch((err) => {
            res
            .status(404)
            .send(err)
        })
        })
})



app.listen(3000,()=>{
    console.log('listening on port 3000') 
})