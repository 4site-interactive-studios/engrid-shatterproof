import {
  Options,
  App,
  DonationAmount,
  DonationFrequency,
} from "@4site/engrid-scripts"; // Uses ENGrid via NPM
// import {
//   Options,
//   App,
//   DonationAmount,
//   DonationFrequency,
// } from "../../engrid/packages/scripts"; // Uses ENGrid via Visual Studio Workspace

document
  .getElementsByTagName("body")[0]
  .setAttribute("data-engrid-client-js-loading", "started");

import "./sass/main.scss";
import DonationMultistepForm from "./scripts/donation-multistep-form";
import { customScript } from "./scripts/main.js";

const options: Options = {
  applePay: false,
  AutoYear: true,
  CapitalizeFields: true,
  ClickToExpand: true,
  CurrencySymbol: "$",
  DecimalSeparator: ".",
  MinAmount: 1,
  MinAmountMessage: "Amount must be at least $1",
  ThousandsSeparator: ",",
  MediaAttribution: true,
  SkipToMainContentLink: true,
  SrcDefer: true,
  ProgressBar: true,
  Debug: App.getUrlParameter("debug") == "true" ? true : false,
  onLoad: () => {
    console.log("Starter Theme Loaded"); /*dataCapture();*/
    (<any>window).DonationMultistepForm = DonationMultistepForm;
    new DonationMultistepForm(App, DonationAmount, DonationFrequency);
    customScript(App, DonationFrequency);
  },
  onResize: () => console.log("Starter Theme Window Resized"),
};
new App(options);

document
  .getElementsByTagName("body")[0]
  .setAttribute("data-engrid-client-js-loading", "finished");
