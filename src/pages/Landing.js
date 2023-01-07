import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/bckgd-img/HeroSectionBckgd.jpeg";
import featureImg from "../assets/landing-page/features-connections.webp";
import supportImg from "../assets/landing-page/xoc-currency.jpeg";
import learnImg from "../assets/card-images/connection.png";
import connectImg from "../assets/card-images/contribute.png";
import earnImg from "../assets/card-images/team-building.png";

const Landing = () => {
  return (
    <Fragment>
      <HeroContainer>
        <div className="hero-copy-container">
          <h1 className="uk-text-bold">
            Conectamos comunidades
            <br />
            Impulsamos
            <span className="uk-text-orange">
              <Typewriter
                wrapperClassName="uk-text-orange"
                options={{
                  strings: [
                    "DeFi",
                    "Web3",
                    "Descentralización",
                    "Stablecoins",
                    "NFTs",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <h3>
            Conecta, contribuye y construye el futuro del internet, la propiedad
            digital y las comunidades
          </h3>
          <div className="button-container">
            <Link to="/contacto">
              <button className="uk-button uk-button-primary uk-button-large uk-text-bold">
                ¡Conectar!
              </button>
            </Link>
          </div>
        </div>
      </HeroContainer>
      <SupportContainer>
        <div className="support-container">
          <div className="support-header-container">
            <h2>
              Nuestro primer proyecto: el{" "}
              <span className="uk-text-orange uk-text-bold">
                primer peso descentralizado
              </span>
            </h2>
          </div>
          <div className="support-img-container">
            <div className="support-img-wrapper">
              <img src={supportImg} alt="Logo" />
            </div>
          </div>
          <div className="support-copy-container">
            <h3 className="uk-text-bold">
              Presentamos <span className="uk-text-orange">$XOC</span>
            </h3>
            <p>
              Buscamos la inclusión financiera, y que todas las personas puedan
              aprovechar los beneficios de DeFi: finanzas abiertas y
              descentralizadas
            </p>
            <h4 className="uk-text-bold">
              $1.00 MXN = <span className="uk-text-orange">1 $XOC</span>
            </h4>
            <p>Sin volatilidad. Totalmente respaldado.</p>
            <div className="button-container">
              <a
                href="https://rough-hat-9644.on.fleek.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="uk-button uk-button-primary uk-button-large uk-text-bold">
                  ¡Quiero $XOC!
                </button>
              </a>
            </div>
          </div>
        </div>
      </SupportContainer>
      <BenefitsContainer>
        <div className="header-container">
          <h2>
            Queremos impulsar el talento y los proyectos. Aprende con nosotros y
            ayúdanos a construir el futuro. Somos{" "}
            <span className="text-bold">La DAO</span>.
          </h2>
        </div>
        <div
          className="benefits-cards-container"
          uk-height-match="target: > div > .uk-card"
        >
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={learnImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title uk-text-orange uk-text-bold">
                  Conecta
                </h3>
                <p>
                  Conoce a otras personas que están involucradas en Web3, o por
                  empezar. Descubre nuevos proyectos, comunidades y
                  oportunidades.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={connectImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title uk-text-orange uk-text-bold">
                  Contribuye
                </h3>
                <p>
                  Tú tienes talento que aportar a La DAO. Las habilidades se
                  obtienen, a través de práctica y motivación. Aprende y
                  contribuye con nosotros.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={earnImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title uk-text-orange uk-text-bold">
                  Construye
                </h3>
                <p>
                  Trabajamos en proyectos innovadores y que sean útiles.
                  Buscamos resolver problemas reales para construir un mejor
                  futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BenefitsContainer>
      <FeaturesContainer>
        <div className="support-container">
          <div className="support-header-container">
            <h2>
              Crezcamos la comunidad <br />
              <span className="uk-text-orange uk-text-bold">
                resolvamos problemas
              </span>
            </h2>
          </div>
          <div className="support-copy-container">
            <p>Entrar al mundo descentralizado puede ser intimidante.</p>
            <p>
              Con <span className="uk-text-orange uk-text-bold">La DAO</span>,
              es fácil y divertido.
            </p>

            <p className="uk-margin-small">
              Nos conectamos para resolver algunos desafíos como:
            </p>
            <ul className="uk-list uk-list-square uk-margin-remove">
              <li>Empezar en tu camino hacia la descentralización</li>
              <li>Aprender nuevas tecnologías y protocolos</li>
              <li>Colaborar en proyectos de impacto social</li>
            </ul>
            <div className="uk-margin-large uk-flex uk-flex-center uk-width-1-1">
              <Link to="/contacto">
                <button className="uk-button uk-button-primary uk-button-large uk-text-bold">
                  ¡Quiero saber más!
                </button>
              </Link>
            </div>
          </div>
          {/* <Link
            to="/contacto"
            className="uk-width-1-1 uk-margin uk-hidden@m uk-flex uk-flex-center"
          >
            <button className="uk-button uk-button-primary uk-button-large uk-text-bold">
              Unirme
            </button>
          </Link> */}
          <div className="support-img-container">
            <div className="support-img-wrapper">
              <img src={featureImg} alt="Logo" />
            </div>
          </div>
        </div>
      </FeaturesContainer>
    </Fragment>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-image: linear-gradient(
      to bottom,
      rgba(46, 46, 44, 1),
      rgba(105, 113, 76, 0.65)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div.hero-copy-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 15px 120px 15px;
    text-align: center;
    h1.uk-text-bold {
      color: #fafafa;
      font-family: "Maven Pro" !important;
    }
    h1.uk-text-bold > span.uk-text-orange {
      color: #f25b3d;
      font-family: "Maven Pro" !important;
    }
    h3 {
      color: #fafafa;
    }

    div.button-container {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }

    div.button-container > a > button.uk-button.uk-button-large {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: bold;
      padding: 0 40px;
    }
    div.button-container > a:hover {
      text-decoration: none;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    div.hero-copy-container {
      width: 70%;
      text-align: center;
      margin-top: 80px;
    }
    div.hero-copy-container > div.button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    div.hero-copy-container
      > div.button-container
      > a
      > button.uk-button.uk-button-large {
      font-size: 1.15rem;
    }
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    div.hero-copy-container {
      width: 50%;
      text-align: center;
      margin-top: 40px;
    }
    div.hero-copy-container > h1 {
      font-size: 3rem;
    }
    div.hero-copy-container > div.button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    div.hero-copy-container > div.button-container > button {
      font-size: 1.15rem;
    }
  }
`;

const FeaturesContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;

  div.support-container {
    margin-top: 10%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.support-container > div.support-header-container {
    text-align: center;
    width: 95%;
  }

  div.support-container > div.support-header-container > h2 {
    color: #2e2e2c;
    margin-bottom: 20px;
  }

  div.support-container > div.support-img-container {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
  div.support-container
    > div.support-img-container
    > div.support-img-wrapper
    > img {
    border-radius: 5%;
    width: 90%;
  }
  div.support-container > div.support-copy-container {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
  }
  div.support-container > div.support-copy-container > p,
  div.support-container > div.support-copy-container > ul > li {
    text-align: left;
    font-size: 1.1rem;
  }

  a > button.uk-button.uk-button-large {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 768px) {
    div.support-container {
      margin-top: 7.5%;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
    }
    .support-header-container {
      width: 100%;
    }
    div.support-container > div.support-img-container {
      width: 60%;
    }
    div.support-container > div.support-copy-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      p {
        width: 80%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }

    div.support-container > div.support-copy-container > ul {
      margin-left: 40px;
    }
    div.support-container > div.support-img-container {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 960px) {
    div.support-container {
      margin-top: 5%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 40px;
    }
    div.support-header-container {
      width: 100%;
    }
    div.support-container > div.support-img-container {
      width: 45%;
    }
    div.support-container > div.support-copy-container {
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding-left: 0px;
      padding-right: 0px;
      margin-top: 20px;
      p {
        width: 95%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }
    div.support-container > div.support-copy-container > ul > li {
      margin-left: 40px;
    }
    div.support-container > div.support-img-container {
      margin-bottom: 20px;
    }
    div.support-container
      > div.support-img-container
      > div.support-img-wrapper
      > img {
      width: 85%;
    }
  }

  @media screen and (min-width: 1280px) {
    min-height: calc(100vh - 64px);
    div.support-container {
      width: 80%;
    }
    div.support-container
      > div.support-img-container
      > div.support-img-wrapper
      > img {
      border-radius: 5%;
      width: 80%;
    }
    div.support-container {
      margin-top: 5%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    div.support-header-container {
      width: 100%;
      margin-bottom: 20px;
    }
    div.support-container > div.support-img-container {
      width: 50%;
      margin-bottom: 0;
    }
    div.support-container > div.support-copy-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }
  }
`;

const BenefitsContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2e2e2c;

  div.header-container {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    padding: 0 10px;
    h2 {
      color: #f8f8f8;
    }
    h2 > span.text-bold {
      color: #f36058;
      font-weight: bold;
    }
  }

  div.benefits-cards-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }

  div.benefits-cards-container > div.card-container {
    width: 100%;
    margin-bottom: 20px;
  }

  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body {
    text-align: center;
    border-radius: 10px;
    border: 2px solid #2e1359;
    p {
      margin: 0;
    }
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper {
    display: flex;
    flex-direction: column;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper
    > h3 {
    margin-top: 20px;
    color: #4e2097;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper
    > p {
    color: #333;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-img-wrapper {
    display: flex;
    justify-content: center;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-img-wrapper
    > img {
    max-width: 25%;
  }

  @media screen and (min-width: 768px) {
    div.header-container {
      margin: 60px 0 20px 0;
    }
    div.benefits-cards-container
      > div
      > div.uk-card.uk-card-default.uk-card-body {
      border: 2px solid red;
    }

    div.benefits-cards-container
      > div.card-container
      > div.uk-card.uk-card-default.uk-card-body
      > div.card-img-wrapper
      > img {
      max-width: 15%;
    }
  }
  @media screen and (min-width: 960px) {
    div.header-container {
      width: 80%;
      margin: 60px 0 0px 0;
    }
    div.benefits-cards-container {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    div.benefits-cards-container > div.card-container {
      width: 30%;
      margin-bottom: 40px;
      height: 1;
    }

    div.benefits-cards-container
      > div.card-container
      > div.uk-card.uk-card-default.uk-card-body
      > div.card-img-wrapper
      > img {
      max-width: 40%;
    }
  }
`;

const SupportContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;

  div.support-container {
    margin-top: 10%;
    width: 90%;
    text-align: center;
  }
  div.support-container > div.support-header-container {
    text-align: center;
    width: 95%;
  }

  div.support-container > div.support-header-container > h2 {
    color: #2e2e2c;
    margin-bottom: 20px;
  }

  div.support-container > div.support-img-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  div.support-container
    > div.support-img-container
    > div.support-img-wrapper
    > img {
    border-radius: 5%;
    width: 75%;
  }
  div.support-container > div.support-copy-container > h4 {
    margin-top: 10px;
  }
  div.support-container > div.support-copy-container > p {
    text-align: center;
    font-size: 1.1rem;
  }
  div.support-container > div.support-copy-container > div.button-container {
    display: flex;
    justify-content: center;
    font-size: 1.1rem;

    button.uk-button.uk-button-large {
      font-size: 1.1rem;
    }
    margin: 40px 0 40px 0;
  }

  @media screen and (min-width: 768px) {
    div.support-container {
      height: 100%;
      margin-top: 5%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .support-header-container {
      width: 100%;
      margin-bottom: 20px;
    }
    div.support-container > div.support-img-container {
      margin-bottom: 40px;
    }
    div.support-container
      > div.support-img-container
      > div.support-img-wrapper
      > img {
      width: 50%;
    }
  }
  @media screen and (min-width: 960px) {
    div.support-container {
      width: 90%;
    }
    div.support-container
      > div.support-img-container
      > div.support-img-wrapper
      > img {
      border-radius: 5%;
      margin: 20px 0;
      width: 80%;
    }
    div.support-container {
      margin-top: 5%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    div.support-header-container {
      width: 100%;
      margin-bottom: 20px;
    }
    div.support-container > div.support-img-container {
      width: 50%;
      margin-bottom: 0;
    }
    div.support-container > div.support-copy-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }

    div.support-container > div.support-copy-container > div.button-container {
      margin: 20px 0 40px 0;
    }
  }
  @media screen and (min-width: 1280px) {
    height: calc(100vh - 64px);
    div.support-container {
      width: 80%;
    }
  }
`;

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  background-color: #2e2e2c;
  color: #f6f2e6;
  a {
    color: #f6f2e6;
  }
  .text-container,
  .social-icons {
    width: 50%;
    display: flex;
  }
  .text-container {
    justify-content: start;
  }

  .social-icons {
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    .social-icons {
      justify-content: end;
    }
    .social-icons > * {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

export default Landing;
