import { Link } from 'react-router-dom';
import { useAuth } from './authContext'; // Corrected import path
import { useNavigate } from 'react-router-dom'; // Add useNavigate for redirection
import './Navbar.css';

const Navbar = () => {
  const { setLogin } = useAuth();
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Logout function to clear login state and redirect to login page
  const logout = () => {
    localStorage.removeItem('isLogin');
    setLogin(false); // Update login state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/technews">Tech News</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button onClick={logout}>Logout</button></li>  {/* Add Logout button */}
      </ul>
    </nav>
  );
};

export default Navbar;