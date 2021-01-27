/*jshint esversion:8*/
const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    age: {
        type: Number,
        required: true
    },
    likesPizza: {
        type: Boolean,
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = {
    Person,
};