const Course = require('../modles/Course');
class MeController{

    // [GET] /me/stored/courses
    me(req, res, next){
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCourses]) =>{
                courses = courses.map((course) => course.toObject());
                res.render('./me/stored-courses', {deleteCourses, courses})
                
            })
        // Course.countDocumentsDeleted()
        //     .then(deleteCourses => res.render('./me/stored-courses', {deleteCourses}))
        //     .catch(next)

        // Course.find({})
        //     .then((courses) => {
        //         courses = courses.map((course) => course.toObject())
        //         res.render('./me/stored-courses', {courses})
        //     })
        //     .catch(next)
    }

    // [GET] /me/recycleBin/courses // get courses soft deleted
    recycleBin(req, res, next){
        Course.findDeleted({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject())
                res.render('./me/recycle-bin-courses', {courses})
            })
            .catch(next)
    }
}
module.exports = new MeController;