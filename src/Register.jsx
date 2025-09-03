import React from "react";
import avatar from "./assets/man-avatar.jpg";
import changeIcon from "./assets/icons8-change-50.png";
import avatar2 from "./assets/woman-avatar.png";
import { useState } from "react";

const Register = () => {
  const [img, setImg] = useState(avatar);
  const [isStarted, setIsStarted] = useState(false);

  const handleImgChange = () => {
    if (img == avatar) {
      setImg(avatar2);
    }
    if (img == avatar2) {
      setImg(avatar);
    }
  };

  if (!isStarted) {
    return (
      <section className="login-section">
        <div className="flexBox">
          <div className="login-text">
            <h1>Fill your profile</h1>
            <span className="span-login-text">
              Don't worry, you can always change it later, or you can skip it
              for now
            </span>
          </div>
          <div className="avatar">
            <div className="flex-img">
              <img className="avatar-login" src={img} alt="" />
              <img
                onClick={handleImgChange}
                className="avatar-change-logo"
                src={changeIcon}
                alt=""
              />
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
  }
};

export default Register;
