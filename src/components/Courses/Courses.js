import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="bg-orange-50 dark:bg-slate-900">
      <div className="grid md:grid-cols-5 gap-4 w-11/12 mx-auto py-14  ">
        <div className="text-center">
          <ul className="menu lg:fixed dark:bg-slate-900 dark:text-white p-2 shadow-2xl">
            <h3 className="text-xl mb-4">Popular Courses:</h3>
            {courses?.map((course) => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`} className="text-center">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 text-black dark:text-white">
          <p className="text-center">Start Learning</p>
          <h1 className="text-center md:text-5xl text-2xl font-bold">
            Our Latest Courses
          </h1>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {courses?.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
