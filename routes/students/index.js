const express = require("express");
const router = express.Router();



router.get("/", require("./controller").getAll);
router.get("/:name", require("./controller").getByName);
router.post("/", require("./controller").postData);



module.exports = router;