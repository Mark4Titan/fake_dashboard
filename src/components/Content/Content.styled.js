import styled from "styled-components";

export const ContentBox = styled.div`
grid-column: ${P=>P.widthIn ? '1/2' : '2/3' } ;
  background-color: #f8f9ff;

  display: grid;
  grid-template: 128px 1fr / 0.5fr minmax(auto, 1000px) 0.5fr;
`;
export const ContentTitle = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 80px;
  padding-top: 41px;
  grid-column: 2/3;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
`;
export const Burger = styled.div`
  cursor: pointer;
`;
export const ContentMain = styled.div`
  background-color: #fff;
  grid-column: 2/3;
  grid-row: 2/3;
  padding: ${P=>P.windowSize ? 30 : 5}px;
  display: grid;
  grid-template: 66px 1fr /1fr;
  grid-gap: ${P=>P.windowSize ? 40 : 100}px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
`;

export const TitleHead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  display: grid;
  grid-template: 33px 33px /1fr;
  letter-spacing: -0.01em;
  padding: 20px;
  color: #000000;
`;
export const ContentHead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  letter-spacing: -0.01em;

  color: #000000;
`;
export const ContentHeadSp = styled.span`
  font-family: "Poppins";
  grid-row: 2/3;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color: #16c098;
`;

export const ContentHeadGrup = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color: #292d32;
`;
export const ContentItem = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;

  color: #292d32;
  display: grid;
  grid-template: 30px / 40px repeat(${P=>P.Storybook}, minmax(auto, 1fr)) 100px;
`;
export const ContentStory = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color: #b5b7c0;
`;
export const ContentActive = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${(P) =>
    P.elemActive ? "rgb(0 176 135 / 38%)" : "#FFC5C5"};

  width: 80px;
  height: 29px;

  color: ${(P) => (P.elemActive ? "#008767" : "#DF0404")};
  border: 1px solid ${(P) => (P.elemActive ? "#008767" : "#DF0404")};
  border-radius: 4px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: -0.01em;
  position: relative;
  // margin-top: 10px;
`;
export const ContElement = styled.div`
  display: grid;
  align-items: center;
  grid-template: 1fr / 1fr;
  padding: 5px;
  border-bottom: solid 1px #eeeeee;
  justify-items: center;
  text-align: center;
`;
