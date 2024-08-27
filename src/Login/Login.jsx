import React, { useState } from "react";
import fb from "../assets/fb.png";
import git from "../assets/git.png";
import google from "../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };

  return (
    <div className="container-login">
      <h1>Your Logo</h1>
      <form action="">
        <h3>Login</h3>
        <div className="email">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="password">
          <label htmlFor="">Password</label>
          <div className="password-input">
            <input type={show ? "text" : "password"} placeholder="Password" />
            <span onClick={togglePasswordVisibility} className="eye-icon">
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <a href="">Forget Password?</a>
        </div>
        <input type="submit" value="Sign in" />
      </form>
      <div className="continue">
        <p>or continue with</p>
      </div>
      <div className="social-media-accounts">
        <div className="btns">
          <button>
            <img src={google} alt="" />
          </button>
          <button>
            <img src={git} alt="" />
          </button>
          <button>
            <img src={fb} alt="" />
          </button>
        </div>
        <p>
          Don't have an account yet?{" "}
          <span>
            <a href="">Register for free</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
