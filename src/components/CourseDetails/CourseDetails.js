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
    <div className="py-14 bg-orange-50 dark:bg-slate-900">
      <div className="md:w-10/12 mx-auto">
        <div
          className="card lg:card-side bg-orange-50 dark:bg-slate-900 dark:shadow-md shadow-2xl dark:shadow-white"
          ref={ref}
        >
          <figure>
            <img src={thumb} alt="Album" className="image-full" />
          </figure>
          <div className="card-body dark:text-white">
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
                  <button
                    onClick={toPdf}
                    className="text-orange-900 dark:text-orange-500"
                  >
                    <FaDownload />
                  </button>
                )}
              </ReactToPdf>
            </h2>
            <div>
              <p>{description}</p>
              <p className="my-4 text-2xl font-semibold">Skills you’ll gain:</p>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </div>
            <div className="card-actions justify-end">
              <Link
                to={`/premium/${id}`}
                className="btn bg-orange-900 dark:bg-orange-500 font-bold"
              >
                Get Premium Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
