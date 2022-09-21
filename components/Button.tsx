import styled from 'styled-components';

function Button({ color, text }) {
  const StyleButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${color ? color : 'white'};
  `;

  const handleClick = () => {
    return null;
  };

  return <StyleButton onClick={handleClick}>${text}</StyleButton>;
}

export default Button;
