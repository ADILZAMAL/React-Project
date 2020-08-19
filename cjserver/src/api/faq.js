const express = require("express");
const joi = require("joi");
const monk = require("monk");
const router = express.Router();
const db = monk(process.env.MONGO_URI);
const faq = db.get("faq");

//Schema
const schema = joi.object({
  question: joi.string().trim().required(),
  answer: joi.string().trim().required(),
  video_url: joi.string().uri(),
});

//READ ALL
router.get("/", async (req, res, next) => {
  try {
    const items = await faq.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

//READ One
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await faq.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

//Create one
router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await faq.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

//update one
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await faq.findOne({
      _id: id,
    });
    const value = await schema.validateAsync(req.body);
    if (!item) return next();
    const update = await faq.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.json(update);
  } catch (error) {
    next(error);
  }
});

//Delete one
router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    await faq.delete({_id:id})
    res.json({
      message: "Success"
    })
  } catch (error) {
    next(error);
  }
});

module.exports = router;
