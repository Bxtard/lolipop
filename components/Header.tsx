import {
  LogoContainer,
  Wrapper,
  Navbar,
  Menu,
  MenuItem,
  MenuItemLink,
} from './Header.elements';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

function Header() {
  return (
    <Navbar>
      <Wrapper>
        <LogoContainer>
          <Image
            src='/lolipopdrop2.png'
            alt='lolipop_logo'
            width={100}
            height={100}
            layout='intrinsic'
          />
        </LogoContainer>
        <Menu>
          <MenuItem>
            <MenuItemLink>
              <FaHome />
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Navbar>
  );
}

export default Header;
