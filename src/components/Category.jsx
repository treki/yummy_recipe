import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to="/cuisine/American">
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to="/cuisine/Chinese">
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-decoration: none;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 1.5rem;
  }

  svg {
    color: black;
    font-size: 1.5rem;
  }

  &.active {
    color: #D01313;

    svg {
      color: black;
    }

    h4 {
      color: #D01313;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 8rem;
    height: 9rem;

   
  }
`;

export default Category;