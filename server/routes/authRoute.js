const express=require('express')
const passport = require('passport');
const user=require("../model/user.model")

const router=express.Router();

router.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}))

router.get("/google/callback",passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile')
})

router.get('/api/current_user',(req,res)=>{
    res.send(req.user)
})

router.get('/api/logout',(req,res)=>{
    req.logout();
    res.redirect('/')
})

module.exports=router