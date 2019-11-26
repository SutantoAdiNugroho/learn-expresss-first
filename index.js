const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = 5001

console.log(PORT)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post("/", (req, res) => {
    console.log(res.data);
    
    res.status(201).json({
        message: "New data user is added",
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
    })
})

app.put("/edit", (req, res) => {
    res.send({
        message: "New item is added",
        data: {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
        }
    })
})

app.get("/hello-get", (req, res) => {
    res.send("Hello im a learning express with get")
});

app.get("/success-create", (req, res) => {
    res.send("Your account has been created")
});

app.get("/checkin", (req, res) => {
    res.status(201).redirect("/success-create")
});
app.put("/hello-put", (req, res) => {
    const data = [1,2,3,5,1,2,3]
    res.send(data)
});
app.get("/:name", (req, res) => {
    res.send(`Nama saya adalah ${req.params.name}`)
});

app.listen(PORT, () => {
    console.log(`This on port : ${PORT}`)
})