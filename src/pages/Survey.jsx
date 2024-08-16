import { Link, Outlet } from 'react-router-dom';
import ClientForm from '../components/Header/ClientForm';
import FreeLanceForm from '../components/Header/FreeLanceForm';

function Survey() {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to={ClientForm}>Questionnaire Client</Link>
      <Link to={FreeLanceForm}>Questionnaire FreeLance</Link>
      <Outlet />
    </div>
  );
}

export default Survey;
