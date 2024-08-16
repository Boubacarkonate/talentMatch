import PropTypes from 'prop-types';

function Card({ label, title, picture }) {
  return (
    <div className="card lg:card-side bg-slate-400 shadow-xl m-8">
      <figure>
        <img src={picture} alt="Album" className="w-36 h-36 object-cover" />
      </figure>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{label}</h2>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

Card.PropTypes = {
  label: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  label: 'Information manquante',
};

export default Card;
