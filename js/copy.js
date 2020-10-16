function copyFirst() {
  /* Get the text field */
  var copyText = document.getElementById("first");
  console.log(copyText);
  /* Select the text field */
  copyText.closest;
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text !");
}
