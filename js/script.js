(() => {
  // Get the current year for the footer
  let date = new Date();
  document.getElementById("current-year").textContent = date
    .getFullYear()
    .toString();
})();

function onButtonSubmit() {
  let submitMessage = "";
  let name = document.getElementById("name").value || "";
  let email = document.getElementById("email").value || "";
  let message = document.getElementById("message").value || "";

  const dialog = document.getElementById("submitMessage");
  const dialogMessage = document.getElementById("submitMessageText");

  name == "" || email == "" || message == ""
    ? (submitMessage =
        "Please fill out all the required fields and submit again.")
    : (submitMessage = "Thank you for your query. We will be in contact soon.");

  dialogMessage.textContent = submitMessage;

  dialog.showModal();

  return false;
}
