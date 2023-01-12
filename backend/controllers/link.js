const { Link } = require("../models/link");

exports.getLink = async (req, res) => {
  const body = req.body;
  result = await new Link(body).save();
};
