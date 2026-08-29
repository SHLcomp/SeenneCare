const asyncHandler = require("express-async-handler")

let products = [];

const getProducts = asyncHandler(async (req, res) => {
  //   res.status(200).json({
  //     msg: "Get all products",
  //   });
  if (products.length < 1) {
    return res.json({ msg: "No products available" });
  }
  res.send(products);
});

const createProduct =  asyncHandler(async (req, res) => {
  //   res.status(200).json({
  //     msg: "Add a product",
  //     id: req.query.id,
  //     name: req.query.name,
  //   });
  if (!req.query.name) {
    return res.status(400).send("Add a name");
  } else {
    let newProduct = {
      id: products.length + 1,
      name: req.query.name,
    };
    products.push(newProduct);
    return res.status(201).json(newProduct);
  }
});

const updateProduct =  asyncHandler( async (req, res) => {
  const product = products.find(
    (product) => Number(req.params.id) === product.id,
  );
  if (!product) {
    res.send("Product is not found");
  } else if (!req.query.name) {
    return res.status(400).send("Add a name");
  }
  product.name = req.query.name;
  return res.status(200).json(product);
});

const deleteProduct =  asyncHandler(async (req, res) => {
    const product = products.find((product)=> Number(req.params.id) === product.id);
    if (!product){
        res.send("Product is not found");
    }
    products.splice(product, 1);
    return res.status(200).json({
        msg: `Product ${product.name} was removed`
    })
});
module.exports = {  
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
