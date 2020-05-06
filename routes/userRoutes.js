const { Router } = require("express")
const router = Router()
const config = require("config")
const bcrypt = require("bcrypt")
const User = require("../shema/userSchema")
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator")

router.get("", (req, res) => {
    res.send("<h1>Hello world</h1>")
})
router.post(
    "/register",
    [
        check("email", "Некоректный email").isEmail(),
        check("name", "Некоректное имя").notEmpty(),
        check("password", "Некоректный пароль").isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некоректные данные при регистрации"
                })

            }
            const { email, name, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                res.status(400).json({ message: "Такой пользователь уже существует" })
                return 1
            }
            const hashedPassword = await bcrypt.hash(password, config.get("hashedRounds"))
            const user = new User({ email, name, password: hashedPassword })
            await user.save()
            res.json({ message: "Пользователь создан" })
        } catch (e) {
            res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" })
        }
    })

router.post(
    "/login",
    [
        check("email", "Некоректный email").isEmail(),
        check("password", "Некоректный пароль").isLength({min:6})

    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:"Некоректные данные при входе"
            })
        }
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Такого пользовател не существует" })

        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Такого пользовател не существует" })
        }
        const token = jwt.sign(
            {userId:user._id},
            config.get("jwtSecret"),
            {expiresIn:"1h"}
            )
        res.json({token, userId:user._id})
    } catch (e) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте позже" })
    }

})
module.exports = router