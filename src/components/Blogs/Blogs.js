import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="py-14 bg-orange-50 dark:bg-slate-900 dark:text-white text-slate-900">
      <div className="md:w-9/12 mx-auto">
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
    </div>
  );
};

export default Blogs;
