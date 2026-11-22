import UsersDao from "../Users/dao";
import EnrollmentsDao from "../Enrollments/dao";

export default function PeopleRoutes(app, db) {
  const usersDao = UsersDao(db);
  const enrollmentsDao = EnrollmentsDao(db);

  const canManagePeople = (req) => {
    const currentUser = req.session["currentUser"];
    return currentUser && (currentUser.role === "FACULTY" || currentUser.role === "ADMIN");
  };

  const findPeopleForCourse = (req, res) => {
    res.json(usersDao.findUsersForCourse(req.params.courseId));
  };

  const createPerson = (req, res) => {
    if (!canManagePeople(req)) {
      res.sendStatus(403);
      return;
    }

    const user = usersDao.createUser(req.body);
    enrollmentsDao.enrollUserInCourse(user._id, req.params.courseId);
    res.json(user);
  };

  const updatePerson = (req, res) => {
    if (!canManagePeople(req)) {
      res.sendStatus(403);
      return;
    }

    const updatedUser = usersDao.updateUser(req.params.userId, req.body);

    if (!updatedUser) {
      res.sendStatus(404);
      return;
    }

    res.json(updatedUser);
  };

  const deletePerson = (req, res) => {
    if (!canManagePeople(req)) {
      res.sendStatus(403);
      return;
    }

    usersDao.deleteUser(req.params.userId);
    res.sendStatus(200);
  };

  app.get("/api/courses/:courseId/users", findPeopleForCourse);
  app.post("/api/courses/:courseId/users", createPerson);
  app.put("/api/people/:userId", updatePerson);
  app.delete("/api/people/:userId", deletePerson);
}
