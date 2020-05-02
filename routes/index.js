var express = require('express');
var router = express.Router();
var { User } = require('../db.js')

/* GET home page. */
router.get('/happy', function (req, res, next) {
  res.send({ message: "hye miss manya, please be happy" });
});

// router.get('/hi', (req, res) => {
//   new User({
//     name: "today", email: "today@gmail.com", password: "today"
//   }).save().then(save => {
//     console.log("data save", save)
//     res.send({ success: true, user: save })
//   }).catch(err => {
//     console.log("data not save", err)
//     res.send({ success: false, message: "data save failed" })
//   })
// })

router.post('/loveit', function (req, res, next) {
  var { id, sportname, months } = req.body;
  console.log(typeof (id))
  if (sportname == '' || months == '') {
    return res.status(403).send({
      message: "fields are empty",
      success: "false"
    })
  }
  else if (typeof id != "number") {
    return res.status(403).send({
      message: "expecting number,got string"
    })
  } else {
    new User({
      id, sportname, months
    }).save().then(user => {
      console.log("yess data saved successfully", user);
      res.status(200).send(req.body);
    }).catch(errorrr => {
      console.log("values can't save in database");
    })
  }
});

module.exports = router;
