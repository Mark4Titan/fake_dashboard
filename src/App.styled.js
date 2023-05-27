import styled from "styled-components";

export const MainBox = styled.div`
  background-color: aliceblue;
  display: grid;
  grid-template: 1fr / 0.3fr 1fr;
  width: 100vw;
  height: 100vh;
`;
export const HeaderBox = styled.header`
  display: grid;
  grid-template: auto 1fr / 1fr;
  justify-items: center;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
`;

export const TitleDash = styled.div`
  display: flex;
  margin: 36px 70px 53px 28px;
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
export const TitleVer = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;

  letter-spacing: -0.01em;

  color: #838383;
`;
