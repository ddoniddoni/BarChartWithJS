const svg = document.getElementById("chart");
const xPlace = 20;
const yPlace = 500;

const btnAdd = document.getElementById("btnAdd");
const btnDel = document.getElementById("btnDel");

const xValue = document.getElementById("xValue");

const addRect = () => {
  if (!xValue.value) {
    alert("내용을 입력해주세요.");
    xValue.focus();
    return false;
  }
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  rect.setAttribute("width", "40");
  rect.setAttribute("height", `${xValue.value}`);
  rect.setAttribute("x", (svg.childElementCount / 2) * 50);
  rect.setAttribute("y", 500 - xValue.value);

  text.setAttribute("x", (svg.childElementCount / 2) * 50 + 8);
  text.setAttribute("y", 490 - xValue.value);

  svg.appendChild(rect);
  svg.appendChild(text);

  text.innerHTML = document.getElementById("xValue").value;

  console.log(svg.childElementCount);

  xValue.value = "";
  xValue.focus();
};

const delLastEle = () => {
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }
};

btnAdd.addEventListener("click", addRect);
btnDel.addEventListener("click", delLastEle);
