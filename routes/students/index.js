const express = require("express");
const router = express.Router();



router.get("/", require("./controller").getAll);
router.get("/:name", require("./controller").getByName);
router.post("/", require("./controller").postData);

router.delete("/:name", require("./controller").deleteByName);
router.put("/:id", require("./controller").updateById);





module.exports = router;