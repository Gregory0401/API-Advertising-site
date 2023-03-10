const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers");
const categories = ["sell", "lost-found", "in-good-hands"];
const birthdayRegexp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
const sex = ["male", "female"];

const noticeSchema = new Schema(
  {
    category: {
      type: String,
      enum: categories,
      required: [true, "Set name of category for notice"],
    },
    title: {
      type: String,
      required: [true, "Set title for notice"],
    },
    breed: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    sex: {
      type: String,
      enum: sex,
      default: "",
    },
    price: {
      type: Number,
      required: [
        function () {
          if (this.category === "sell") return this.category;
        },
        "Price required",
      ],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Owner is required"],
    },
    avatarURL: {
      type: String,
    },
    comments: {
      type: String,
      minlength: 5,
      maxlength: 120,
      default: "",
    },
    birthday: {
      type: String,
      maxlength: 10,
      trim: true,
      default: "00.00.0000",
    },
    cloudId: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

noticeSchema.post("save", handleSaveErrors);

const noticesSchema = Joi.object({
  category: Joi.string().valid("sell", "lost-found", "in-good-hands"),
  price: Joi.number().min(1).when("category", {
    is: "sell",
    then: Joi.required(),
    otherwise: Joi.optional(),
  }),
  breed: Joi.string(),
  name: Joi.string(),
  location: Joi.string(),
  sex: Joi.string(),
  comments: Joi.string(),
  title: Joi.string(),
  avatarURL: Joi.string(),
  birthday: Joi.string().pattern(new RegExp(birthdayRegexp)),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

const schemas = { noticesSchema, updateFavoriteSchema };
module.exports = { schemas, Notice, categories };
