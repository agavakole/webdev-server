import ModulesDao from "./dao";

export default function ModuleRoutes(app, db) {
  const dao = ModulesDao(db);

  const findModulesForCourse = (req, res) => {
    const { courseId } = req.params;
    res.json(dao.findModulesForCourse(courseId));
  };

  const createModuleForCourse = (req, res) => {
    const { courseId } = req.params;
    const module = { ...req.body, course: courseId };
    const newModule = dao.createModule(module);
    res.json(newModule);
  };

  const deleteModule = (req, res) => {
    const { moduleId } = req.params;
    dao.deleteModule(moduleId);
    res.sendStatus(200);
  };

  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const updatedModule = dao.updateModule(moduleId, req.body);

    if (!updatedModule) {
      res.sendStatus(404);
      return;
    }

    res.json(updatedModule);
  };

  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModuleForCourse);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
}
