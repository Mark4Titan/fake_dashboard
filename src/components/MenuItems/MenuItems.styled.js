import styled from "styled-components";

export const MenuItemBox = styled.div`
  display: grid;
  grid-template: repeat(6, 46px) / 250px;
  grid-gap: 10px;
  align-items: center;
  padding-left: 28px;
  padding-right: 28px;
  
`;
export const MenuItemDiv = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  justify-items: center;
  letter-spacing: -0.01em;
  display: grid;
  grid-template: 46px / 40px 1fr 40px;
  background-color: ${(P) => (P.menuItem ? "#5932EA" : "#fff")};

  align-items: center;

  color: ${(P) => (P.menuItem ? "#fff" : "#9197b3")};

  border-radius: 8px;
  
`;

export const MenuItemContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  display: flex;
  background-color: ${(P) => (P.menuItem ? "#5932EA" : "#fff")};
  flex-direction: column;
  width: 100%;
  color: ${(P) => (P.menuItem ? "#fff" : "#9197b3")};

  border-radius: 8px;
`;
