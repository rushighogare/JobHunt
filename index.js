import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js"
import companyRoute from "./routes/companyRoute.js"
dotenv.config();                  //{} --> removed from bracket

const app=express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin: 'http//localhost:5173',
    credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})