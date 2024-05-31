const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');

dotenv.config();


const indexRouter = require('./src/routes');
const joinRouter = require('./src/routes/join');

// const userRouter = require('./src/routes/user');
const { sequelize } = require('./database/models');


const app = express();
app.set('view engine', 'html');
nunjucks.configure('./src/views', {
    express: app,
    watch: true
});
//app.set('views', './src/views');
const port = 3003;

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.use('/',indexRouter);
app.use('/join', joinRouter);

//app.use("/", mainRouter);
//app.use('/user', userRouter);


app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`${port} open`);
  });