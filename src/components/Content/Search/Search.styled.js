import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  grid-row:${P=>P.windowSize ? '1/3' : '3/4'};
  
  display: grid;
  flex-direction: column;
  margin: 10px 0;
  align-items: center;
  position: relative;
`;
export const SearchInput = styled.input`
  border: solid 1px;
  background: #f9fbff;
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: 216px;
  height: 38px;
  letter-spacing: -0.01em;
  border: none;
  outline: none;

  color: #b5b7c0;
  padding-left: 40px;
`;
export const SearchIco = styled.div`
  position: absolute;
  left: 10px;
`;
export const SearchIcoClear = styled.div`
  cursor: pointer;
`;
