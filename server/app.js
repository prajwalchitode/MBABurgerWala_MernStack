import express, { urlencoded } from "express"
import dotenv from 'dotenv'
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cors from 'cors'

const app=express();
export default app;

dotenv.config({
    path:"./config/config.env"
});

// express session
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,

    cookie: {
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? false : "none",
      },


}))



app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
app.use(cors());



app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({extended: true,}));
app.enable("trust proxy");
// 





connectPassport();


///  ROutes


import userRoute from "./routes/user.js"
import orderRoutes from "./routes/order.js"

import passport from "passport";


app.use("/api/v1", userRoute)
app.use("/api/v1", orderRoutes)

// Using error muddleware

app.use(errorMiddleware);