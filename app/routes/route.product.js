const { findOneByCode, createProduct, findAllProduct, findOneProduct, updateProduct, deleteProduct, stockHistory, getStockHistories } =
  require("../controllers/product/ProductController");
const { findAllStockHistories } = require("../controllers/product/get.stock.history");

exports.routeProduct = (app) => {

  // Product
  app.post("/product/create", createProduct);

  app.get("/product/all", findAllProduct);

  app.get("/product/:itemId", findOneProduct);

  app.put("/product/:itemId", updateProduct);

  app.delete("/product/:itemId", deleteProduct);

  app.get("/product/", findOneByCode)

  // Stock history
  app.post("/stock-history", stockHistory)

  app.get("/stock-history", getStockHistories)
};
