const { RealState } = require('../db')

const deleteRealState = async(id) => {
    await RealState.destory({ where: { id } })
}

module.exports = deleteRealState