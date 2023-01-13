const { Link } = require("../models/link");

exports.generate = async (req, res) => {
  const {link} = req.body

  if (!link) {
    return res.status(400).send("URL is required");
  }

  try {
    const redirect = await Link.create({link});
    res.status(201).json(redirect);
  } catch (error) {
    console.log(error);
    res.status(400).send("Error, try again");
  }
};

exports.redirect = async (req, res) =>  {
  const {id} = req.params;
  console.log("id:", id);
  console.log("req ",req.params)
  try {
    const redirect = await Link.findById(id);
    if (!redirect) {
      return res.status(404).send("Redirect not found");
    }
    const {link} =redirect;
    
    res.send(link)
  } catch (err) {
    res.status(500).send("Error, try again");
  }
}
exports.getAll = async (req, res) => {
  const result = await Link.find();
  res.send(result);
}
