const express = require("express");
const actionsDb = require("../data/helpers/actionModel");
const projectsDb = require("../data/helpers/projectModel");

const router = express.Router();

// Get Single Action
router.get("/:actionId", (req, res) => {
  const { actionId } = req.params;
  actionsDb
    .get(actionId)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res
          .status(404)
          .json({ message: "a action with that ID does not exist" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: "the action info could not be retrieved" })
    );
});

// Get Actions List
router.get("/", (req, res) => {
  actionsDb
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err =>
      res.status(500).json({ error: "the actions info could not be retrieved" })
    );
});

//  Add a Action
router.post("/:project_id", (req, res) => {
  const { project_id } = req.params;
  const newAction = req.body;

  if (!newAction.description || !newAction.notes) {
    return res.status(400).json({
      message:
        "Please provide a description and notes...completed is optional param"
    });
  }

  actionsDb
    .insert({ project_id, ...newAction })
    .then(action => {
      console.log(res);

      res.status(201).json(action);
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "there was an error while saving your action" })
    );
});

// Edit a Action
router.put("/:actionId", (req, res) => {
  const { actionId } = req.params;
  const changedAction = req.body;

  if (!changedAction.description || !changedAction.notes) {
    return res
      .status(400)
      .json({ message: "please provide description and notes" });
  }
  actionsDb
    .update(actionId, changedAction)
    .then(updatedAction => {
      if (updatedAction === null) {
        res.status(404).join({ message: "no action with that id exists" });
      }
      res.status(200).json(updatedAction);
    })
    .catch(err =>
      res.status(500).json({ error: "there was an error updating the action" })
    );
});

// Delete Action
router.delete("/:actionId", (req, res) => {
  const { actionId } = req.params;
  actionsDb
    .remove(actionId)
    .then(deletedNum => {
      if (!deletedNum) {
        res.status(404).json({ message: "there was an error deleting action" });
      } else {
        res.status(200).json({ message: "action deleted" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "there was an error deleting the action" })
    );
});

module.exports = router;
