import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import useFetchApi from '../../utils/hooks';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FreeLances = () => {
  const { data, isLoading, error } = useFetchApi(
    'http://localhost:8000/freelances',
  );

  // Accéder à la liste des freelances si elle est disponible
  const freelancersList = data?.freelancersList;

  if (error) {
    return <span>Il y a un problème</span>;
  }
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Talent Match nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture || DefaultPicture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  );
};

export default FreeLances;
