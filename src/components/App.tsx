import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import Title from "./Title";
import Toggle from "./Toggle";
import Main from "./Main/Main";
import Footer from "./Footer";
import Direction from "./Direction";
import Stage from "./Stage";
import Chance from "./Chance";
import Result from "./Result";
import { themeState } from "../state/themeState";

const App = () => {
  return (
    <div
      className={cx(
        `transition-bg w-screen h-screen flex flex-col justify-center`,
        { "bg-white": themeState.theme === "light" },
        { "bg-black": themeState.theme === "dark" }
      )}
    >
      <Title />
      <Stage />
      <Toggle />
      <Main />
      <Result />
      <Direction />
      <Chance />
      <Footer />
    </div>
  );
};

export default observer(App);
