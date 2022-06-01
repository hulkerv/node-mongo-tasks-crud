import { Router } from "express";
import {
  addTask,
  renderEdit,
  editTask,
  deleteTask,
  toggleDone,
  renderIndex,
} from "../controllers/tasks.controllers";

const router = new Router();

// Index
router.get("/", renderIndex);

// Add task
router.post("/tasks/add", addTask);

// Toggle DONE field
router.get("/task/toggleDone/:id", toggleDone);

// Esdit task
router.get("/task/edit/:id", renderEdit);

router.post("/task/edit/:id", editTask);

// Delete Task
router.get("/task/delete/:id", deleteTask);


export default router;
