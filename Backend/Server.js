const express = require('express');
const mongoose = require('mongoose');
const chinese = require('./models/Chinese');
const gujrati = require('./models/Gujrati');
const punjabi = require('./models/punjabii'); // Ensure the filename is correct
const southIndian = require('./models/SouthIndian');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectionString = "mongodb+srv://Gohel_Neel:Neel%40123@cluster0.ndexd.mongodb.net/Food_Management";

mongoose.connect(connectionString , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        const app = express();
        app.use(cors());
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        // Get all foods
        app.get('/chinese', async (req, res) => {
            try {
                const foods = await chinese.find();
                res.send(foods);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Get food by ID
        app.get('/chinese/:id', async (req, res) => {
            try {
                const food = await chinese.findOne({ FoodID: req.params.id });
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
        app.post('/chinese', async (req, res) => {
            try {
                const food = new chinese(req.body);
                const savedFood = await food.save();
                res.status(201).send(savedFood);
            } catch (error) {
                console.error(error);
                res.status(400).send({ message: 'Error creating food', error });
            }
        });

        // Update food by ID
        app.patch('/chinese/:id', async (req, res) => {
            try {
                const food = await chinese.findOne({ FoodID: req.params.id });
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
        app.delete('/chinese/:id', async (req, res) => {
            try {
                const result = await chinese.deleteOne({ FoodID: req.params.id });
                if (result.deletedCount === 0) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send({ message: 'Food deleted successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });
        app.get('/gujrati', async (req, res) => {
            try {
                const foods = await gujrati.find();
                res.send(foods);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Get food by ID
        app.get('/gujrati/:id', async (req, res) => {
            try {
                const food = await gujrati.findOne({ FoodID: req.params.id });
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
        app.post('/gujrati', async (req, res) => {
            try {
                const food = new gujrati(req.body);
                const savedFood = await food.save();
                res.status(201).send(savedFood);
            } catch (error) {
                console.error(error);
                res.status(400).send({ message: 'Error creating food', error });
            }
        });

        // Update food by ID
        app.patch('/gujrati/:id', async (req, res) => {
            try {
                const food = await gujrati.findOne({ FoodID: req.params.id });
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
        app.delete('/gujrati/:id', async (req, res) => {
            try {
                const result = await gujrati.deleteOne({ FoodID: req.params.id });
                if (result.deletedCount === 0) {
                    return res.status(404).send({ message: 'Food not found' });
                }
                res.send({ message: 'Food deleted successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });
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
        app.get('/southIndian', async (req, res) => {
            try {
                const foods = await southIndian.find();
                res.send(foods);
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Server error' });
            }
        });

        // Get food by ID
        app.get('/southIndian/:id', async (req, res) => {
            try {
                const food = await southIndian.findOne({ FoodID: req.params.id });
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
        app.post('/southIndian', async (req, res) => {
            try {
                const food = new southIndian(req.body);
                const savedFood = await food.save();
                res.status(201).send(savedFood);
            } catch (error) {
                console.error(error);
                res.status(400).send({ message: 'Error creating food', error });
            }
        });

        // Update food by ID
        app.patch('/southIndian/:id', async (req, res) => {
            try {
                const food = await southIndian.findOne({ FoodID: req.params.id });
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
        app.delete('/southIndian/:id', async (req, res) => {
            try {
                const result = await southIndian.deleteOne({ FoodID: req.params.id });
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
