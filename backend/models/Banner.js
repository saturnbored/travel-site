const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    package_name: {
        type: String, 
        required: true,
    }, 
    package_image: {
        type: String,
    }
});

module.exports = { Banner: mongoose.model('banner', BannerSchema) };
