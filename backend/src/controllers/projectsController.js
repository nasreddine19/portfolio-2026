import Project from "../models/Project.js";

export async function getProjects(req,res) {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createProject(req, res) {
    try {
        const {title, description, technologies, githubLink, liveLink } = req.body;
        const project = new Project({title, description, technologies, githubLink, liveLink });
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ message: error.message });
    }
}