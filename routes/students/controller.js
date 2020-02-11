const { Students } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Students.find({}).populate("user");

            res.status(200).send({
                message: "Show datas students",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    postData: async (req, res) => {
        try {
            const data = req.body;

            const result = await Students.create(data)

            res.status(200).send({
                message: "New data user is successfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    getByName: async (req, res) => {
        try {
            const result = await Students.findOne({
                name: req.params.name
            }).populate('user')

            res.status(200).send({ message: "Show by name", data: result });
        } catch (error) {
            console.log(error);
        }
    },
};

