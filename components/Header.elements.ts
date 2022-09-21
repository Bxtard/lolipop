import styled from 'styled-components';

const width = '100%';
export const Navbar = styled.nav`
  width: ${width};
  height: 70px;
  background-color: #e6d4ee;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;
export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
`;
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: none;
`;
export const MenuItem = styled.li`
  height: 100%;
`;
export const MenuItemLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #b151ed;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #be87d7;
  }
`;
