import express from "express";
import projectsRoutes from "./routes/projectsRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api/projects', projectsRoutes);



connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}) 