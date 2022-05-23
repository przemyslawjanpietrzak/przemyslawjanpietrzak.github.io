import React from "react";
import PropTypes from "prop-types";
import { createRoot } from "react-dom/client";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";

import Presentation from "./presentation";

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>
);

if (module.hot) {
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default;
    root.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>
    );
  });
}
