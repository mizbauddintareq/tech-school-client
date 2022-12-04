import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid md:grid-cols-5 gap-4 w-11/12 mx-auto mt-14">
      <div>
        <ul className="menu bg-base-100 w-56 lg:fixed">
          {courses?.map((course) => (
            <li key={course.id}>
              <Link>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 grid md:grid-cols-3 gap-4">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
