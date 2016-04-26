var router = require('express').Router();
var db = require('../db');

router.get('/ping', ping);
router.get('/notifications', get);
router.post('/notifications', post);

module.exports = router;

///////////////////////////

function ping (req, res) {
  res.status(200).json({ message: 'pong!' });
};

function get (req, res) {
  db.Notification.find({})
  .then(function (notifications) {
    res.status(200).json(notifications);
  });
};

function post (req, res) {
  if ( !req.body || !req.body.content ) {
    res.status(422).json({ errors: { invalid: 'Requires a `content` key.' }});
  } else {
    new db.Notification(req.body).save()
    .then(function (notification) {
      res.status(201).json(notification);
    })
    .catch(function (notification) {
      res.status(422).json(notification);
    });
  };
};
