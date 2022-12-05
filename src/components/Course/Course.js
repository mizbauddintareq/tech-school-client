import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, shortInfo, badge, thumb } = course;
  return (
    <div>
      <div className="card h-full dark:bg-yellow-400 text-slate-900 shadow-2xl">
        <figure>
          <img src={thumb} alt="thumb-img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-warning uppercase">{badge}</div>
          </h2>
          <p>{shortInfo}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/course/${course.id}`}>See Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
