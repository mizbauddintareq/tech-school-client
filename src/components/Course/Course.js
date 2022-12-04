import { FaLongArrowAltRight } from "react-icons/fa";

const Course = ({ course }) => {
  const { id, name, shortInfo, description, thumb, skills } = course;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img src={thumb} alt="thumb-img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{shortInfo}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
