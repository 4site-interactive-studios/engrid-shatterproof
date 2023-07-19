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
    const personalMessageTextarea = document.querySelector("textarea[name='transaction.gftrsn']");
    let hasPersonalMessageField = document.querySelector("input[name='supporter.NOT_TAGGED_32']");

    // If the personal message textarea exists but the hasPersonalMessageField doesn't
    if (personalMessageTextarea && !hasPersonalMessageField) {
      // Create the hasPersonalMessageField with the specified markup
      const newField = document.createElement("div");
      newField.setAttribute("class", "en__field en__field--text en__field--NOT_TAGGED_32 hide");
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
        hasPersonalMessageField = document.querySelector("input[name='supporter.NOT_TAGGED_32']");
      }
    }
    
    // Update the hasPersonalMessageField value based on the personalMessageTextarea
    function updateHasPersonalMessageField(){
      if (personalMessageTextarea && hasPersonalMessageField) {
        console.log("Updating hasPersonalMessageField value");
        hasPersonalMessageField.value = personalMessageTextarea.value ? "true" : "false";
      } else {
        console.log("Unable to update hasPersonalMessageField value");
      }
    }    

    // Add an input event listener to the personalMessageTextarea
    if (personalMessageTextarea) {
      updateHasPersonalMessageField();
      personalMessageTextarea.addEventListener("input", updateHasPersonalMessageField);
    }
  }

  // Call the function initially
  watchHasPersonalMessageField();
};
