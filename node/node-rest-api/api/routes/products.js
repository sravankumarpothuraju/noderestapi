const express = require("express");

const router = express.Router();

router.get("/products", (req, res, next) => {
  res.status(200).json({
    message: "Handling get requests to /products"
  });
});

router.post("/products", (req, res, next) => {
  res.status(201).json({
    message: "Handling get requests to /products"
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an Id"
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product!"
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted  product!"
  });
});

module.exports = router;
