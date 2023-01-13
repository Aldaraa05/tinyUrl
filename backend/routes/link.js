const { Router } = require("express");
const { generate, redirect, getAll } = require("../controllers/link");

const router = Router();

router.get("/:id", redirect).post("/", generate);
router.get("/", getAll )

exports.linkRouter = router;