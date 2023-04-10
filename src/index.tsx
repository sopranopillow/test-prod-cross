import { DatePicker } from "@fluentui/react-datepicker-compat";
import { DatePicker as V8DatePicker, initializeIcons } from "@fluentui/react";
// import {
//   FluentProvider,
//   Input,
//   webLightTheme,
// } from "@fluentui/react-components";
import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

initializeIcons();
const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <FluentProvider theme={webLightTheme}>
      <DatePicker />
    </FluentProvider>
    {/* <V8DatePicker /> */}
  </div>,
  app
);
