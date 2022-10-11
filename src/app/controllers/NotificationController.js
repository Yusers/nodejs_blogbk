class NotificationController {
    index(req, res) {
        res.render('notification');
    }
}

module.exports = new NotificationController;