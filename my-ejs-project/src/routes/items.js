var express = require('express');
var router = express.Router();
const itemServices = require('../services/item_sevices')

/* GET list dashboard page. */
router.get('/', async function (req, res, next) {
  let items = await itemServices.listItems();
  res.render('pages/items/list', {
    pageTitle: "List Page",
    items
  });
});

/* add new items page. */
router.get('/add', function(req, res, next) {
  res.render('pages/items/add', { pageTitle: "Add page" });
});


// add - edit items
router.post('/add', async (req, res, next) => {
  const data = req.body;
  let result = await itemServices.saveItems(data);
  res.send(result)
})


module.exports = router;
