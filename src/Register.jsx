import React from "react";
import avatar from "./assets/man-avatar.jpg";
import changeIcon from "./assets/icons8-change-50.png";
import avatar2 from "./assets/woman-avatar.png";
import { useState } from "react";
import MainContent from "./MainContent";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1e1e1e";
  }, []);

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [styles, setStyles] = useState(false);
  const [img, setImg] = useState(avatar);
  const [isStarted, setIsStarted] = useState(false);
  let kindOfAvatar = "";

  const handleImgChange = () => {
    if (img == avatar) {
      setImg(avatar2);
    }
    if (img == avatar2) {
      setImg(avatar);
    }
  };

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurnameValue(e.target.value);
  }

  if (img == avatar) {
    kindOfAvatar = "man";
  } else if (img == avatar2) {
    console.log("woman worked out");
    kindOfAvatar = "woman";
  }

  // console.log(kindOfAvatar);
  async function handleStart() {
    if (!nameValue.trim()) {
      alert("bad :(");
      return;
    }
    localStorage.setItem("name", nameValue);
    localStorage.setItem("surname", surnameValue);
    localStorage.setItem("user-image", kindOfAvatar);
    setStyles(true);
    await wait(1500);
    setIsStarted(true);
  }

  async function handleSkip() {
    if (!nameValue.trim()) {
      // alert("Bad surname! :(");
      // return;
    }
    localStorage.setItem("name", nameValue || "Guest");
    localStorage.setItem("user-image", kindOfAvatar);
    setStyles(true);
    await wait(1500);
    setIsStarted(true);
  }

  if (!isStarted) {
    // console.log("worked out if");
    return (
      <section
        className={!styles ? "login-section" : "login-section-activated"}
      >
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
                value={nameValue}
                onChange={handleChangeName}
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
                value={surnameValue}
                onChange={handleChangeSurname}
                required
              ></input>
            </div>
          </div>
          <div className="start-buttons">
            <button onClick={handleSkip} className="skip-btn">
              Skip
            </button>
            <button onClick={handleStart} className="start-btn">
              Start
            </button>
          </div>
        </div>
      </section>
    );
  } else if (isStarted) {
    console.log("wordked out else if");
    return <MainContent name={nameValue} surname={surnameValue} />;
  }
};

export default Register;
