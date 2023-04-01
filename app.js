
const express = require('express');
const morgan = require('morgan');

const doctorRouter = require('./routes/doctorRouter');
const userRouter = require('./routes/userRouter');
const patiantRouter = require('./routes/patiantRouter');

const app = express();

//1. Middlewares
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/Main`));

app.use((req, res, next) =>{
    console.log('Hello From The Middleware 😂');
    next();
});
 
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next(); 
})

//2. route
app.use('/api/v1/doctors', doctorRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/patiants', patiantRouter);


module.exports = app;