const HeroBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-orange-50 dark:bg-slate-900 dark:text-white">
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
            <button className="btn dark:bg-white dark:text-orange-900 bg-orange-900 border-0 font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
