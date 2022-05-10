console.log("It is working!");

function doStuff() {
  const cta = document.querySelector(".cta-button"); // go to dom and find class cta button
  cta.style.display = "none";
  let message = document.createElement("p"); // goes to dom and creates a paragraph
  message.innerHTML = "Your order has been placed!"; // put that message inside of the paragraph  just created
  document.querySelector("section").appendChild(message);
}
