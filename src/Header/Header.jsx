import logo from "../assets/logo.png";
import avatar from "../assets/man-avatar.jpg";
import avatar2 from "../assets/woman-avatar.png";
import taskImg from "../assets/tasks-image.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isManOrWoman = localStorage.getItem("user-image");

  const handleRouter = () => {
    navigate("/completed");
  };

  return (
    <>
      <header className="header-tag">
        <div>
          <div className="flex-header">
            <div className="flex-logo">
              <img src={logo} alt="" className="logotype" />
              <h1 className="logo-text">Focus Flow</h1>
            </div>
            <div className="flex-header-images-rightSide">
              <img
                onClick={handleRouter}
                className="task-img"
                src={taskImg}
                alt=""
              />
              <img
                src={
                  isManOrWoman === "man"
                    ? avatar
                    : isManOrWoman === "woman"
                      ? avatar2
                      : avatar
                }
                alt=""
                className="avatar-header"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
