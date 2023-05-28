import { useEffect, useState } from "react";
import Package from "../package.json";
import Items from "./FakeApiUser.json";

import "./App.css";
import {
  HeaderBox,
  HeaderElem,
  HeaderWrap,
  MainBox,
  TitleBurger,
  TitleDash,
  TitleElem,
  TitleVer,
} from "./App.styled";
import Ico from "./components/Ico/Ico";
import MenuItems from "./components/MenuItems/MenuItems";
import Content from "./components/Content/Content";
import useWiWidth from "./components/Hooks/useWiWidth";

function App() {
  const [menuItem] = useState("Customers");
  const [stateSearch, setStateSearch] = useState("");
  const [burger, setBurger] = useState(false);
  const [mainState] = useState(
    Items.map((el, pos) => ({ ...el, pos: pos + 1 }))
  );
  const {windowSize, widthIn } = useWiWidth(1400);
  useEffect(() => {
    if (!widthIn) setBurger(true);
  }, [widthIn]);

  return (
    <MainBox widthIn={widthIn}>
      <HeaderBox>
        <HeaderElem widthIn={widthIn} burger={burger}>
          <TitleDash>
            <TitleElem>
              <Ico Name="Dash" Size={39} />
              <div>Dashboard</div>
              <TitleVer> v.{Package.version}</TitleVer>
              {widthIn && (
                <TitleBurger
                  onClick={() => setBurger(true)}
                >
                  <Ico Name="Left" />
                </TitleBurger>
              )}
            </TitleElem>
          </TitleDash>
          <MenuItems menuItem={menuItem} setBurger={setBurger} />
        </HeaderElem>
        {!burger && <HeaderWrap  onClick={() => setBurger(true)}/>}
      </HeaderBox>
      <Content
        widthIn={widthIn}
        mainState={mainState}
        setStateSearch={setStateSearch}
        stateSearch={stateSearch}
        setBurger={setBurger}
        windowSize={windowSize}
      />
    </MainBox>
  );
}

export default App;
