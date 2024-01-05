// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import backgroundImagem from './img/form.Geom.png';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${backgroundImagem});
    background-repeat: no-repeat;
    font-family: 'Arial', sans-serif; 
  }

  .background-image {
    object-fit: cover;
  }

  .logo-image {
    position: absolute;
    right: 70px; 
    width: 30%;
    height: 30%; 
  }
`;

export default GlobalStyles;


