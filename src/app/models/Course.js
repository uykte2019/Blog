const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);


const Schema = mongoose.Schema

const Course = new Schema({
    _id: {type: Number},
    name: {type: String, required: true},
    description: {type: String, maxLength: 600},
    image: {type: String},
    videoId: {type: String, required: true},
    level: {type: String, maxLength: 255},
    slug: {type: String, slug: 'name', unique: true}
}, {
    _id: false,
    timestamps: true
})

//add plugin
mongoose.plugin(slug)

Course.plugin(AutoIncrement, {inc_field: '_id'})
Course.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true})

module.exports = mongoose.model('Course', Course)