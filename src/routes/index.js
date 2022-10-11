const notificationRouter = require('./notification');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/notification', notificationRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;