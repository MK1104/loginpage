const authController = require("../controllers/authController");

const router = require("express").Router();

//Register
router.get("/register",(req,res) => {
    res.render("register")
});
router.post("/register", authController.registerUser);
//Login
router.post("/login", authController.loginUser);

module.exports = router;