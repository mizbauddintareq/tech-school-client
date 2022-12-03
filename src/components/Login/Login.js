import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.pass.value;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
  };
  return (
    <div className="mt-14">
      <div className="card-shadow lg:w-5/12 mx-auto p-8">
        <h3 className="text-center">Please login</h3>
        <form onSubmit={handleSubmit}>
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

            <label className="label mt-3">
              <span className="label-text-alt">
                New to Tech-school Please{" "}
                <Link to="/register" className="underline">
                  Register
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-md mx-auto mt-3">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
