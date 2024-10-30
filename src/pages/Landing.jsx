import '../assets/style/landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="bg-color-blur left"></div>
      <div className="bg-color-blur center"></div>
      <div className="bg-color-blur right"></div>
      <div className="landing-content">
          <p className="tag dk-txt">OFFERT</p>
          <div className="heading-container">
            <h1 className="h-h dk-txt">
              IT- & System&shy;utvecklings&shy;förslag
            </h1>
            <h1 className="h-h dk-txt">
              Anpassat För <span className="dk-txt">Bluescreen AB</span>
            </h1>
          </div>
          <p className="h-sub dk-txt">
            En skräddarsyd lösning designad för att lyfta driften 
            av erat företag genom effektiva IT- och systemlösningar.
          </p>
          <Link to={'/content'}>
            <button className="xl-btn acc">Utforska <FontAwesomeIcon icon={faArrowRight} /></button>
          </Link>
          <div className="info-container">
            <p className="c-p dk-txt"><strong>Förberedd av:</strong> Jonathan Andersson. <a href="mailto:2jonand@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> 2jonand@gmail.com</a> <a href="tel:+46734640229"><FontAwesomeIcon icon={faPhone} /> 0734640229</a></p>
            <p className="c-p dk-txt"><strong>Förberedd för:</strong> Bob Andersson, Bluescreen AB.</p>
          </div>
      </div>
      <div className="example-img">
        <div className="bottom-overlay"></div>
      </div>
    </div>
  )
}

export default Landing;