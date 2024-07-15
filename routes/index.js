const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/insertData", dataController.insertData);
// router.get("/getProjects", dataController.getProjects);
router.put("/updateProject/:id", dataController.updateProject);
router.get("/getProjectsToUpdate/:id", dataController.getProjectsToUpdate);
router.delete("/deleteProject/:id", dataController.deleteProject);
router.get(
  "/getProjectsByGoogleId/:googleId",
  dataController.getProjectsByGoogleId
);

module.exports = router;
