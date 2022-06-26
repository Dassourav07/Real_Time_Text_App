const express = require("express")
const router = express.Router();
router.get('/', (req, res)=> {
res.send({ response :"The server is running sucessfully!!"}).status(2000);
});


module.exports = router;
