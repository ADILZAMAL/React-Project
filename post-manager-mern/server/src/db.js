const monk = require("monk");
const joi = require("joi");

const dburl = "localhost:27017/post-manager";
const db = monk(dburl);
db.then(() => {
  console.log("Data base is connected");
});

//Our database schema
const schema = joi.object({
  title: joi.string().trim().required(),
  message: joi.string().trim().required(),
});

module.exports = { db, schema };
