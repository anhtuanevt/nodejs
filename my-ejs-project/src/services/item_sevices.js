const itemModel = require('../models/item_models')

module.exports = {
    saveItems: async (data) => {
        if (data) {
            return await itemModel.create(data);
        }
    },

    listItems: async () => {
        return await itemModel.find({});
    } 
}