import React from 'react'
import "./Home.css";

export const Home = ({Download, Googleplay}) => {
  return (
    <div className="body">
      <div className="page">
        <div class="title">instagram</div>
        <form>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />

          <a href="instagramhomepage.html" target="_blank">
            <h1 class="log">Log in</h1>
          </a>
        </form>
        <div class="option">OR</div>
        <div class="fblink">
          <span class="fab fa-facebook"></span>
          <a href="#">Log in with Facebook</a>
        </div>
        <div class="forget-id">
          <a href="#">Forgot password?</a>
        </div>
        <div class="signup">
          <p>
            Dont have an account?<a href="#">Sign up</a>
          </p>
        </div>
        <p>Download the App</p>
        <div class="photos">
          <img
            src={Download}
            alt="download app"
            height="50px"
          />
          <img src={Googleplay} alt="googleplay" height="50px" />
        </div>
      </div>
    </div>
  );
}
