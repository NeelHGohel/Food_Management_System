const express = require('express');
const mongoose = require('mongoose');
const Food = require('./Food');
const bodyParser = require('body-parser');

const connectionstring = "mongodb+srv://Gohel_Neel:Neel%40123@cluster0.ndexd.mongodb.net/Food_Management"

mongoose.connect(connectionstring)
    .then(()=>{
        const app = express();
        app.use(express.json())
        app.use(bodyParser.urlencoded({extended : false}));
        
        //getAll
        app.get('/Food', async (req,res)=>{
            const ans = await Food.find();
            res.send(ans);
        });

        //getById
        app.get('/Food/:id' , async (req , res)=>{
            const ans = await Food.findOne({FoodID : req.params.FoodID});
            res.send(ans);
        });

        //Create
        app.post('/Food' , async (req,res)=>{
            Foo = new Food({...req.body});
            const ans  = await Foo.save();
            res.send(ans); 
        });

        //Update
        app.patch('/Food/:id' , async (req,res) => {
            const Foo = await Food.findOne({FoodID:req.params.FoodID});
            Foo.client_name = req.body.client_name;
            const ans = await Foo.save();
            res.send(ans); 
        });


        //Delete
        app.delete('/Food/:id' , async (req,res) => {
            const ans = await Food.deleteOne({FoodID : req.params.FoodID});
            res.send(ans);
        });

        app.listen(5000);
});