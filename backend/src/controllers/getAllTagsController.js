const { Tag } = require('../db')

const getAllTagsController = async() => {
    const tags = await Tag.findAll()

    return tags
}

module.exports = getAllTagsController