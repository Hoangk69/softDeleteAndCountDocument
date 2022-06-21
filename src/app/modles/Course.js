const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String },
    description: { type: String },
    img: { type: String},
    slug: { type: String, slug: "name", unique: true},
    youtubeId: {type: String}
},{ collection: 'courses',
    timestamps: true
});

//add plugins (soft delete)
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true
});

module.exports = mongoose.model('Course', Course);