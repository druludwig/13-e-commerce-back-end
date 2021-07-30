const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCats = await Category.findAll({
      include: [{model:Product}],
    });
    res.status(200).json(allCats);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getONEcat = await Category.findByPk(req.params.id, {
        include: [{model:Product}],
      });
    if (!getONEcat) {
      res.status(404).json({ message: 'No category found!' });
      return;
    }
    res.status(200).json(getONEcat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Reader.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
