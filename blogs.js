const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("list_blogs", {
    user: "Dominic Le",
    email: "ngocha2k.ln@gmail.com",
  });
});
router.get("/:id", function (req, res) {
  res.send("Get details blog with id: " + req.params.id);
});
router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Create new blog.");
});
router.put("/:id", function (req, res) {
  res.send("Edit blog with id: " + req.params.id);
});
router.delete("/:id", function (req, res) {
  res.send("Delete blog with id: " + req.params.id);
});

//export this router to use in our index.js
module.exports = router;
