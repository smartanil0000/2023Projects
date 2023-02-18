const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },

  numReviewss: {
    type: Number,
    default: 0,
  },

  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },

  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
});

exports.Product = mongoose.model("Product", productSchema);
