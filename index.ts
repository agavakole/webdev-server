import express from "express";
import cors from "cors";
import Hello from "./Hello";
import Lab5 from "./Lab5/index";
import db from "./Kambaz/Database";
import UserRoutes from "./Kambaz/Users/routes";

const app = express();
app.use(cors());
app.use(express.json());
Hello(app);
Lab5(app);
UserRoutes(app, db);
app.listen(process.env.PORT || 4000);
