import { Login, LoginContainer, Logo, Nav } from "./styles";

type Props = {};

const Header = (props: Props) => {
  const renderComponent = () => (
    <LoginContainer>
      <Login>Sign In</Login>
    </LoginContainer>
  );
  return (
    <Nav>
      <Logo
        src="/images/disney-logo.png"
        alt="Disney logo"
        title="Disney logo"
      />
      {renderComponent()}
    </Nav>
  );
};

export default Header;
