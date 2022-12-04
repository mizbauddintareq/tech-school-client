import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid md:grid-cols-5 gap-4 w-11/12 mx-auto mt-14">
      <div>
        <ul className="menu lg:fixed bg-slate-900 text-white">
          {courses?.map((course) => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
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
