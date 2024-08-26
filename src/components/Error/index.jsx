import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`;

const Illustration = styled.img`
  max-width: 800px;
`;

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src="https://img.freepik.com/vecteurs-libre/erreur-404-concept-pour-page-destination_52683-13617.jpg?size=626&ext=jpg&ga=GA1.1.287874034.1706451211&semt=ais_hybrid" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default Error;
