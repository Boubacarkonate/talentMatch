import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from '../../assets/logo.png';

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

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo src={logo} alt="logo" />
      </StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      <StyledLink to="/freelances">Freelances</StyledLink>
    </StyledNav>
  );
};

export default Header;
