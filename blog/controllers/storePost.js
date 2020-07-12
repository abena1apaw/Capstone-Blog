const BlogPost = require('../models/BlogPost.js')
const path  = require('path');

module.exports = async (req, res) => {
    try {
        let imageName;
        if (req.files) {
            const { image } = req.files;
            imageName = await(new Promise((resolve, reject) => {
                image.mv(path.resolve(__dirname, '..', 'public/img', image.name), err => {
                    if (err) return reject(err)
                    resolve(image.name);
                })
            }))
        }
        const newBlog = {
            ...req.body,
            userid: req.session.userId
        }
        if (imageName) newBlog.image = '/img/' + imageName;
        await BlogPost.create(newBlog)
        res.redirect('/')
    } catch (err) {
        console.log('err occuredd==>>', err)
        res.status(500).send(err);
    }
}