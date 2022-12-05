import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10  bg-slate-900 text-white  mt-14">
        <div>
          <Link className="btn btn-ghost normal-case text-3xl font-bold" to="/">
            <h1 className="logo-text text-orange-700">
              Tech <span className="text-orange-900">School</span>
            </h1>
          </Link>
          <p>
            Tech School Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
          <Link to="/courses" className="link link-hover">
            Courses
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
