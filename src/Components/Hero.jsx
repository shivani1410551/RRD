import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="text-area">
            <h1 className="hero-heading">
              A Refreshing Tradition
              <span> Since 1950</span>
            </h1>
            <h2 className="hero-subHeading">
              All Natural. All Clean. All Fresh. <br />
              <span>It’s a fruit in a bottle</span>
            </h2>

            <button className="btn">Shop now</button>
          </div>
          {/* Form area */}
          <div className="form-area">
            <div className="form-container">
              <p className="sign-in-text">Sign in with</p>
              <div className="social-login">
                <span aria-label="Facebook">
                  <FaFacebook />
                </span>
                <span aria-label="Twitter">
                  <FaTwitter />
                </span>
                <span aria-label="GitHub">
                  <FaGithub />
                </span>
              </div>
              <div className="divider">
                <p>
                  <span>Or</span>
                </p>
              </div>
              <form action="" aria-labelledby="signup-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  aria-required="true"
                />
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-required="true"
                  aria-describedby="email-help"
                  placeholder="Email"
                />
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  aria-required="true"
                  placeholder="Password"
                />
                <br />
                <button type="submit" className="submitBtn">
                  Submit
                </button>
              </form>
              <div className="form-footer">
                <p>
                  {" "}
                  By signing up you agree to our <span>
                    Terms, Data Policy
                  </span>{" "}
                  and <span>Cookie Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
