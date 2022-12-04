import { createRef } from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
const ref = createRef();
const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { id, name, skills, thumb, description } = details;

  const options = {
    orientation: "landscape",
  };
  return (
    <div className="md:w-10/12 mx-auto mt-14">
      <div
        className="card lg:card-side bg-slate-900 text-white shadow-xl"
        ref={ref}
      >
        <figure>
          <img src={thumb} alt="Album" className="image-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}{" "}
            <ReactToPdf
              targetRef={ref}
              filename={name}
              options={options}
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <button onClick={toPdf} className="text-warning">
                  <FaDownload />
                </button>
              )}
            </ReactToPdf>
          </h2>
          <div>
            <p>{description}</p>
            <p className="my-4 text-2xl font-semibold">Skills you’ll gain</p>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/premium/${id}`} className="btn btn-warning">
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
