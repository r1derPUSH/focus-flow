import logo from './assets/logo.png';
import notification from './assets/notification.png';

function Header() {
  return (
    <header>
      <div>
        <div className="flex-header">
          <div className="flex-logo">
            <img src={logo} alt="" className="logotype" />
            <h1 className="logo-text">Focus Flow</h1>
          </div>
          <div>
            <img src={notification} alt="" className="notification" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
