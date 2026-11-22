import EnrollmentsDao from "./dao";

export default function EnrollmentRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enroll = (req, res) => {
    const { uid, cid } = req.params;
    dao.enrollUserInCourse(uid, cid);
    res.sendStatus(200);
  };

  const unenroll = (req, res) => {
    const { uid, cid } = req.params;
    dao.unenrollUserFromCourse(uid, cid);
    res.sendStatus(200);
  };

  app.post("/api/users/:uid/courses/:cid", enroll);
  app.delete("/api/users/:uid/courses/:cid", unenroll);
}
