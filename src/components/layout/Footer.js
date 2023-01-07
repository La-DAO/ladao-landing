import styled from "styled-components";
import logo from "../../assets/logo/logo-v2-2.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="text-container">
        <div className="uk-logo uk-flex uk-flex-middle uk-margin-small-right">
          <img
            data-src={logo}
            width="24"
            height="24"
            alt=""
            data-uk-img=""
            uk-image="true"
          />
        </div>
        <span className="uk-text-bold uk-margin-small-right">La DAO</span> ©
        2023
      </div>
      <div className="social-icons">
        <a
          href="https://www.lensfrens.xyz/ladao.lens"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lens 🌱
        </a>
        <a
          href="https://twitter.com/LaDAO_Club"
          target="_blank"
          rel="noopener noreferrer"
          uk-icon="twitter"
        ></a>
        <a
          href="https://www.instagram.com/ladao_club/"
          target="_blank"
          rel="noopener noreferrer"
          uk-icon="instagram"
        ></a>
        <a
          href="https://discord.gg/tQXDnJrxX3"
          target="_blank"
          rel="noopener noreferrer"
          uk-icon="discord"
        ></a>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 20px 0;
  background-color: #2e2e2c;
  color: #f6f2e6;
  a {
    color: #f6f2e6;
  }
  .text-container,
  .social-icons {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .text-container {
    margin-left: 20px;
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

export default Footer;
