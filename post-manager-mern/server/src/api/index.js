const express = require("express");
const { db, schema } = require("../db");
const router = express.Router();

const collection = db.get("post-manager");

//Read all the post
router.get("/", async (req, res, next) => {
  try {
    const post = await collection.find({});
    res.status(100).json(post);
  } catch (error) {
    next(error);
  }
});

//Create Post
router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body); //joi is schema validator thats all
    const inserted = await collection.insert(value);
    res.status(201).json(inserted);
  } catch (error) {
    next(error);
  }
});

//Update one
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await collection.findOne({
      _id: id,
    });
    const value = await schema.validateAsync(req.body);
    if (!item) return next();
    const updated = await collection.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.status(201).json(updated);
  } catch (error) {
    next(error);
  }
});

//Delete one
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await collection.findOneAndDelete({ _id: id });
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
