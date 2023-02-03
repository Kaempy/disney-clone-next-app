import styled from "styled-components";

const Nav = styled.nav`
  height: 70px;
  background: #09031b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  overflow: hidden;
  z-index: 3;
  color: ${(props) => props.theme.white};
`;

const Logo = styled.img`
  width: 80px;
  pointer: cursor;
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
export const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 1rem 2rem;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
  background-color: transparent;
  cursor: pointer;
  border-color: bisque;
  color: white;
  &:hover {
    color: bisque;
    background-color: rgba(366, 366, 366, 0.09);
  }
`;
export { Logo, LoginContainer, Nav };
