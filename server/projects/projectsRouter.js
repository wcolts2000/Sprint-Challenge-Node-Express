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
    return res.status(400).json({
      message:
        "Please provide a name and description...completed is optional param"
    });
  }
  if (newProject.name.length > 128) {
    return res
      .status(400)
      .json({ message: "name can not be over 128 characters" });
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

// Edit a Project
router.put("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const changedProject = req.body;

  if (!changedProject.name || !changedProject.description) {
    return res
      .status(400)
      .json({ message: "please provide name and description" });
  }
  if (changedProject.name.length > 128) {
    return res
      .status(400)
      .json({ message: "name can not be over 128 characters" });
  }
  projectsDb
    .update(projectId, changedProject)
    .then(updatedProject => {
      if (updatedProject === null) {
        res.status(404).join({ message: "no project with that id exists" });
      }
      res.status(200).json(updatedProject);
    })
    .catch(err =>
      res.status(500).json({ error: "there was an error updating the project" })
    );
});

// Delete Project
router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;
  projectsDb
    .remove(projectId)
    .then(deletedNum => {
      if (!deletedNum) {
        res
          .status(404)
          .json({ message: "there was an error deleting project" });
      } else {
        res.status(200).json({ message: "Project deleted" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "there was an error deleting the project" })
    );
});

module.exports = router;
