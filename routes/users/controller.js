const { Users } = require("../../models");
const { hashPassword, comparedPassword } = require("../../helpers");
const jwt= require("jsonwebtoken")
module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});

            res.status(200).send({ message: "Show datas users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getById: (req, res) => {
        const { id } = req.params;

        const filterById = users.filter(item => {
            if (item.id === parseInt(id)) {
                return item;
            }
        });

        res.status(200).send({
            message: `Data user with id ${id}`,
            data: filterById[0]
        });
    },

    postData: async (req, res) => {
        try {
            const data = req.body;
            const file = req.file;
            const hash = await hashPassword(req.body.password);

            const result = await Users.create({
                ...data,
                avatar: file === undefined ? null : file.path,
                password: hash
            });

            res.status(200).send({
                message: "New data user is successfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        try {
            const result = await Users.findOne({ email: req.body.email });

            const compared = await comparedPassword(
                req.body.password,
                result.password
            );

            if (compared === true) {
                const {email, id, userName, firstName}= result

                const token = jwt.sign({email, id, userName, firstName}, "SECRET")

                res.status(200).send({
                    message: "You are successfully logged in",
                    token: token
                });
            } else {
                res.status(403).send({
                    message: "You are not an user, please register first"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
};
