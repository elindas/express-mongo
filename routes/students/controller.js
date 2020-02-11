const { Students } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Students.find({});

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

            const result = await Students.create(data);

            res.status(200).send({
                message: "New data user is successfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
};

