import { Link } from "react-router-dom";

const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.pass.value;
    const photoURL = form.photo.value;

    console.log(name, email, password, photoURL);
  };
  return (
    <div className="mt-14">
      <div className="card-shadow lg:w-5/12 mx-auto p-8">
        <h3 className="text-center">Please register</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="pass"
              placeholder="Type your password"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter PhotoURL"
              className="input input-bordered w-full max-w-md"
            />
            <label className="label mt-3">
              <span className="label-text-alt">
                Already have an account? Please{" "}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-md mx-auto mt-3">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
