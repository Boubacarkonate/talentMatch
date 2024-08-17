import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/user.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardTitle = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card({ label, title, picture }) {
  return (
    // <div className="card lg:card-side bg-slate-400 shadow-xl m-8">
    //   <figure>
    //     <img src={picture} alt="Album" className="w-36 h-36 object-cover" />
    //   </figure>
    //   <div className="card-body flex flex-col items-center ">
    //     <h2 className="card-title">{label}</h2>
    //     <h3>{title}</h3>
    //   </div>
    // </div>

    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

Card.PropTypes = {
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: 'Information manquante',
  title: 'Information manquante',
  picture: DefaultPicture,
};

export default Card;
