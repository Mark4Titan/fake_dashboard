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
} from "./Content.styled";
import Search from "./Search/Search";

const Storybook = [
  "#",
  "Name",
  "Email",
  "Address",
  "created",
  "Balance",
  "Status",
];

const Content = ({ mainState, stateSearch, setStateSearch }) => {
  const [item, setItems] = useState(mainState);

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
    <ContentBox>
      <ContentTitle>Hello Evano 👋🏼,</ContentTitle>
      <ContentMain>
        <TitleHead>
          <ContentHead>All Customers</ContentHead>
          <ContentHeadSp>Active Members</ContentHeadSp>
          <Search setStateSearch={setStateSearch} stateSearch={stateSearch} />
        </TitleHead>

        <ContentHeadGrup>
          <ContentItem Storybook={Storybook.length}>
            {item.map((elem, pos) => {
              const Item = [];
              pos === 0 &&
                Item.push(
                  Storybook.map((SB) => (
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
                  <ContElement>{elem.email.replace('@', ' @')}</ContElement>
                  <ContElement>{elem.address}</ContElement>
                  <ContElement>{elem.created}</ContElement>
                  <ContElement>{elem.balance}</ContElement>
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
