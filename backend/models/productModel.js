const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    // Basic information
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    // },

    name: {
      type: String,
      required: [true, "Please add a product name"],
      trim: true,
    },

    slug: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    brand: {
      type: String,
      required: false,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Skincare", "Makeup"],
    },

    subCategory: {
      type: String,
      required: false,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // Pricing & inventory
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discountPrice: {
      type: Number,
      default: null,
      min: 0,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },

    // Images
    imageSrc: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    // Product information
    ingredients: {
      type: [String],
      default: [],
    },

    skinTypes: {
      type: [String],
      default: [],
    },

    concerns: {
      type: [String],
      default: [],
    },

    tags: {
      type: [String],
      default: [],
    },

    // Product-specific information
    shade: {
      type: String,
      default: null,
    },

    finish: {
      type: String,
      default: null,
    },

    coverage: {
      type: String,
      default: null,
    },

    availableShades: {
      type: Number,
      default: null,
      min: 0,
    },

    // Statistics
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    purchaseCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    // Status
    launchDate: {
      type: Date,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "out-of-stock"],
      default: "active",
    },

    eyebrow: {
      type: [String],
      default: [],
    },

    currency: {
      type: String,
      default: "JOD",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);