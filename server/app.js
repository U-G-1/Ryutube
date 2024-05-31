// const { Router } = require('express');
const express = require('express');


// const userRouter = require('./src/routes/user');
const { sequelize } = require('./database/models');


const app = express();
const port = 3003;

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.get('/',(req, res)=>{
    res.send('Hello, express');
});

//app.use("/", mainRouter);
//app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`${port} open`);
  });