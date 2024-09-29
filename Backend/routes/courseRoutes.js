const express = require("express");
const { getCourses, enrollCourse } = require("../controllers/courseController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/courses", getCourses);
router.post("/enroll", authMiddleware, enrollCourse);

module.exports = router;
