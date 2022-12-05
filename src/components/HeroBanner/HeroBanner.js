const HeroBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/FmdTz03/1622955725643.png"
            className="max-w-sm rounded-lg"
          />
          <div>
            <p>Beginners welcome</p>
            <h1 className="text-5xl font-bold">Start coding in seconds</h1>
            <p className="py-6">
              Go ahead, give it a try. Our hands-on learning environment means
              you'll be writing real code from your very first lesson.
            </p>
            <button className="btn btn-warning font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
