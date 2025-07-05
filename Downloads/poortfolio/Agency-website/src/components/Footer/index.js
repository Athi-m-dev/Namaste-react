import styled from "styled-components";
import Instagram from "../../assets/instagram-square-brands.svg";
import GitHub from "../../assets/github-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    padding: 1.2rem 1rem;
    text-align: center;
    gap: 0.75rem;
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    filter: invert(100%);
    transition: all 0.2s ease-in-out;
  }
  
  /* GitHub icon specific styling - black color */
  a:nth-child(2) img {
    filter: invert(0%);
  }
  
  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
      
      /* GitHub icon hover - keep it dark */
      &:nth-child(2) img {
        filter: invert(0%) brightness(0.7);
      }
    }
  }
  @media only Screen and (max-width: 48em) {
    justify-content: center;
    margin-top: 0.5rem;
    img {
      margin-left: 0.75rem;
      margin-right: 0.75rem;
    }
  }
`;

const LeftText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1rem;
  color: #111;
  @media only Screen and (max-width: 48em) {
    justify-content: center;
    width: 100%;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;

const Sypher = styled.span`
  font-weight: 900;
  font-size: 1.15em;
  margin-left: 0.4em;
  background: linear-gradient(90deg, #ff0080 0%, #7928ca 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(255,0,128,0.12), 0 1px 2px rgba(121,40,202,0.10);
  transition: text-shadow 0.2s;
  cursor: pointer;
  &:hover {
    text-shadow: 0 4px 16px rgba(255,0,128,0.25), 0 2px 4px rgba(121,40,202,0.18);
    filter: brightness(1.1);
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © Built and Design by <Sypher>Sypher</Sypher>
      </LeftText>
      <RightText>
        Reach out us via 😉
        <a href="https://www.instagram.com/theautoflow/?utm_source=qr&igsh=bmRnazV2NnF5YjYy#">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="https://github.com/anush006">
          <img src={GitHub} alt="GitHub" />
        </a>
        &nbsp;
        <a href="mailto:anushoffcl@gmail.com,athithiyanm87@gmail.com?subject=Email From Your Website">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;


