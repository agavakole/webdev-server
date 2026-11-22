import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  const enrollUserInCourse = (userId, courseId) => {
    db.enrollments.push({
      _id: uuidv4(),
      user: userId,
      course: courseId,
    });
  };

  return { enrollUserInCourse };
}
