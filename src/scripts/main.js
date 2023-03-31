export const customScript = function (App) {
  console.log("ENGrid client scripts are executing");
  // Use addHtml in engrid.js to add HTML to the page
  App.addHtml(
    '<div class="upsell-message"><p class="recurring-frequency-y-show">Thank you! Your monthly does even more to help people who are living with addiction.</p><p class="recurring-frequency-n-show">Giving monthly is the best way to help provide access to quality addiction treatment.</p><span class="arrow"></span></div>',
    ".insert-upsell-message > div:last-child",
    "after"
  );
};
