const Course = require('../models/Course');
const Progress = require('../models/Progress');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const progress = new Progress({
      user: req.user.id,
      course: courseId,
      progress: 0
    });
    await progress.save();
    res.status(201).json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
