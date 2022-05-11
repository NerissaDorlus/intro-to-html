console.log("It is working!");

function doStuff() {
  //go get cta button
  const cta = document.querySelector(".cta-button");
  // set display property in style to none which hides it
  cta.style.display = "none";
  // goes to dom and creates a paragraph
  let message = document.createElement("p");
  // put that message inside of the paragraph  just created
  message.innerHTML = "Your order has been placed!";
  //find the <section> tag and to the end our new paragraph
  document.querySelector("section").appendChild(message);
}
