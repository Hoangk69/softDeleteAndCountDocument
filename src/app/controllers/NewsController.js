class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news');
    }
    // [GET] /news/:slug
    slug(req, res){
        console.log(req.params.slug)
        res.json(req.params.slug)
    }
    // [POST] /news
    send(req, res){
        res.render('news');
    }
}
module.exports = new NewsController;