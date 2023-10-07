export const customScript = function (App, DonationFrequency) {
  console.log("ENGrid client scripts are executing");
  // Use addHtml in engrid.js to add HTML to the page
  App.addHtml(
    '<div class="upsell-message"><p class="recurring-frequency-y-show">Thank you! Your monthly does even more to help people who are living with addiction.</p><p class="recurring-frequency-n-show">Giving monthly is the best way to help provide access to quality addiction treatment.</p><span class="arrow"></span></div>',
    ".insert-upsell-message > div:last-child",
    "after"
  );
  // When click on the monthly-nudge, set Frequency to monthly
  const monthlyNudge = document.querySelector(".monthly-nudge");
  if (monthlyNudge) {
    const freq = DonationFrequency.getInstance();
    monthlyNudge.addEventListener("click", function () {
      if (freq.frequency !== "monthly") freq.setFrequency("monthly");
    });
  }
};
