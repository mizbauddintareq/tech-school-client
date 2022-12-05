const HeroBanner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero min-h-screen my-10 md:my-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/FmdTz03/1622955725643.png"
            alt="img"
            className="md:max-w-md rounded-lg"
          />
          <div>
            <p>Beginners welcome</p>
            <h1 className="md:text-5xl text-2xl font-bold">
              Start coding in seconds
            </h1>
            <p className="py-6">
              Go ahead, give it a try. Our hands-on learning environment means
              you'll be writing real code from your very first lesson.
            </p>
            <button className="btn bg-orange-900 border-0 font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
