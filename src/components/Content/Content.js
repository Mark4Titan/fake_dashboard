import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import {
  ContentActive,
  ContentBox,
  ContElement,
  ContentHead,
  ContentHeadGrup,
  ContentHeadSp,
  ContentItem,
  ContentMain,
  ContentStory,
  ContentTitle,
  TitleHead,
  Burger,
} from "./Content.styled";
import Search from "./Search/Search";
import Ico from "../Ico/Ico";


const Content = ({
  mainState,
  stateSearch,
  setStateSearch,
  widthIn,
  setBurger,
  windowSize,
}) => {
  const [item, setItems] = useState(mainState);
  const [itemStorybook, setItemsStorybook] = useState([]);

  const W1 = 740;
  const W2 = 700;
  const W3 = 680;
  const W4 = 500;

  useEffect(() => {
    if (windowSize) {
      const Elements = [];
      Elements.push("#");
      Elements.push("Name");
      windowSize >= W4 && Elements.push("Email");
      windowSize >= W1 && Elements.push("Address");
      windowSize >= W2 && Elements.push("Created");
      windowSize >= W3 && Elements.push("Balance");
      Elements.push("Status");
      setItemsStorybook(Elements);
    }
  }, [windowSize]);


  useEffect(() => {
    setItems(() => {
      return mainState.filter((item) =>
        Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(stateSearch.toLowerCase())
        )
      );
    });
  }, [mainState, stateSearch]);

  return (
    <ContentBox widthIn={widthIn}>
      <ContentTitle>
        <div>Hello Evano 👋🏼,</div>
        {widthIn && (
          <Burger onClick={() => setBurger(false)}>
            <Ico Name="Dash" Size={39} />
          </Burger>
        )}
      </ContentTitle>
      <ContentMain windowSize={windowSize >= W4}>
        <TitleHead windowSize={windowSize >= W4}>
          <ContentHead>All Customers</ContentHead>
          <ContentHeadSp>Active Members</ContentHeadSp>
          <Search
            setStateSearch={setStateSearch}
            stateSearch={stateSearch}
            windowSize={windowSize >= W4}
          />
        </TitleHead>

        <ContentHeadGrup>
          <ContentItem Storybook={itemStorybook.length - 2}>
            {item.map((elem, pos) => {
              const Item = [];
              pos === 0 &&
                Item.push(
                  itemStorybook.map((SB) => (
                    <ContElement key={SB}>
                      <ContentStory>{SB}</ContentStory>
                    </ContElement>
                  ))
                );
              Item.push(
                <Fragment key={`pos_${elem.pos}`}>
                  <ContElement>{elem.pos}</ContElement>
                  <ContElement>
                    {elem.first} {elem.last}
                  </ContElement>
                  {windowSize >= W4 && (
                    <ContElement>{elem.email.replace("@", " @")}</ContElement>
                  )}
                  {windowSize >= W1 && (
                    <ContElement>{elem.address}</ContElement>
                  )}
                  {windowSize >= W2 && (
                    <ContElement>{elem.created}</ContElement>
                  )}
                  {windowSize >= W3 && (
                    <ContElement>{elem.balance}</ContElement>
                  )}
                  <ContElement>
                    <ContentActive elemActive={elem.active === "true"}>
                      {elem.active === "true" ? "Active" : "Inactive"}
                    </ContentActive>
                  </ContElement>
                </Fragment>
              );
              return Item;
            })}
          </ContentItem>
        </ContentHeadGrup>
      </ContentMain>
    </ContentBox>
  );
};
export default Content;
