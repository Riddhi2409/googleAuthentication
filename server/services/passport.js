const passport = require('passport');
const GoogleStrategy=require("passport-google-oauth20").Strategy;
require('dotenv').config();
const mongoose=require('mongoose')
const user=require('../model/user.model')


passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done)=>{
    const data=await user.findById(id)
    if (data){
        done(null,data)
    }
})

passport.use(
    new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
      },
      async(accessToken, refreshToken, profile,done)=>{
        console.log("profile token",profile)
        const existingUser= await user.findOne({userId: profile.id})
        if (existingUser) {
            console.log('Data already exists:', existingUser);
            return done(null,existingUser)
        } 
        else {
            const newData=new user({
                    userId: profile.id,
                    userName: profile.displayName,
                    email:profile.emails[0].value
                })
                const data= await newData.save()
                return done(null,newData)

            }
            })
  )