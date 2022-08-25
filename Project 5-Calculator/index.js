var screen = document.querySelectorAll("input");
var arr = [];
var isDecimal = false;

function printVal(btn) {
  var val = btn.textContent.match(/\S/);
  console.log(val[0] == ".");
  if (val[0] == ".") {
    if (isDecimal === true) return;
    isDecimal = true;
    if (screen[0].value.length == 0) {
      screen[0].value += "0.";
    } else {
      screen[0].value += val[0];
    }
    return;
  }
  if (screen[0].value === "") {
    if (/\d/.test(val) == false) return;
  }
  if (/\d/.test(val) == false && /\d/.test(screen[0].value[screen[0].value.length-1]) == false) {
    screen[0].value = screen[0].value.slice(0, -1) + val[0];
    return;
  }
  screen[0].value += val[0];
}

function printResult() {
  screen[0].value = eval(screen[0].value);
  arr.push(screen[0].value);
}

function clearScr() {
  screen[0].value = "";
  arr = [];
  isDecimal = false;
}

function deleteVal() {
  screen[0].value = screen[0].value.slice(0, -1);
}
