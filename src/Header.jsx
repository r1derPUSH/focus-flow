import logo from "./assets/logo.png";
import notification from "./assets/notification.png";
import Greeting from "./Greeting";
import avatar from "./assets/man-avatar.jpg";
import avatar2 from "./assets/woman-avatar.png";

function Header({ name, surname }) {
  const isManOrWoman = localStorage.getItem("user-image");
  return (
    <>
      <header className="header-tag">
        <div>
          <div className="flex-header">
            <div className="flex-logo">
              <img src={logo} alt="" className="logotype" />
              <h1 className="logo-text">Focus Flow</h1>
            </div>
            <div>
              <img
                src={
                  isManOrWoman === "man"
                    ? avatar
                    : isManOrWoman === "woman"
                    ? avatar2
                    : avatar
                }
                alt=""
                className="notification"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
