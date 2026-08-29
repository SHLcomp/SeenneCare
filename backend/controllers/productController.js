const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  let products = await Product.find(); //finding all of the products
  if (products.length < 1) {
    return res.json({ msg: "No products available" });
  }
  res.send(products);
});

// const createProduct = asyncHandler(async (req, res) => {
//   if (!req.query.name) {
//     return res.status(400)
//     throw new Error("Add a name"); // or throw new Error("Add a name")
//   } else {
//     let newProduct = await Product.create({
//       name: req.query.name,
//     });
//     // products.push(newProduct);
//     return res.status(201).json(newProduct);
//   }
// });

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);

  res.status(201).json(newProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  //   const product = products.find(
  //     (product) => Number(req.params.id) === product.id,
  //   );
  //   if (!product) {
  //     res.send("Product is not found");
  //   } else if (!req.query.name) {
  //     return res.status(400).send("Add a name");
  //   }
  //   product.name = req.query.name;
  //   return res.status(200).json(product);

  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  const newProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
  return res.status(200).json(newProduct)
});



const deleteProduct = asyncHandler(async (req, res) => {
//   const product = products.find(
//     (product) => Number(req.params.id) === product.id,
//   );
//   if (!product) {
//     res.send("Product is not found");
//   }
//   products.splice(product, 1);
//   return res.status(200).json({
//     msg: `Product ${product.name} was removed`,
//   });
const product = await Product.findByIdAndDelete(req.params.id);
if (!product){
    res.status(400)
    throw new Error("Product not found")
}
res.status(200).json({msg: `Product: ${product.name} and id: ${product.id} was removed`})

});
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
