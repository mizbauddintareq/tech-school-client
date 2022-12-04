import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { id, name, skills, thumb, description } = details;
  return (
    <div className="md:w-10/12 mx-auto mt-14">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={thumb} alt="Album" className="image-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p>{description}</p>
            <p className="my-4 text-2xl font-semibold">Skills you’ll gain</p>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
