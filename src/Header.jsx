import logo from './assets/logo.png';
import notification from './assets/notification.png';
import Greeting from './Greeting';

function Header( { name, surname } ) {
  

  return (
    <>
    <header className='header-tag'>
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
    <Greeting name={name} surname={surname}/>
    </>
  );
}

export default Header;
