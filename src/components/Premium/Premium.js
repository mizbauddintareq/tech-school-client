import { Link, useLoaderData } from "react-router-dom";

const Premium = () => {
  const details = useLoaderData();

  const { name, thumb } = details;
  return (
    <div className="md:w-5/12 mx-auto mt-14">
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={thumb} alt="thumb" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>You have successfully purses this course.</p>
          <div className="card-actions justify-end">
            <Link to="/" className="btn bg-white text-black">
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
