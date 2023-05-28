import styled from "styled-components";

export const MainBox = styled.div`
  background-color: rgb(248, 249, 255);
  display: grid;
  grid-template: 1fr / ${(P) => (P.widthIn ? "1fr" : "350px 1fr")};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const HeaderBox = styled.header`
  position: fixed;
  left: 0;
  display: grid;
  height: 100%;
  grid-template: auto 1fr / 1fr;
  justify-items: center;
  justify-content: center;
  z-index: 10;

  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
`;
export const HeaderElem = styled.div`
  position: fixed;
  left: ${(P) => (P.burger ? (!P.widthIn ? 0 : "-120%") : 0)};
  display: grid;
  height: 100%;
  grid-template: auto 1fr / 28px 1fr 28px;
  justify-items: center;
  justify-content: center;
  z-index: 10;

  background-color: rgb(255, 255, 255);
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
`;
export const HeaderWrap = styled.div`
  grid-column: 1/5;
  grid-row: 1/4;
  width: 100vw;
  z-index: 5;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10.7px);
  -webkit-backdrop-filter: blur(10.7px);
`;

export const TitleDash = styled.div`

  background-color: #ffffff;
  grid-column: 2/3;
  display: grid;
  grid-template: 32px 1fr 60px / 1fr 250px 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;

  letter-spacing: 0.01em;
  color: #000000;
`;
export const TitleElem = styled.div`

  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template: 1fr / 40px 1fr 40px 20px;
  justify-items: start;
  align-items: end;
`;

export const TitleVer = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;

  letter-spacing: -0.01em;
  padding: 5px 0;
  color: #838383;
`;
export const TitleBurger = styled.div`
  z-index: 11;
  cursor: pointer;
  padding: 5px 0;
`;
