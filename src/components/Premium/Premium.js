import { Link, useLoaderData } from "react-router-dom";

const Premium = () => {
  const details = useLoaderData();

  const { name, thumb } = details;
  return (
    <div className="py-14 bg-orange-50 dark:bg-slate-900">
      <div className="md:w-5/12 mx-auto">
        <div className=" dark:text-white text-slate-900">
          <h3 className="font-bold text-3xl my-4 text-center">
            You have successfully purses {name} course.
          </h3>
          <p>
            Think about the skills, talents, and life experiences that you have
            been through. Don’t feel like you have to teach a university-level
            profession to make money selling courses. The list of possible
            course topics is endless.
          </p>
        </div>
        <div className="card dark:shadow-md shadow-2xl dark:shadow-white image-full mt-8">
          <figure>
            <img src={thumb} alt="thumb" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Get al premium access form this course.</p>
            <div className="card-actions justify-end">
              <Link to="/" className="btn bg-white text-black">
                Go to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
