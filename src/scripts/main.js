export const customScript = function (App) {
  console.log("ENGrid client scripts are executing");
  // Use addHtml in engrid.js to add HTML to the page
  App.addHtml(
    '<div class="upsell-message"><p class="recurring-frequency-y-show">Thank you! Your monthly does even more to help people who are living with addiction.</p><p class="recurring-frequency-n-show">Giving monthly is the best way to help provide access to quality addiction treatment.</p><span class="arrow"></span></div>',
    ".insert-upsell-message > div:last-child",
    "after"
  );

  /**
   * This function, updateHasPersonalMessageField, monitors the "transaction.gftrsn" textarea for changes
   * and updates the value of the "supporter.NOT_TAGGED_32" hidden input field accordingly. If the
   * "supporter.NOT_TAGGED_32" field doesn't exist on the page, it adds it with the specified markup.
   */
  function watchHasPersonalMessageField() {
    // Check if the required fields exist on the page
    const personalMessageTextarea = document.querySelector(
      "textarea[name='transaction.gftrsn']"
    );
    let hasPersonalMessageField = document.querySelector(
      "input[name='supporter.NOT_TAGGED_32']"
    );

    // If the personal message textarea exists but the hasPersonalMessageField doesn't
    if (personalMessageTextarea && !hasPersonalMessageField) {
      // Create the hasPersonalMessageField with the specified markup
      const newField = document.createElement("div");
      newField.setAttribute(
        "class",
        "en__field en__field--text en__field--NOT_TAGGED_32 hide"
      );
      newField.innerHTML = `
        <label for="en__field_supporter_NOT_TAGGED_32" class="en__field__label" style="">Has Personalized Message</label>
        <div class="en__field__element en__field__element--text">
          <input id="en__field_supporter_NOT_TAGGED_32" type="text" class="en__field__input en__field__input--text" name="supporter.NOT_TAGGED_32" value="">
        </div>
      `;

      // Insert the new field after .en__field--gftrsn
      const gftrsnField = document.querySelector(".en__field--gftrsn");
      if (gftrsnField) {
        gftrsnField.insertAdjacentElement("afterend", newField);
        hasPersonalMessageField = document.querySelector(
          "input[name='supporter.NOT_TAGGED_32']"
        );
      }
    }

    // Update the hasPersonalMessageField value based on the personalMessageTextarea
    function updateHasPersonalMessageField() {
      if (personalMessageTextarea && hasPersonalMessageField) {
        console.log("Updating hasPersonalMessageField value");
        hasPersonalMessageField.value = personalMessageTextarea.value
          ? "true"
          : "false";
      } else {
        console.log("Unable to update hasPersonalMessageField value");
      }
    }

    // Add an input event listener to the personalMessageTextarea
    if (personalMessageTextarea) {
      updateHasPersonalMessageField();
      personalMessageTextarea.addEventListener(
        "input",
        updateHasPersonalMessageField
      );
    }
  }

  // Call the function initially
  watchHasPersonalMessageField();

  // Check if the page has the "In Memory Of" checkbox, and if it's not selected then ensure the notification field inside it is also set to "Do not notify"
  const checkbox = document.getElementById("en__field_transaction_inmem");

  // Check if checkbox exists and is not selected
  if (checkbox && !checkbox.checked) {
    // console.log("In Honor of Memory was not selected. Checking which Notify Method is selected.");

    // Find the radio button with the value "Do not notify" within the specified class
    const doNotNotifyRadioSelect = document.querySelector(
      '.en__field--NOT_TAGGED_24 input[type=radio][value="Do not notify"]'
    );
    const doNotNotifyTextInput = document.querySelector(
      "#en__field_supporter_NOT_TAGGED_30"
    );
    // Check if the radio button exists and select it
    if (
      doNotNotifyRadioSelect &&
      !doNotNotifyRadioSelect.checked &&
      doNotNotifyTextInput
    ) {
      // console.log("The Notify Method was not selected as 'Do not notify' but it should be. So we selected it and set the corresponding Text Input's value to 'Do not notify'");
      doNotNotifyRadioSelect.checked = true;
      doNotNotifyTextInput.value = "Do not notify";
    }
  }
};
