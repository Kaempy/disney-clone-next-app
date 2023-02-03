import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const HomePage = dynamic(import("@src/components/pages"));
const Home: NextPage = () => {
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
};

export default Home;
