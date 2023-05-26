const express=require('express');
const cors=require('cors');
require('dotenv').config();
const connectdb=require('./mongodb/connect');
const authRoute=require('./routes/authRoute');
const passport = require('passport');
const cookieSession=require('cookie-session')
require('./services/passport')
const app=express();
app.use(
  cookieSession({
      maxAge:30 * 24 * 60 * 60 *1000,
      keys:[process.env.COOKIES_KEY]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(cors());
app.use(express.json({ limit: '50mb' }))

app.use('/auth',authRoute);

const port=8080;

const startServer = async () => {
    try {
      connectdb.connectdb(process.env.MONGO_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();


app.get('/',(req,res)=>{
    res.send('hello world')
})
