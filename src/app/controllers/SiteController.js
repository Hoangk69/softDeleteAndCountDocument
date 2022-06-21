const Course = require('../modles/Course');
class SiteController{
    // [GET] /
    index(req, res, next){
        // get data from DB by callback
        /*Course.find({}, (err, courses)=>{
            if(!err){
                courses = courses.map((course) => course.toObject());
                res.render('home', {courses});
            }else{
                next(err);
            }
        })*/
        Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('home', {courses});
            })
            .catch(err => next(err));
    }
    
    // [GET] /search
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController;