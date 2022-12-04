import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, shortInfo, badge, thumb } = course;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img src={thumb} alt="thumb-img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary uppercase">{badge}</div>
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
