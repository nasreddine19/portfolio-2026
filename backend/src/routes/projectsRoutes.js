import express from "express";
import {getProjects} from "../controllers/projectsController.js";
import  {createProject} from "../controllers/projectsController.js";
import  {getProjectById} from "../controllers/projectsController.js";
import  {updateProject} from "../controllers/projectsController.js";
import  {deleteProject} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject)


export default router;