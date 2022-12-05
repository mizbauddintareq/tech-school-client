import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="md:w-9/12 mx-auto mt-14">
      <h1 className="text-center text-4xl">Welcome to Blogs</h1>
      {blogs.map((blog, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse  collapse-arrow mt-7 border border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            {blog?.question}
          </div>
          <div className="collapse-content">
            <p>{blog?.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
