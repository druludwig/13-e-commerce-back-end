// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product)
// Products belongToMany Tags (through ProductTag)
ProductTag.hasMany(Product, {
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
ProductTag.hasMany(Tag, {
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
