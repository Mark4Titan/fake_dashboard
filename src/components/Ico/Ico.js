import styled from "styled-components";

import Dash from "./icons/1.svg";
import Dashboard from "./icons/2.svg";
import Product from "./icons/3.svg";
import Customers from "./icons/4.svg";
import Income from "./icons/5.svg";
import Promote from "./icons/6.svg";
import Help from "./icons/7.svg";

import Search from "./icons/search.svg";
import Clear from "./icons/clear.svg";

import Left from "./icons/left.svg";
import Rigth from "./icons/rigth.svg";
import Rigth_fff from "./icons/rigth_fff.svg";

const translator = {
  Dashboard: Dashboard,
  Dash: Dash,
  Product: Product,
  Customers: Customers,
  Income: Income,
  Promote: Promote,
  Help: Help,
  Left: Left,
  Rigth: Rigth,
  Rigth_fff: Rigth_fff,
  Search: Search,
  Clear: Clear,
};

const Ico = ({ Name = "Dashboard", Size = 24, Color = "red" }) => {
  return (
    <ImgIcoBox Size={Size} Color={Color}>
      <ImgIco src={translator[Name]} alt={Name} Color={Color} />
    </ImgIcoBox>
  );
};
export default Ico;

const ImgIcoBox = styled.div`
  position: relative;
  width: ${(P) => P.Size}px;
  height: ${(P) => P.Size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgIco = styled.img`
  position: absolute;
  width: auto;
  height: auto; 
`;
