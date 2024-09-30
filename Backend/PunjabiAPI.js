const express = require('express');
const mongoose = require('mongoose');
const punjabi = require('./punjabii'); // Ensure the filename is correct
const bodyParser = require('body-parser');
const cors = require('cors');

const connectionString = "mongodb+srv://Gohel_Neel:Neel%40123@cluster0.ndexd.mongodb.net/Punjabi_Food";

mongoose.connect(connectionString , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        // Get all foods
        app.get('/punjabi', async (req, res) => { // Changed endpoint back to /punjabi
            try {
                const foods = await punjabi.find();
                res.send(foods);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Get food by ID
        app.get('/punjabi/:id', async (req, res) => {
            try {
                const food = await punjabi.findOne({ FoodID: req.params.id });
                if (!food) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send(food);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Create new food
        app.post('/punjabi', async (req, res) => {
            try {
                const food = new punjabi(req.body);
                const savedFood = await food.save();
                res.status(201).send(savedFood);
            } catch (error) {
                console.error(error);
                res.status(400).send({ message: 'Error creating food', error });
            }
        });

        // Update food by ID
        app.patch('/punjabi/:id', async (req, res) => {
            try {
                const food = await punjabi.findOne({ FoodID: req.params.id });
                if (!food) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                Object.assign(food, req.body);
                const updatedFood = await food.save();
                res.send(updatedFood);
            } catch (error) {
                console.error(error);
                res.status(400).send({ message: 'Error updating food', error });
            }
        });

        // Delete food by ID
        app.delete('/punjabi/:id', async (req, res) => {
            try {
                const result = await punjabi.deleteOne({ FoodID: req.params.id });
                if (result.deletedCount === 0) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send({ message: 'Food deleted successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
