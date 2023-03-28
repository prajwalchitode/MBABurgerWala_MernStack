import express from "express";
import passport from "passport";
import  {getAdminStats, getAdminUsers, logout, myProfile}  from "../controllers/user.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/auth.js";



const router = express.Router();

router.get('/googlelogin', passport.authenticate('google',{

    scope:['profile']
}))


router.get('/login',passport.authenticate('google', {
    successRedirect:process.env.FRONTEND_URL,
}),
)

/// Logine route

router.get('/me',isAuthenticated, myProfile)
// passport.authenticate('google', {
//     scope:['profile'],
//     successRedirect: process.env.FRONTEND_URL,
// }



//   Logout routes ___________________________

router.get('/logout', logout)



router.get('/admin/users', isAuthenticated, authorizeAdmin, getAdminUsers )




router.get('/admin/stats', isAuthenticated, authorizeAdmin, getAdminStats)


export default router;