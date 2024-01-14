const heading = document.createElement("h1");
const para = document.createElement("p");
const division = document.createElement("div");
const division1 = document.createElement("div");
const input = document.createElement("input");
const btn = document.createElement("button");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn10 = document.createElement("button");
const btn11 = document.createElement("button");
const btn12 = document.createElement("button");
const btn13 = document.createElement("button");
const btn14 = document.createElement("button");
const btn15 = document.createElement("button");
const btn16 = document.createElement("button");
const btn17 = document.createElement("button");
const btn18 = document.createElement("button");

heading.setAttribute("id", "title");
heading.innerText = "Calculator task";
para.setAttribute("id", "description");
para.innerText = "Create a calculator using Dom";
division.setAttribute("class", "Container");
division1.setAttribute("class", "Calculator");
input.className = "outputscreen";
input.type = "text";
input.placeholder = "0";
input.id = "result";

btn.setAttribute("id", "clear");
btn.innerText = "C";
btn.addEventListener("click", () => {
  input.value = "";
});

btn1.setAttribute("id", "delete");

btn1.innerText = "<--";
btn1.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

btn2.setAttribute("id", ".");
btn2.innerText = ".";
btn2.addEventListener("click", () => {
  input.value += ".";
});
btn3.setAttribute("id", "mul");

btn3.innerText = "X";
btn3.addEventListener("click", () => {
  input.value += "*";
});
btn4.setAttribute("id", "7");

btn4.innerText = "7";
btn4.addEventListener("click", () => {
  input.value += "7";
});
btn5.setAttribute("id", "8");

btn5.innerText = "8";
btn5.addEventListener("click", () => {
  input.value += "8";
});
btn6.setAttribute("id", "9");

btn6.innerText = "9";
btn6.addEventListener("click", () => {
  input.value += "9";
});
btn7.setAttribute("id", "divide");

btn7.innerText = "/";
btn7.addEventListener("click", () => {
  input.value += "/";
});
btn8.setAttribute("id", "4");

btn8.innerText = "4";
btn8.addEventListener("click", () => {
  input.value += "4";
});
btn9.setAttribute("id", "5");

btn9.innerText = "5";
btn9.addEventListener("click", () => {
  input.value += "5";
});
btn10.setAttribute("id", "6");

btn10.innerText = "6";
btn10.addEventListener("click", () => {
  input.value += "6";
});
btn11.setAttribute("id", "sub");
btn11.setAttribute("id", "subtract");

btn11.innerText = "-";
btn11.addEventListener("click", () => {
  input.value += "-";
});
btn12.setAttribute("id", "1");

btn12.innerText = "1";
btn12.addEventListener("click", () => {
  input.value += "1";
});
btn13.setAttribute("id", "2");

btn13.innerText = "2";
btn13.addEventListener("click", () => {
  input.value += "2";
});
btn14.setAttribute("id", "3");

btn14.innerText = "3";
btn14.addEventListener("click", () => {
  input.value += "3";
});

btn15.setAttribute("id", "add");

btn15.innerText = "+";
btn15.addEventListener("click", () => {
  input.value += "+";
});
btn16.setAttribute("id", "0");

btn16.innerText = "0";
btn16.addEventListener("click", () => {
  input.value += "0";
});
btn17.setAttribute("id", "00");

btn17.innerText = "00";
btn17.addEventListener("click", () => {
  input.value += "00";
});

btn18.setAttribute("id", "equal");
btn18.innerText = "=";
btn18.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch (err) {
    alert("Invalid, Only numbers are applicable");
  }
});

division1.append(
  input,
  btn,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18
);

document.body.append(heading);
document.body.append(para);
division.append(division1);
document.body.append(division);