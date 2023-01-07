import { Link } from "react-router-dom";
import styled from "styled-components";

const Servicios = () => {
  return (
    <StyledContainer className="uk-container">
      <h2 className="uk-text-orange uk-text-bold">¿Qué hacemos?</h2>
      <p>
        ¿Tienes una idea? Tal vez quieras crear una colección de arte, empezar a
        crear contenido o desarrollar un producto.
      </p>
      <p>
        En <span className="uk-text-orange uk-text-bold">La DAO</span> nos
        dedicamos a desarrollar y mantener productos y servicios enfocados en
        Web3.
      </p>
      <p>Tenemos experiencia desarrollando:</p>
      <ul className="uk-list uk-list-square uk-margin-left">
        <li>Protocolos DeFi</li>
        <li>Tokenización</li>
        <li>Colecciones de NFTs</li>
        <li>Redes Sociales Descentralizadas</li>
        <li>Cursos</li>
        <li>Eventos</li>
      </ul>
      <p>Descubre cómo hacer realidad tu idea.</p>
      <div className="uk-margin uk-flex uk-flex-center">
        <Link to="/contacto">
          <button className="uk-button uk-button-primary uk-text-bold uk-button-large">
            Conectemos
          </button>
        </Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  p,
  ul,
  ul > li {
    font-size: 1.1rem;
    margin: 10px 0 !important;
  }
`;

export default Servicios;
