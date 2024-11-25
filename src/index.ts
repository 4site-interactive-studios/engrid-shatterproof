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
  Debug: App.getUrlParameter("debug") === "true",
  onLoad: () => {
    console.log("Starter Theme Loaded"); /*dataCapture();*/
    (<any>window).DonationMultistepForm = DonationMultistepForm;
    new DonationMultistepForm(App, DonationAmount, DonationFrequency);
    customScript(App, DonationFrequency);
  },
  onResize: () => console.log("Starter Theme Window Resized"),
};

if (document.body.getAttribute("data-engrid-theme") === "shatterproof-v2") {
  options.VGS = {
    "transaction.ccnumber": {
      placeholder: "• • • •   • • • •   • • • •   • • • •",
      css: {
        "@font-face": {
          "font-family": "museo-sans",
          src: "url(https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)",
        },
        fontFamily: "museo-sans, sans-serif",
        borderRadius: "10px 10px 0 0",
        borderBottom: "2px solid #000000",
        boxSizing: "border-box",
        transition: "border-width 0.1s linear, padding-bottom 0.1s linear",
        "&::placeholder": {
          fontWeight: "normal",
          fontSize: "16px",
        },
        "&:focus": {
          outline: "none",
          borderColor: "#9543ff",
        },
        "&:hover": {
          borderWidth: "4px",
          paddingBottom: "14px",
          borderColor: "#9543ff",
        },
        "&:focus:hover": {
          borderWidth: "2px",
          paddingBottom: "16px",
          borderColor: "#9543ff",
        },
      },
    },
    "transaction.ccvv": {
      css: {
        "@font-face": {
          "font-family": "museo-sans",
          src: "url(https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3)",
        },
        fontFamily: "museo-sans, sans-serif",
        borderRadius: "10px 10px 0 0",
        borderBottom: "2px solid #000000",
        boxSizing: "border-box",
        transition: "border-width 0.1s linear, padding-bottom 0.1s linear",
        "&::placeholder": {
          fontWeight: "normal",
          fontSize: "20px",
        },
        "&:focus": {
          outline: "none",
          borderColor: "#9543ff",
        },
        "&:hover": {
          borderWidth: "4px",
          paddingBottom: "14px",
          borderColor: "#9543ff",
        },
        "&:focus:hover": {
          borderWidth: "2px",
          paddingBottom: "16px",
          borderColor: "#9543ff",
        },
      },
    },
  };
}

new App(options);

document
  .getElementsByTagName("body")[0]
  .setAttribute("data-engrid-client-js-loading", "finished");
