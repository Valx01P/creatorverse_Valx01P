import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Creatorverse</h1>
        <p>Find and share your favorite creators around the world!</p>
        <div className="buttons">
          <Link to="/creators">VIEW ALL CREATORS</Link>
          <Link to="/upload">ADD A CREATOR</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
