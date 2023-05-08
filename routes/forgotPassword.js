import express from "express"
import UserModel from "../models/userSchema.js";
import forgotPasswordEmail from "../utils/emailForgotPassword.js";

export const forgotPasswordRouter = express.Router()

forgotPasswordRouter.route("/")
    .post(async (req, res) => {
        const { email } = req.body
        try {
            const data = await UserModel.findOne({ email })
            if (data) {
                const userId = data._id
                const name = data.name
                const email = data.email
                const url = `http://localhost:3000/reset-password/${userId}`
                forgotPasswordEmail(email, url, name)
            }
            else {
                return res.status(400).json({ message: "We cannot find this email address" })
            }
            return res.send({ message: "Success!" })
        } catch (error) {
            console.log(error)
        }
    })