import Project from "../models/Project.js";

export async function getProjects(req,res) {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getProjectById(req, res) {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
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

export async function updateProject(req, res) {
    try {
        const { title, description, technologies, githubLink, liveLink } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, { title, description, technologies, githubLink, liveLink }, { returnDocument: "after" });
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}