import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.pass.value;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log("hello");
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: `${errorCode}`,
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
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
      <div className=" shadow-xl rounded-md lg:w-5/12 mx-auto p-8 bg-slate-900 text-white">
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
            <button className="btn btn-warning" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="flex justify-around align-middle">
          <div>
            <div className="card shadow-xl">
              <button
                className="card-body text-4xl text-center"
                onClick={handleGoogleLogin}
              >
                <FaGoogle />
                <span className="text-sm">Google</span>
              </button>
            </div>
          </div>
          <div>
            <div className="card shadow-xl">
              <button
                className="card-body text-4xl"
                onClick={handleGithubLogin}
              >
                <FaGithub />
                <span className="text-sm">Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
