import colors from '../../utils/style/colors';
import styled from 'styled-components';
import HomeIllustration from '../../assets/teamHome.jpg';
import { StyledLink } from '../../utils/style/Atoms';
import { useTheme } from '../../utils/hooks';

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`;

const LeftCol = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;
const Illustration = styled.img`
  flex: 1;
  width: 100px;
`;

function App() {
  const { theme } = useTheme();
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle theme={theme}>
            Simplifiez vos recrutements, accédez aux meilleurs talents.
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  );
}

export default App;
