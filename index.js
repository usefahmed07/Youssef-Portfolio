const output = document.getElementById("output");
const input = document.getElementById("command");

const commands = {
  help: () => "whoami, contact, clear",
  whoami: () => "Youssef Ahmed - Software Engineer",
  contact: () => "Email: youssef.ahmed.hamaza@gmail.com",
};

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerHTML += `<div>$ ${cmd}</div>`;
    output.innerHTML += `<div>${commands[cmd]?.() || "command not found"}</div>`;
    input.value = "";
  }
});
