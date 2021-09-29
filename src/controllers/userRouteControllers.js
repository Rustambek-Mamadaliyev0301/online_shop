const users =  require("../models/userModel");
const {signUpValidation,loginValidation} = require("../modules/validations");
const {generateHash}=require("../modules/bcrypt");
const {email:sendMail} = require("../modules/email");
const { isValidObjectId } = require("mongoose");
const {token,createToken} = require("../modules/jwt")

module.exports = class userRouteCountroller {
	static async userRegisterGetController(req, res) {
		res.render("reg");
	}
	static async userLoginGetController(req, res) {
		res.render("login");
	}
	static async userSignUpPostController(req, res) {
		try {
			const { name, email, password } = await signUpValidation(req.body);

			const user = await users.create({
				name,
				email,
				password: await generateHash(password),
			});

			// await sendMail(
			// 	email,
			// 	"Iltimos pochtangizni tasdiqlang",
			// 	'Pochtangizni tasdiqlash uchun link',
			// 	`<a href="http://localhost:8000/users/verify/${user._id}"/>Tasdiqlash</a>`
			// );

			console.log(`http://localhost:8000/users/verify/${user._id}`);

			res.redirect("/users/login/");
			// res.redirect("/login");
		} catch (error) {
			console.log(error);
			res.render("reg", {
				error: error + "",
			});
		}
	}
	static async userVerifyGetController(req,res){
	try{
		const id = req.params.id;
		if(!id) throw new Error("Verification kalit xato");

if(!isValidObjectId(id)) throw new Error("Verification kalit xato");

		const user = await users.findOne({
			_id:id,
		});

// console.log(user);

if(!user) throw new Error("Verification kalit xato");

await users.updateOne({
	_id: id,
},
{
	isVerified:true,
}
);

res.cookie("token",await createToken({
	id: user_id,
})).redirect("/");


	}
	catch(error){
		res.render("login",{
			error: error + "",
		});
	}
}

static async userLoginPostController(req, res) {
	try{
const {email,password} =loginValidation(req.body);
	}
	catch(error){

	}
}



};