export const customScript = function (App) {
  console.log("ENGrid client scripts are executing");
  // Use addHtml in engrid.js to add HTML to the page
  App.addHtml(
    '<div class="upsell-message"><p class="recurring-frequency-y-show">Thank you! Your monthly does even more to help people who are living with addiction.</p><p class="recurring-frequency-n-show">Giving monthly is the best way to help provide access to quality addiction treatment.</p><span class="arrow"></span></div>',
    ".insert-upsell-message > div:last-child",
    "after"
  );

  function handlePersonalMessageField() {
    const personalMessageTextarea = document.querySelector('textarea[name="transaction.gftrsn"]');
    const hasPersonalMessageField = document.querySelector('input[name="supporter.NOT_TAGGED_32"]');

    // Check if the required fields exist on the page
    if (!personalMessageTextarea || !hasPersonalMessageField) {
      console.warn('Personal message field or hasPersonalMessageField not found. Aborting.');
      return;
    }

    function updateHasPersonalMessageField() {
      const hasPersonalMessage = personalMessageTextarea.value.trim() !== '';
      hasPersonalMessageField.value = hasPersonalMessage ? 'true' : 'false';
    }

    personalMessageTextarea.addEventListener('input', updateHasPersonalMessageField);

    // Initial update of the hasPersonalMessageField value
    updateHasPersonalMessageField();
  }

  handlePersonalMessageField();

};
