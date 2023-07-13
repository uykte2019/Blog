const Course = require('../models/Course')

const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  // [GET] /news
  async index(req, res, next) {

    await Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)

    //res.render('home');
  }

  //[Get] /news/:search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
