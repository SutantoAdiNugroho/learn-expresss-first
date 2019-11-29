const { user: users } = require("../../models")
const {get} = require("../../config")

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("users")
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
            .collection("users")
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
            .collection("users")
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
            .collection("users")
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
            .collection("users")
            .findOne({id : req.params.id})
            .then(result => {
                res.send({message : "Data successfully show", data: result})
            })
            .catch(error => {
                console.log(error);
            })
    },
    login: (req, res) => {
        const { body } = req;
        get()
            .collection("users")
            .findOne({ email: body.email, password: body.password })
            .then(response => {
                const { email, firstName } = response;
                res.status(200).json({
                    message: "Login successfull",
                    data: { email, firstName }
                });
            });
    }
};
