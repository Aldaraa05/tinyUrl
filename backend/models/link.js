const { Schema, model } = require("mongoose");

const linkSchema = new Schema({
  link: {
    type: String,
    required: [true, "url bichne uu"],
  },
  // shortLink: {
  //   type: String,
  // },
});

// linkSchema.pre("save", function (next) {
//   this.linkSchema = nanoid(4);
//   next();
// });
const Link = model("link", linkSchema);
exports.Link = Link;
