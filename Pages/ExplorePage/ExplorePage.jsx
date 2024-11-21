

import './ExplorePage.css';
import car from './img/car.png';
import Girl_blond from './img/Girl_blond.png';
import Windows from './img/Windows.png';
import man from './img/man.png';
import japan from './img/japan.png';
import doroga from './img/doroga.png';
import man_with_cap from './img/man_with_cap.png';
import zontik from './img/zontik.png';
import Girl_brunet from './img/Girl_brunet.png';
import Gory from './img/Gory.png';

const images = [
  car,
  Girl_blond,
  { src: Windows, tall: true },
  man,
  japan,
  { src: doroga, tall: true },
  man_with_cap,
  zontik,
  Girl_brunet,
  Gory,
];

function Explore() {
  return (
    <div>
      <div className="explore-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={typeof img === 'string' ? img : img.src}
            alt={`Random ${index}`}
            className={`explore-image ${img.tall ? 'tall' : ''}`}
          />
        ))}
      </div>
      
      {/* <footer className="footer-container1">
        <div className="footer-logo">
        </div>
        <nav className="footer-nav1">
          <a href="#">Home</a>
          <a href="#">Search</a>
          <a href="#">Explore</a>
          <a href="#">Messages</a>
          <a href="#">Notifications</a>
          <a href="#">Create</a>
        </nav>
        <span className='foo'>&copy; 2024 ICHgram</span>
      </footer> */}
    </div>
  );
}

export default Explore;

