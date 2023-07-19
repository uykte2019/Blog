module.exports = {
    // function convert array to object
    mutipleMongooseToObject: function(mongooseArrays) {
        return mongooseArrays.map(mongooseArray=> mongooseArray.toObject())
    },
    mongooseToObject: function(mongoose) {
        return mongoose? mongoose.toObject() : mongoose
    }
}