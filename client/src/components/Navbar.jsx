import '../styles/Navbar.css'; 
import userIcon from '../Images/UserIcon.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">TreeFund</h1>
      <div className="navbar-user">
        <img src={userIcon} alt="User" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
