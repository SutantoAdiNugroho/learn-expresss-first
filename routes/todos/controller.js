const { todo: todos } = require("../../models");
const {get} = require("../../config")

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("todos-data")
            .find({})
            .toArray()
            .then(result => {
                res.send({message : "Get all datas", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    getById: (req, res) => {
        const findOne = todos.todo.find(item => {
            return item.id === Number(req.params.id);
        });

        res.send(findOne);
    },
    deleteOne: (req, res) => {
        get()
            .collection("todos-data")
            .deleteOne({id : req.params.id})
            .then(result => {
                res.send({message : "Data successfully delete", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    addOne: (req, res) => {
        get()
            .collection("todos-data")
            .insertOne(req.body)
            .then(result => {
                res.send({message : "Data successfully added", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    updateOne: (req, res) => {
        get()
            .collection("todos-data")
            .update({id : req.body.id}, {$set : (req.body)})
            .then(result => {
                res.send({message : "Data successfully update", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    getOne: (req, res) => {
        get()
            .collection("todos-data")
            .findOne({id : req.params.id})
            .then(result => {
                res.send({message : "Data successfully show", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    getByEmail: (req, res) => {
        get()
            .collection("todos-data")
            .find({ email: req.params.email })
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas by email", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },
};
