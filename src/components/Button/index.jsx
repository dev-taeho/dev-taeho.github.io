import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  background-color: orange;
  width: 171px;
  height: 44px;
  color: black;
  font-weight: 450;
  border: none;
  border-radius: 10px;
  &:enabled:active {
    opacity: 0.4;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export default function DefaultButton({ btnText, ...rest }) {
  return <Button {...rest}>{btnText}</Button>;
}
