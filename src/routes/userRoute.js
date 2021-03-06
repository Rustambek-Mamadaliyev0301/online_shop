const {userRegisterGetController,userLoginGetController, userLoginPostController, userSignUpPostController,userVerifyGetController} =  require("../controllers/userRouteControllers")
const router =  require("express").Router();

router.get("/reg",userRegisterGetController);
router.get("/login",userLoginGetController);
router.get("/verify/:id",userVerifyGetController);
router.post("/reg",userSignUpPostController);
router.post("/login",userLoginPostController);


module.exports = {
    path: "/users",
    router,
}