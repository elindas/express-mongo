const { Todos } = require("../../models");

// Database Mongo
module.exports = {
    getAll: async (req, res) => {
        try {
            //Async Await Syntax
            
            // const result = await Todos.find({}).populate(
            //     "user",
            //     "userName email"
            // );

            //Promise Syntax
            Todos.find({})
                .populate("user")
                .then(result => {
                    res.status(200).send({
                        message: "Show data todos",
                        data: result
                    });
                });
        } catch (error) {
            console.log(error);
        }
    },
    addData: async (req, res) => {
        try {
            //Async Await Syntax

            // const result = await Todos.create(req.body);

            //Promise Syntax
            Todos.create(req.body).then(result => {
                res.status(200).send({ message: "Add new Todo", data: result });
            })
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        res.status(200).send({ message: "Todos route by id" });
    },
    getByUsername: (req, res) => {
        res.status(200).send({ message: "Todos route by username" });
    }
};
