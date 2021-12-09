function Projects() {
    return (
      <div>
        <section id="Projects-Apps" className="d-f fxd-c align-center p-1em">
          <h2 className="d-f fxd-r align-center p-1em">Projects/Apps</h2>

          <div className="card w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/vibe-check.png"}
              className="card-img-top"
              alt="Vibe Check"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">Vibe Check</h5>
              <p className="card-text">
                A playlist generator app that uses the Spotify API to generate a
                random playlist based on user input.
              </p>
              <a
                href="https://project-one-group-three.github.io/vibe-check/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/project-one-group-three/vibe-check"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>
          <div className="card m-t-1em w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/trivia.PNG"}
              className="card-img-top"
              alt="Timed Trivia"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">Timed Trivia Quiz</h5>
              <p className="card-text">
                A timed quiz that uses local storage to keep track of high
                scores, and shows strong JavaScript skills.
              </p>
              <a
                href="https://bwalters8910.github.io/timed-trivia-quiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/bwalters8910/timed-trivia-quiz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>

          <div className="card m-t-1em w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/starcrossed.PNG"}
              className="card-img-top"
              alt="Star Crossed"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">Star-Crossed</h5>
              <p className="card-text">
                A dating app for the literal stars. A fun app that allows users
                to create profiles and find potential matches. ***Still under construction***
              </p>
              <a
                href="https://star-crossed-dating.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/star-crossed-team/star-crossed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>

          <div className="card m-t-1em w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/weather-dashboard.png"}
              className="card-img-top"
              alt="Weather Dashboard"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">Weather Dashboard</h5>
              <p className="card-text">
                A weather app that uses the OpenWeather API to allow users to
                get the current weather and a 5 day forecast for any city.
              </p>
              <a
                href="https://bwalters8910.github.io/weather-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/bwalters8910/weather-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>

          <div className="card m-t-1em w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/techblog.PNG"}
              className="card-img-top"
              alt="Tech Blog"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">Tech Blog</h5>
              <p className="card-text">
                A message board style app that allows users to create profiles
                and make posts.
              </p>
              <a
                href="https://tech-blog-bmw.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/bwalters8910/tech-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>
          <div className="card w-33">
            <img
              src={process.env.PUBLIC_URL + "/images/NDLB.PNG"}
              className="card-img-top"
              alt="No Dork Left Behind"
            />
            <div className="card-body">
              <h5 className="card-title d-f jc-c">No Dork Left Behind</h5>
              <p className="card-text">
                A React app that combines Jeopardy and Wheel of Fortune to
                create a fun, interactive game where you are rewarded for
                guessing all the correct letters. Most answers pertain to
                specific jokes and terms from our bootcamp class 😊 ***Still under construction***
              </p>
              <a
                href="https://project-hero-jwh.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-20"
              >
                Go to app
              </a>
              <a
                href="https://github.com/Project-Hero/Project-Hero"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark ml-10"
              >
                Go to repo
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Projects;