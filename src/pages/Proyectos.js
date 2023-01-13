import styled from "styled-components";

const Proyectos = () => {
  return (
    <div className="uk-container">
      <ProjectsContainer>
        <h2 className="uk-text-orange uk-text-bold">Nuestros Proyectos</h2>
        <div className="cards-container">
          <StyledCard className="uk-card uk-card-body">
            <h4 className="uk-text-bold uk-text-center">
              Moneda Estable Descentralizada
            </h4>
            <p className="uk-margin-remove">
              El primer proyecto liberado por{" "}
              <span className="uk-text-orange uk-text-bold">La DAO</span> es el
              protocolo Xocolatl: Un peso mexicano descentralizado. <br />
              Nos encargamos de mantener el código e impulsar la adopción de{" "}
              <span className="uk-text-orange uk-text-bold">$XOC</span>.
            </p>
            <div className="button-container uk-margin">
              <a
                href="https://rough-hat-9644.on.fleek.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uk-button uk-button-primary uk-text-bold">
                  Obtener $XOC
                </button>
              </a>
            </div>
          </StyledCard>
          <StyledCard className="uk-card uk-card-body">
            <h4 className="uk-text-bold uk-text-center">
              Tokenización Bienes Raíces
            </h4>
            <p>
              Un proyecto de crowdfunding para inversión en bienes raíces.
              Buscamos que más personas puedan invertir, de manera rápida y
              transparente.
            </p>
            <div className="button-container uk-margin">
              <a
                href="https://github.com/La-DAO/Tulum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uk-button uk-button-primary uk-text-bold">
                  Github{" "}
                  <span className="uk-margin-small-left" uk-icon="github" />
                </button>
              </a>
            </div>
          </StyledCard>
          <StyledCard className="uk-card uk-card-body">
            <h4 className="uk-text-bold uk-text-center">Crecer la comunidad</h4>
            <p>
              Queremos conectar con más personas y que más gente use y aprenda
              la tecnología. Para ello, realizamos y creamos:
            </p>
            <ul className="uk-list uk-list-square uk-margin-left">
              <li>Juntas</li>
              <li>Contenido</li>
              <li>Eventos</li>
            </ul>
            <div className="button-container uk-margin">
              <a
                href="https://calendar.google.com/calendar/u/0?cid=b2o4Z3Q1MjJybXNpcTRzMzY4NnJvb3IwMjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uk-button uk-button-primary uk-text-bold">
                  Colabora{" "}
                  <span className="uk-margin-small-left" uk-icon="calendar" />
                </button>
              </a>
            </div>
          </StyledCard>
        </div>
      </ProjectsContainer>
    </div>
  );
};

const ProjectsContainer = styled.section`
  margin-bottom: 40px;
  h2 {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    div.cards-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
    div.cards-container > div.uk-card.uk-card-body:last-child {
      width: 80%;
    }
  }
  @media screen and (min-width: 1024) {
    div.cards-container > div.uk-card.uk-card-body:last-child {
      width: 60%;
    }
    div.cards-container > div.uk-card.uk-card-body:last-child {
      div.button-container.uk-margin > a {
        width: 30%;
      }
    }
  }
`;

const StyledCard = styled.div`
  width: 100%;
  background-color: #f6f2e6;
  border-radius: 5px;
  margin-bottom: 20px;
  p {
    text-align: justify;
  }
  div.button-container.uk-margin {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  div.button-container.uk-margin > a {
    width: 60%;
  }
  div.button-container.uk-margin > a:hover {
    text-decoration: none;
  }
  div.button-container.uk-margin > a > button.uk-button.uk-button-primary {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    width: 45%;

    div.button-container.uk-margin > a {
      width: 40%;
    }
  }
`;

export default Proyectos;
