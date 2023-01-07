import { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import notification from "../components/ui/Notifications";

const Contacto = () => {
  const [accordionTitle, setAccordionTitle] = useState(
    "Mandar mensaje a La DAO"
  );
  const { form, handleInput, resetForm } = useForm();
  const toggleAccordionTitle = () => {
    accordionTitle == "Mandar mensaje a La DAO"
      ? setAccordionTitle("Cerrar formulario")
      : setAccordionTitle("Mandar mensaje a La DAO");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    notification(
      "Funcionalidad no disponible. Por favor, intente después.",
      "warning"
    );
  };
  return (
    <div className="uk-container">
      <h2 className="uk-text-orange uk-text-bold">Contacto</h2>
      <FlexContainer>
        <FormContainer className="contact-form-container uk-form-stacked">
          <ul uk-accordion="true" className="uk-hidden@m">
            <li>
              <a
                className="uk-accordion-title"
                href="/#"
                onClick={toggleAccordionTitle}
              >
                {accordionTitle}
              </a>
              <div className="uk-accordion-content">
                <p>
                  Nos encanta escuchar sobre nuevos proyectos y colaboraciones.
                  Envía tus preguntas o comentarios, nos pondremos en contacto
                  contigo.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="uk-form-controls">
                    <label
                      className="uk-form-label uk-text-orange uk-text-bold"
                      htmlFor="form-stacked-text"
                    >
                      Nombre:
                    </label>
                    <input
                      className="uk-input"
                      id="form-stacked-text"
                      type="text"
                    ></input>
                  </div>
                  <div className="uk-form-controls">
                    <label
                      className="uk-form-label uk-text-orange uk-text-bold"
                      htmlFor="form-stacked-text"
                    >
                      Correo electrónico:
                    </label>
                    <input
                      className="uk-input"
                      id="form-stacked-text"
                      type="email"
                    ></input>
                  </div>
                  <div className="uk-form-controls">
                    <label
                      className="uk-form-label uk-text-orange uk-text-bold"
                      htmlFor="form-stacked-text"
                    >
                      Mensaje:
                    </label>
                    <textarea
                      className="uk-textarea"
                      id="form-stacked-text"
                      type="text"
                      rows="5"
                      placeholder="Cuéntanos de tu idea y qué estás buscando..."
                    ></textarea>
                  </div>
                  <div className="button-container">
                    <button className="uk-button uk-button-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </li>
          </ul>
          <div className="form-content uk-visible@m">
            <p>
              Nos encanta escuchar sobre nuevos proyectos y colaboraciones.
              Envía tus preguntas o comentarios, nos pondremos en contacto
              contigo.
            </p>
            <p className="uk-text-danger">
              Aún no conectamos el formulario. Búscanos en los canales y redes
              sociales.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="uk-form-controls">
                <label
                  className="uk-form-label uk-text-orange uk-text-bold"
                  htmlFor="form-stacked-text"
                >
                  Nombre:
                </label>
                <input
                  className="uk-input"
                  id="form-stacked-text"
                  type="text"
                ></input>
              </div>
              <div className="uk-form-controls">
                <label
                  className="uk-form-label uk-text-orange uk-text-bold"
                  htmlFor="form-stacked-text"
                >
                  Correo electrónico:
                </label>
                <input
                  className="uk-input"
                  id="form-stacked-text"
                  type="email"
                ></input>
              </div>
              <div className="uk-form-controls">
                <label
                  className="uk-form-label uk-text-orange uk-text-bold"
                  htmlFor="form-stacked-text"
                >
                  Mensaje:
                </label>
                <textarea
                  className="uk-textarea"
                  id="form-stacked-text"
                  type="text"
                  rows="5"
                  placeholder="Cuéntanos de tu idea y qué estás buscando..."
                ></textarea>
              </div>
              <div className="button-container">
                <button className="uk-button uk-button-primary">Enviar</button>
              </div>
            </form>
          </div>
        </FormContainer>
        <ChannelsContainer>
          <h3 className="uk-text-orange uk-text-bold">Únete:</h3>
          <div className="cards-container">
            <StyledCard className="uk-card uk-card-body">
              <div className="text-container">
                <h4 className="uk-text-bold uk-text-center">
                  Servidor Discord
                </h4>
                <p className="uk-hidden@m">
                  Lugar donde nos coordinamos. Si quieres contribuir, aquí nos
                  podrás encontrar.
                </p>
              </div>
              <div className="button-container uk-margin">
                <a
                  href="https://discord.gg/tQXDnJrxX3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uk-button uk-button-primary uk-text-bold">
                    Visitar{" "}
                    <span className="uk-margin-small-left" uk-icon="discord" />
                  </button>
                </a>
              </div>
            </StyledCard>
            <StyledCard className="uk-card uk-card-body">
              <div className="text-container">
                <h4 className="uk-text-bold uk-text-center">Twitter</h4>
                <p className="uk-hidden@m">
                  Cuenta oficial para anuncios, compartir noticias y uno que
                  otro meme.
                </p>
              </div>
              <div className="button-container uk-margin">
                <a
                  href="https://twitter.com/LaDAO_Club"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uk-button uk-button-primary uk-text-bold">
                    Perfil{" "}
                    <span className="uk-margin-small-left" uk-icon="twitter" />
                  </button>
                </a>
              </div>
            </StyledCard>
            <StyledCard className="uk-card uk-card-body">
              <div className="text-container">
                <h4 className="uk-text-bold uk-text-center">Telegram</h4>
                <p className="uk-hidden@m">
                  Canal para compartir noticias y cotorrear con los miembros y
                  no-miembros.
                </p>
              </div>
              <div className="button-container uk-margin">
                <a
                  href="https://t.me/+bzD4FMSIL7ZmYTNh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uk-button uk-button-primary uk-text-bold">
                    Canal{" "}
                    <span className="uk-margin-small-left" uk-icon="mail" />
                  </button>
                </a>
              </div>
            </StyledCard>
            <StyledCard className="uk-card uk-card-body">
              <div className="text-container">
                <h4 className="uk-text-bold uk-text-center">Instagram</h4>
                <p className="uk-hidden@m">
                  Cuenta para memes y noticias rápidas. Un canal más alivianado
                  y divertido.
                </p>
              </div>
              <div className="button-container uk-margin">
                <a
                  href="https://www.instagram.com/ladao_club/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uk-button uk-button-primary uk-text-bold">
                    Perfil{" "}
                    <span
                      className="uk-margin-small-left"
                      uk-icon="instagram"
                    />
                  </button>
                </a>
              </div>
            </StyledCard>
            <StyledCard className="uk-card uk-card-body">
              <div className="text-container">
                <h4 className="uk-text-bold uk-text-center">Lens</h4>
                <p className="uk-hidden@m">
                  Nos encanta la idea de redes sociales descentralizadas.
                  Contenido de todo tipo: ¡Lenster, Lenstube y más!
                </p>
              </div>
              <div className="button-container uk-margin">
                <a
                  href="https://www.lensfrens.xyz/ladao.lens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uk-button uk-button-primary uk-text-bold">
                    Perfil 🌱
                  </button>
                </a>
              </div>
            </StyledCard>
          </div>
        </ChannelsContainer>
      </FlexContainer>
      <div className="channels-container"></div>
    </div>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  div.uk-accordion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    width: 100%;
    background-color: #f6f2e6;
    border-radius: 5px;
  }
  ul > li > a {
    padding: 10px 15px;
  }
  p,
  form {
    width: 90%;
  }
  div.uk-form-controls {
    margin-bottom: 20px;
  }
  div.button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  div.button-container > button.uk-button.uk-button-primary {
    font-size: 1rem;
    font-weight: bold;
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
  @media screen and (min-width: 960px) {
    width: 50%;
    display: flex;
    justify-content: center;
    div.form-content {
      width: 90%;
    }
  }
  @media screen and (min-width: 1280px) {
    div.form-content {
      width: 80%;
    }
    div.button-container > button.uk-button.uk-button-primary {
      font-size: 1rem;
      font-weight: bold;
      width: 40%;
    }
  }
`;

const ChannelsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    div.cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 960px) {
    width: 50%;
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
    div.button-container.uk-margin > button.uk-button.uk-button-primary {
      width: 35%;
    }
  }
  @media screen and (min-width: 960px) {
    padding: 10px 15px;
    div.button-container.uk-margin > a {
      width: 80%;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 15px;
    div.button-container.uk-margin > a {
      width: 60%;
    }
  }
`;

export default Contacto;
