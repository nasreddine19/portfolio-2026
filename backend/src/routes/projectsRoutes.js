import express from "express";
import {getProjects} from "../controllers/projectsController.js";
import  {createProject} from "../controllers/projectsController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);

export default router;