import { Link, Outlet, useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestion = questionNumberInt + 1;

  // const Ternaire =
  //   questionNumberInt === 10 ? (
  //     <Link to="/results">Résultat</Link>
  //   ) : (
  //     <Link to={`/survey/${nextQuestion}`}>Suivante</Link>
  //   );

  return (
    <div>
      <h1 className=" font-bold underline">Questionnaire 🧮</h1>
      <h2>
        Question <span className="font-black">{questionNumber}</span>{' '}
      </h2>
      <div>
        <Link to={`/survey/${prevQuestion}`}>Précédent</Link>
        {questionNumberInt === 10 ? (
          <Link to="/results">Résultat</Link>
        ) : (
          <Link to={`/survey/${nextQuestion}`}>Suivante</Link>
        )}

        {/* {Ternaire} */}

        {/* <Link to={ClientForm}>Questionnaire Client</Link>
      <Link to={FreeLanceForm}>Questionnaire FreeLance</Link> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Survey;
