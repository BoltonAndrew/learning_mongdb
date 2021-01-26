/*jshint esversion:8*/
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {
    Task,
};