const Summery = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="stats shadow w-full bg-orange-50">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Students</div>
          <div className="stat-value text-primary">23.5K</div>
          <div className="stat-desc">91% got hired after finished course.</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Instructor</div>
          <div className="stat-value text-secondary">100+</div>
          <div className="stat-desc">24/7 online and offline support.</div>
        </div>

        <div className="stat">
          <div className="stat-value">95%</div>
          <div className="stat-title">Positive Reviews</div>
          <div className="stat-desc text-secondary">on social media.</div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
