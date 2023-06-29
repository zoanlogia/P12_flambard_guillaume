import "./ButtonLink.scss";
import PropTypes from 'prop-types';


const ButtonLink = ({className, src, alt }) => {
  return (
    <button role="button" id="buttonLink" className="buttonLink">
      <div>
        <img className={className} src={src} alt={alt} />
      </div>
    </button>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};


export default ButtonLink;
