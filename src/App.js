import { useState } from "react";
import Package from "../package.json";
import Items from "./FakeApiUser.json";

import "./App.css";
import { HeaderBox, MainBox, TitleDash, TitleVer } from "./App.styled";
import Ico from "./components/Ico/Ico";
import MenuItems from "./components/MenuItems/MenuItems";
import Content from "./components/Content/Content";

function App() {
  const [menuItem] = useState("Customers");
  const [mainState] = useState(Items.map((el, pos)=> ({...el, pos: pos+1})));
  const [stateSearch, setStateSearch] = useState("");
  return (
    <MainBox>
      <HeaderBox>
        <TitleDash>
          <Ico Name="Dash" Size={39} />
          <div>
            Dashboard<TitleVer> v.{Package.version}</TitleVer>
          </div>
        </TitleDash>
        <MenuItems menuItem={menuItem} />
      </HeaderBox>
      <Content mainState={mainState} setStateSearch={setStateSearch} stateSearch={stateSearch} />
    </MainBox>
  );
}

export default App;
