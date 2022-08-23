const homeRouter = require('./home');
const loginRouter = require('./login');
const courseRouter = require('./course');
const teacherRouter = require('./teacher');
const studentRouter = require('./student');
const registerRouter = require('./register');

function route(app) {
    app.use('/course', courseRouter);
    app.use('/login', loginRouter);
    app.use('/register', registerRouter);
    app.use('/teacher', teacherRouter);
    app.use('/student', studentRouter);
    app.use('/', homeRouter);
}

module.exports = route;
