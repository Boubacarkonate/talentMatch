import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-center m-8 space-x-8 bg-blue-800 text-white">
      <Link to="/">Accueil</Link>
      <Link to="/survey">Questionnaire</Link>
      <Link to="/freelances">Freelances</Link>
    </nav>
  );
};

export default Header;
