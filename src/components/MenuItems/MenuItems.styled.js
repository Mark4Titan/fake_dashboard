import styled from "styled-components";

export const MenuItemBox = styled.div`
background-color: #ffffff;
grid-column: 2/3;
  display: grid;
  grid-template: repeat(6, 46px) / 1fr 250px 1fr;
  grid-gap: 10px;
  align-items: center;
  border: solid 1px #fff;
  & > *:hover {
    border: solid 1px rgb(238, 238, 238);
  }
`;
export const MenuItemDiv = styled.div`
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  justify-items: center;
  letter-spacing: -0.01em;
  grid-column: 2/3;
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
