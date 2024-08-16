import { Link } from 'react-router-dom';
import Survey from '../../pages/Survey';
import App from '../../pages/Home/App';

const Header = () => {
  return (
    <nav>
      <Link to={App}>Accueil</Link>
      <Link to={Survey}>Questionnaire</Link>
    </nav>
  );
};

export default Header;
