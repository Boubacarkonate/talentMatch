import { useContext } from 'react';
import { ThemeContext } from '../context';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {

        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }

    :root {
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
 
    }


`;

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
};

export default GlobalStyle;
