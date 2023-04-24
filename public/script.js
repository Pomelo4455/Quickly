const form = document.querySelector("#form");
const homeButton = document.querySelector("nav li:first-child a");
const aboutButton = document.querySelector("nav li:nth-child(2) a");
const contactButton = document.querySelector("nav li:nth-child(3) a");
const outputDiv = document.querySelector("#output");
const outputText = document.createElement("span");
const clearButton = document.querySelector("#clearButton");
const copyButton = document.getElementById("copyButton");

copyButton.style.display = "none";
clearButton.style.display = "none";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.querySelector("#url").value;
  const loadingMessage = document.querySelector("#loadingMessage");
  loadingMessage.innerText = "Loading...";
  const response = await fetch(`/summarize?url=${url}`);
  const summary = await response.text();
  loadingMessage.innerText = "";

  outputDiv.innerHTML = "";
  outputText.innerHTML = "";
  outputDiv.appendChild(outputText);
  copyButton.style.display = "block";
  clearButton.style.display = "block";

  // Loop through each character of the output text and append it to the output span
  for (let i = 0; i < summary.length; i++) {
    setTimeout(() => {
      outputText.innerHTML += summary.charAt(i);
    }, i * 25);
  }
});

homeButton.addEventListener("click", (event) => {
  event.preventDefault();
  outputDiv.innerHTML = "";
  outputText.innerHTML = "";
  outputText.innerHTML = "This is home!";
  outputDiv.appendChild(outputText);
  copyButton.style.display = "none";
});

aboutButton.addEventListener("click", (event) => {
  event.preventDefault();
  outputDiv.innerHTML = "";
  outputText.innerHTML = "";
  outputText.innerHTML =
    "This is <a class='link' href='https://portfolio-blush-three-74.vercel.app/'>me</a>!";
  outputDiv.appendChild(outputText);
  copyButton.style.display = "none";
});

contactButton.addEventListener("click", (event) => {
  event.preventDefault();
  outputDiv.innerHTML = "";
  outputText.innerHTML = "";
  outputText.innerHTML =
    "<a class='link' href='https://portfolio-blush-three-74.vercel.app/'>Here</a> is my portfolio, you can find my contact information there!";
  outputDiv.appendChild(outputText);
  copyButton.style.display = "none";
});

copyButton.addEventListener("click", () => {
  const output = document.getElementById("output").innerText;
  navigator.clipboard.writeText(output);
});

clearButton.addEventListener("click", () => {
  document.querySelector("#url").value = "";
  outputDiv.innerHTML = "";
  copyButton.style.display = "none";
  clearButton.style.display = "none";
});
