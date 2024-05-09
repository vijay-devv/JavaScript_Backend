import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})


connectDB()












/*
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error " ,(error) => {
            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`app is listen port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR : " ,error)
        throw err
    }
})()

*/