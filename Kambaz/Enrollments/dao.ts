import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  const enrollUserInCourse = (userId, courseId) => {
    const existing = db.enrollments.find(
      (item) => item.user === userId && item.course === courseId
    );

    if (!existing) {
      db.enrollments.push({
        _id: uuidv4(),
        user: userId,
        course: courseId,
      });
    }
  };

  const unenrollUserFromCourse = (userId, courseId) => {
    db.enrollments = db.enrollments.filter(
      (item) => item.user !== userId || item.course !== courseId
    );
  };

  return { enrollUserInCourse, unenrollUserFromCourse };
}
