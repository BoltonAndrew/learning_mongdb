/*jshint esversion:8*/
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {
    Task,
};