const express = require('express');
const mongoose = require('mongoose');
const Food = require('./Food'); // Make sure this points to your Food model file
const bodyParser = require('body-parser');

const connectionString = "mongodb+srv://Gohel_Neel:Neel%40123@cluster0.ndexd.mongodb.net/Food_Management";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        const app = express();
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        // Get all foods
        app.get('/Food', async (req, res) => {
            try {
                const foods = await Food.find();
                res.send(foods);
            } catch (error) {
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Get food by ID
        app.get('/Food/:id', async (req, res) => {
            try {
                const food = await Food.findOne({ FoodID: req.params.id });
                if (!food) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send(food);
            } catch (error) {
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Create new food
        app.post('/Food', async (req, res) => {
            try {
                const food = new Food({ ...req.body });
                const savedFood = await food.save();
                res.status(201).send(savedFood);
            } catch (error) {
                res.status(400).send({ message: 'Error creating food', error });
            }
        });

        // Update food by ID
        app.patch('/Food/:id', async (req, res) => {
            try {
                const food = await Food.findOne({ FoodID: req.params.id });
                if (!food) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                Object.assign(food, req.body); // Update fields from request body
                const updatedFood = await food.save();
                res.send(updatedFood);
            } catch (error) {
                res.status(400).send({ message: 'Error updating food', error });
            }
        });

        // Delete food by ID
        app.delete('/Food/:id', async (req, res) => {
            try {
                const result = await Food.deleteOne({ FoodID: req.params.id });
                if (result.deletedCount === 0) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send({ message: 'Food deleted successfully' });
            } catch (error) {
                res.status(500).send({ message: 'Server error' });
            }
        });

        app.listen(3100, () => {
            console.log('Server is running on port 3100');
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
