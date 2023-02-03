import Foooter from "./footer";
import Header from "./header";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Foooter />
    </>
  );
};

export default Layout;
