import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { StyledLink } from '../../utils/style/Atoms';

const StyledNav = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 15%;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo src={logo} alt="logo" />
      </StyledLink>
      <div style={{ display: 'flex' }}>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  );
};

export default Header;
