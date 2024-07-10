import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Creatorverse</h1>
        <p>Find and share your favorite creators around the world!</p>
        <div className="buttons">
          <a href="/creators">VIEW ALL CREATORS</a>
          <a href="/upload">ADD A CREATOR</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;