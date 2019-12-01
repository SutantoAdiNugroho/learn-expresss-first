const { todo: todos } = require("../../models");
const {get} = require("../../config")
const objectId = require("mongodb").ObjectId

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
        const { id } = req.params;
        get()
            .collection("todos-data")
            .deleteOne({ _id: objectId(id) })
            .then(result => {
                res.send({message : `Data successfully delete with id ${id}`, data: result})
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
        const {id} = req.params;
        get()
            .collection("todos-data")
            .updateOne({ _id : objectId(id) }, {$set : (req.body)})
            .then(result => {
                res.send({message : `Data successfully update with id ${id}`, data: result})
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
    }
};
