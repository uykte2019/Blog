class SiteController {

    // [GET] /news
    index(req, res) {
        res.render('home')
    }

    //[Get] /news/:search
    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController

