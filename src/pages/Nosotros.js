import styled from "styled-components";
import daoImg from "../assets/landing-page/prehisp-civ-into-the-future.jpeg";
import decentralizedImg from "../assets/landing-page/decentralized-future.jpeg";

const Nosotros = () => {
  return (
    <div className="uk-container">
      <NosotrosContainer>
        <div className="about-us-container">
          <h2 className="uk-text-orange uk-text-bold">¿Quiénes somos?</h2>
          <div className="flex-container">
            <div className="img-container">
              <img
                src={daoImg}
                alt="Prehispanic civilization into the future"
              />
            </div>
            <div className="text-container">
              <p>
                Somos un grupo de aficionados a la tecnología y cultura, que
                buscamos{" "}
                <span className="uk-text-orange uk-text-bold">impulsar</span> el
                desarrollo de proyectos{" "}
                <span className="uk-text-orange uk-text-bold">
                  DeFi y Web3 en América Latina
                </span>
              </p>
              <p>
                Nuestro equipo está compuesto por empresarios, desarrolladores,
                artistas y miembros de otras DAOs que compartimos la visión de
                fomentar la creación de más proyectos Web3 en la comunidad de
                habla hispana.
              </p>
            </div>
          </div>
        </div>
        <div className="mission-vision-container">
          <div className="mission-container">
            <h3 className="uk-text-orange uk-text-bold">Misión</h3>
            <p>
              Fomentar la adopción de la tecnología blockchain y los activos
              digitales en América Latina, a través de la promoción y el
              crecimiento de proyectos DeFi y Web3.
            </p>
            <p>
              Nuestro objetivo es que existan{" "}
              <span className="uk-text-orange uk-text-bold">
                100,000 personas o negocios
              </span>{" "}
              que acepten monedas estables en América Latina.
            </p>
          </div>
          <div className="vision-container">
            <h3 className="uk-text-orange uk-text-bold">Visión</h3>
            <p>
              Ser la{" "}
              <span className="uk-text-orange uk-text-bold">
                comunidad de referencia
              </span>{" "}
              en América Latina para la creación y desarrollo de proyectos DeFi
              y Web3.
            </p>
            <p>
              Nos vemos como una DAO abierta, comprometida con la educación y
              colaboración. Somos las personas que custodiamos el futuro de la
              propiedad digital, las monedas estables, y una sociedad
              coordinada.
            </p>
          </div>
        </div>
        <div className="values-container">
          <div className="text-container">
            <h3 className="uk-text-orange uk-text-bold">Valores</h3>
            <p>Los valores que nos identifican:</p>
            <ul className="uk-list uk-list-square uk-margin-left">
              <li>Comunidad</li>
              <li>Descentralización</li>
              <li>Educación</li>
              <li>Empatía</li>
              <li>Ética</li>
              <li>Humildad</li>
            </ul>
          </div>
          <div className="img-container uk-visible@s">
            <img src={decentralizedImg} alt="Decentralized values" />
          </div>
        </div>
      </NosotrosContainer>
    </div>
  );
};

const NosotrosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  p {
    text-align: justify;
  }
  div.about-us-container {
    width: 100%;
  }
  div.about-us-container > h2 {
    text-align: center;
    width: 100%;
  }
  div.about-us-container > div.flex-container > div.img-container,
  div.values-container > div.img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  div.about-us-container > div.flex-container > div.img-container > img,
  div.values-container > div.img-container > img {
    border-radius: 5px;
    width: 80%;
  }
  div.values-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div.values-container > div.text-container {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    div.about-us-container {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      justify-content: center;
    }

    div.about-us-container > div.flex-container {
      display: flex;
    }
    div.about-us-container > div.flex-container > div.img-container,
    div.about-us-container > div.flex-container > div.text-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    div.about-us-container > div.flex-container > div.text-container {
      margin-top: 40px;
    }
    div.mission-vision-container,
    div.values-container {
      width: 80%;
      margin-bottom: 20px;
    }
    div.values-container > div.text-container,
    div.values-container > div.img-container {
      width: 50%;
    }
    div.values-container > div.img-container > img {
      width: 90%;
    }
  }
  @media screen and (min-width: 960px) {
    div.about-us-container > div.flex-container > div.img-container {
      width: 35%;
    }
    div.about-us-container > div.flex-container > div.text-container {
      width: 65%;
      justify-content: right;
      p {
        margin-top: 20px;
      }
    }

    div.mission-vision-container {
      display: flex;
    }
    div.mission-vision-container > div {
      width: 50%;
      padding: 0 15px;
    }
    div.values-container > div.text-container {
      padding-top: 20px;
      margin-left: 20px;
    }
    div.values-container > div.img-container > img {
      width: 70%;
    }
  }
`;

export default Nosotros;
