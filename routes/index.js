const express = require("express")
const router = express.Router();

const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const categoriesRoutes = require("./categoryRoutes");
const commentsRoutes = require("./commentRoutes");
const profileRoutes = require("./profileRoutes");
const storiesRoutes = require("./storyRoutes");
const videosRoutes = require("./videoRoutes");

router.use("/auth", authRoutes);
router.use("/api", adminRoutes);
router.use("/api", categoriesRoutes);
router.use("/api", commentsRoutes);
router.use("/api", profileRoutes);
router.use("/api", storiesRoutes);
router.use("/api", videosRoutes);

module.exports = router;