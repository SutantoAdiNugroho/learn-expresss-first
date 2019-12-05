const { user: users } = require("../../models");
const { get, JWT_SECRET_KEY } = require("../../config");
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt = require("jsonwebtoken")

module.exports = {
  getAll: (req, res) => {
    get()
      .collection("users")
      .find({})
      .toArray()
      .then(result => {
        res.send({ message: "Get all datas", data: result });
      })
      .catch(error => {
        console.log(error);
      });
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
      .deleteOne({ id: req.params.id })
      .then(result => {
        res.send({ message: "Data successfully delete", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  addOne: async (req, res) => {
    const hash = await hashPassword(req.body.password);
    console.log(hash);

    get()
      .collection("users")
      .insertOne({ ...req.body, password: hash })
      .then(result => {
        console.log(result);

        res.status(201).json({
          message: "Data successfully added",
          data: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  updateOne: (req, res) => {
    get()
      .collection("users")
      .update({ id: req.body.id }, { $set: req.body })
      .then(result => {
        res.send({ message: "Data successfully update", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getOne: (req, res) => {
    get()
      .collection("users")
      .findOne({ id: req.params.id })
      .then(result => {
        res.send({ message: "Data successfully show", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  login: async (req, res) => {
    const { body } = req;
    get()
      .collection("users")
      .findOne({ email: body.email })
      .then(async response => {
        const compared = await comparedPassword(
          req.body.password,
          response.password
        );

        if (compared === true) {
          const { email, firstName, _id } = response;
          const token = jwt.sign({
            email, firstName, _id
          }, JWT_SECRET_KEY)
          res.status(200).json({
            message: "Login successfull",
            data: { token }
          });
        }
      });
  }
};
