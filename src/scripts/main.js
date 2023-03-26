export const customScript = function (App) {
  console.log("ENGrid client scripts are executing");
  // Use addHtml in engrid.js to add HTML to the page
  App.addHtml(
    '<div class="upsell-message"><p class="recurring-frequency-y-show">Thank you! Your monthly gift does even more to help end the addiction crisis.</p><p class="recurring-frequency-n-show">A monthly gift does even more to help end the addiction crisis.</p><span class="arrow"></span></div>',
    ".insert-upsell-message .en__field--recurrfreq",
    "after"
  );
};
