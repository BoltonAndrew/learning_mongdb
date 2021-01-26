/*jshint esversion:8*/
require('./db/connection');
const { Person } = require('./models/Person');
const { Task } = require('./models/Task');

const app = async () => {
    try {
    const person = new Person({ name: "Andy", email: "andy", age: "32", likesPizza: true });
    await person.save();
    const task1 = new Task({ taskName: "Feed the dog", completed: false });
    await task1.save();
    const task2 = new Task({ taskName: "Feed the cat", completed: true });
    await task2.save();

    const everything = await Person.find({});
    console.log(everything);
    } catch (error) {
        console.log(error);
    }
};

app();