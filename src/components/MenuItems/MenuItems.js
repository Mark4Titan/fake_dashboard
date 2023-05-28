import Ico from "../Ico/Ico";
import { MenuItemBox, MenuItemContent, MenuItemDiv } from "./MenuItems.styled";

const MenuItem = [
  "Dashboard",
  "Product",
  "Customers",
  "Income",
  "Promote",
  "Help",
];

const MenuItems = ({ menuItem, setBurger }) => {
  return (
    <MenuItemBox>
      {MenuItem.map((elem) => (
        <MenuItemDiv onClick={()=>setBurger(true)} key={elem} menuItem={menuItem === elem}>
          <Ico Name={elem} />
          <MenuItemContent menuItem={menuItem === elem}>{elem}</MenuItemContent>
          {elem !== "Dash" && (
            <Ico Name={menuItem === elem ? "Rigth_fff" : "Rigth"} />
          )}
        </MenuItemDiv>
      ))}
    </MenuItemBox>
  );
};
export default MenuItems;
