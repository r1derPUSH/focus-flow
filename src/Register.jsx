import React from "react";
import avatar from "./assets/man-avatar.jpg";

const Register = () => {
  return (
    <section className="login-section">
      <div className="flexBox">
        <div className="login-text">
          <h1>Fill your profile</h1>
          <span className="span-login-text">
            Don't worry, you can always change it later, or you can skip it for
            now
          </span>
        </div>
        <div className="avatar">
          <div className="flex-img">
            <img className="avatar-login" src={avatar} alt="" />
          </div>
          <div className="change-image-handler"></div>
        </div>
        <div className="login-input-fields">
          <div className="name">
            <input
              className="name-input-login"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            ></input>
          </div>
          <div className="surname-label">
            <input
              className="surname-input-login"
              placeholder="Surname"
              type="text"
              id="surname"
              name="surname"
              required
            ></input>
          </div>
        </div>
        <div className="start-buttons">
          <button className="skip-btn">Skip</button>
          <button className="start-btn">Start</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
