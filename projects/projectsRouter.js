const express = require("express");
const projectsDb = require("../data/helpers/projectModel");

const router = express.Router();

// Get Single Project
router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;
  projectsDb
    .get(projectId)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res
          .status(404)
          .json({ message: "a project with that ID does not exist" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "the project info could not be retrieved" })
    );
});

//  Get Single Projects Actions
router.get("/:projectsId/actions", (req, res) => {
  const { projectsId } = req.params;
  projectsDb
    .getProjectActions(projectsId)
    .then(project => {
      if (project.length) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          message:
            "a project with that id doesnt exist or does not have any actions with it"
        });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "the project info could not be retrieved" })
    );
});

// Get Projects List
router.get("/", (req, res) => {
  projectsDb
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "the projects info could not be retrieved" })
    );
});

//  Add a Project
router.post("/", (req, res) => {
  const newProject = req.body;
  if (!newProject.name || !newProject.description) {
    res
      .status(400)
      .json({
        message:
          "Please provide a name and description...completed is optional param"
      });
  }

  projectsDb
    .insert(newProject)
    .then(project => res.status(201).json(project))
    .catch(err =>
      res
        .status(500)
        .json({ error: "there was an error while saving your project" })
    );
});

module.exports = router;
