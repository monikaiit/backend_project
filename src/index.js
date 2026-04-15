import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {
        path: "./env"
    }
);
connectDB();
// import express from "express";
// const app = express();

// function connectDB() {}


/*  db connect krne ki first approach thi ki mongoose.connect() ko directly call krke connect krte the, but ab humne ek async function banaya hai jisme hum mongoose.connect() ko call krke db se connect krte hai, aur agar connection successful hota hai to server start ho jata hai, aur agar connection me koi error aata hai to usko catch karke console me print kar dete hai. isse hume ye fayda hota hai ki a
gar db connection me koi problem hoti hai to hume turant pata chal jata hai aur hum usko fix kar sakte hai. 
(async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
        catch (error) {
            console.log("ERROR: ", error);
            throw error;

        }
})();*/
