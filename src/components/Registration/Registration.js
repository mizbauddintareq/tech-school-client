import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
  const { createUser, updateUserIfo } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.pass.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User has been created",
          showConfirmButton: false,
          timer: 1500,
        });

        handleUpdateUserIfo({ displayName: name, photoURL });
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

  const handleUpdateUserIfo = (info) => {
    updateUserIfo(info)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="py-14 bg-orange-50 dark:bg-slate-900">
      <div className="rounded-md lg:w-5/12 mx-auto p-8 bg-orange-50 dark:bg-slate-900 dark:shadow-md shadow-2xl dark:shadow-white">
        <h3 className="text-center text-2xl dark:text-white text-slate-900 font-semibold mb-4">
          Please register
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-md mx-auto">
            <label className="label">
              <span className="label-text dark:text-white text-slate-900">
                Full Name
              </span>
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
              <span className="label-text dark:text-white text-slate-900">
                Email Address
              </span>
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
              <span className="label-text dark:text-white text-slate-900">
                Password
              </span>
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
              <span className="label-text dark:text-white text-slate-900">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter PhotoURL"
              className="input input-bordered w-full max-w-md"
            />
            <label className="label mt-3">
              <span className="label-text-alt dark:text-white text-slate-900">
                Already have an account? Please{" "}
                <Link to="/login" className="underline text-orange-900">
                  Login
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control w-full max-w-md mx-auto mt-3">
            <button
              className="btn bg-orange-900 dark:bg-orange-500 border-0"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
