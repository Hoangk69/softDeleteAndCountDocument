const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./Course')
const meRouter = require('./me')

function router(app){
    app.use('/news', newsRouter);
    app.use('/',siteRouter);
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    // app.get('/', (req, res) => {
    //     res.render('home')
    // })
    
    // app.get('/search', (req, res)=>{
    //     res.render('search')
    // })
    
    // app.post('/news',(req, res)=>{
    //     res.render('news')
    // })
}
module.exports = router;