import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://shreyashpatil8078_db_user:quizapp1234@cluster0.xdn4pdq.mongodb.net/Quizapp")
    .then(() => {
        console.log("DB connected")
    })
}