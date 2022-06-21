const Course = require('../modles/Course');
class CourseController{
    // [GET] /courses/:slug    detail course
    detail(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                course = course.toObject();
                res.render('./courses/detail',{course})
            })
            .catch(next)
    }

    // [GET] /courses/creat   // display form add course
    creat(req, res, next){
        res.render('./courses/creat')
    }
    
    // [POST] /courses/store    // handle add course
    store(req, res, next){
        const course = new Course({...req.body})
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err))
    }
    
    // [GET] /courses/:id/edit   // display form update
    edit(req, res, next){
        Course.findById({_id: req.params.id})
            .then(course => {
                course = course.toObject();
                res.render('./courses/edit', {course});
            })
            .catch(next)
        // Course.updateOne({_id: req.prams._id}, {...req.body})
        //     .then()
    }

    // [PUT] /courses/:id   handle update
    update(req, res, next){
        //res.json(req.body)
        Course.updateOne({_id: req.params.id}, {...req.body})
            .then(() => {
                res.redirect('/me/stored/courses')
                //res.json(req.body)
            })
            .catch(next)
    }
    
    // [DELETE]  /courses/:id  // soft delete
    softDelete(req, res, next){
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /courses/:id/hard
    hardDelete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /:id/restore  
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}
module.exports = new CourseController;