import { phili_h } from "../../declarations/phili_h";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with phili_h actor, calling the greet method
  const greeting = await phili_h.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
