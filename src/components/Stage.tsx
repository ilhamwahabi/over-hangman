import React from "react";
import { observer } from "mobx-react-lite";
import FlipMove from "react-flip-move";
import cx from "classnames";

import { quizState } from "../state/quizState";
import { themeState } from "../state/themeState";

const Stage = () => {
  const dotClass = "w-2 h-2 md:w-4 md:h-4 my-4";

  const renderStageDot = () => {
    return Array.from({ length: 5 - quizState.stage }).map((_, index) => {
      return (
        <div
          className={cx(
            `${dotClass} border-2`,
            { "border-blue-dark": themeState.theme === "light" },
            { "border-orange": themeState.theme === "dark" }
          )}
          style={{ borderRadius: "50%" }}
          key={index}
        />
      );
    });
  };

  const renderFinishedStage = () => {
    return Array.from({ length: quizState.stage }).map((el, index) => {
      return (
        <div
          className={cx(
            `${dotClass} border-4 md:border-8`,
            { "border-blue-dark": themeState.theme === "light" },
            { "border-orange": themeState.theme === "dark" }
          )}
          style={{ borderRadius: "50%" }}
          key={index}
        />
      );
    });
  };

  return (
    <div className="fixed p-l p-y mx-4">
      <FlipMove>
        {renderFinishedStage()}
        {renderStageDot()}
      </FlipMove>
    </div>
  );
};

export default observer(Stage);
