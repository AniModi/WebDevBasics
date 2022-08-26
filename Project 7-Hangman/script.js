let lives = 0;
let arr = [];
let len=0;
function play() {
  document.querySelector(".intro-page").style.display = "none";
  document.querySelector(".choice-menu").style.display = "grid";
}

function randomQuestion(ch) {
  if (ch === "Country") {
    let i = Math.floor(Math.random() * (countries.length - 1));
    return setBoard(i, ch);
  } else if (ch === "Animals") {
    let i = Math.floor(Math.random() * (animals.length - 1));
    console.log(animals[i]);
    return setBoard(i, ch);
  } else if (ch === "Presidents") {
    let i = Math.floor(Math.random() * (Presidents.length - 1));
    return setBoard(i, ch);
  } else {
    let i = Math.floor(Math.random() * 3);
    return i == 0
      ? randomQuestion("Country")
      : i == 1
      ? randomQuestion("Animals")
      : randomQuestion("Presidents");
  }
}

function setHint(h) {
  document.querySelector(".hint").textContent = h;
}

function setBoard(ind, ch) {
  let answer = {};
  let question;
  if (ch === "Country") {
    question = countries[ind];
  } else if (ch === "Animals") {
    question = animals[ind];
  } else {
    question = Presidents[ind];
  }
  let q = question.name;
  let h = question.hint;
  let words = q.split(/[ ,]+/).filter(Boolean);
  let i = 0;
  let f = -1;
  let letters = document.querySelectorAll(".letters");
  for (let w = 0; w < words.length; w++) {
    if (10 - i < words[w].length) {
      f = w;
      for (; i < 10; i++){ 
        letters[i].style.border = "none";
        letters[i].textContent = ' ';
    }
      break;
    }
    for (let c = 0; c < words[w].length; c++) {
      i++;
    }
    letters[i].style.border = "none";
    letters[i].textContent = '';
  }
  if (f !== -1) {
    for (let w = f; w < words.length; w++) {
      for (let c = 0; c < words[w].length; c++) {
        answer[i] = w;
        i++;
      }
      letters[i].style.border = "none";
      letters[i].textContent = '';
    }
  }
  for (; i < 20; i++)
  {
    letters[i].style.border = "none";
    letters[i].textContent = ' ';
  }
  setHint(h);
  return [q, answer];
}

function drawHangman(i) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  ctx.lineWidth=2;
  //Drawing board
  if (i == 0) {
    ctx.beginPath();
    ctx.rect(20, 50, 1, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(15, 55, 130, 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(125, 58, 1, 10);
    ctx.stroke();
  }
  if (i == 1) {
    //Drawing head
    ctx.beginPath();
    ctx.arc(125, 78, 7, 0, 2 * Math.PI);
    ctx.stroke();
  }
  if (i == 2) {
    //Drawing torso
    ctx.beginPath();
    ctx.rect(125, 87, 1, 20);
    ctx.stroke();
  }
  if (i == 3) {
    //Drawing hands
    ctx.beginPath();
    ctx.rect(100, 90, 50, 1);
    ctx.stroke();
  }
  if (i == 4) {
    //Drawing Leg 1
    ctx.rotate(Math.PI / 6);
    ctx.beginPath();
    ctx.rect(160, 31, 1, 15);
    ctx.stroke();
  } //Drawing Leg 2
  if (i == 5) {
    ctx.rotate(-Math.PI / 3);
    ctx.beginPath();
    ctx.rect(56, 157, 1, 15);
    ctx.stroke();
  } if(i>=5) return -1;
}

function letterClick(btn){
  if(btn.style.textDecoration=='line-through')return;
  let c = btn.textContent;
  btn.style.textDecoration = 'line-through';
  console.log(c);
  let q = arr[0].toUpperCase();
  let a = true;
  let letters = document.querySelectorAll(".letters");
  let j=0;
  for (let i = 0; i < q.length; i++,j++) {
    if(q[i]==' ' && letters[j].textContent==' ')j=9
    if (q[i] == c) {
      letters[j].textContent = c;
      console.log(j+" "+i)
      len++;
      a = false;
    }
  }
  console.log(q)
  if(len===q.replace(/ /g,'').length)alert("You WON")
  if (a) lives++;
  if (drawHangman(lives) === -1) {
    alert("Game Over");
  }
}

function choice(chosen) {
  let ch = chosen.textContent;
  document.querySelector(".choice-menu").style.display = "none";
  document.querySelector(".game-page").style.display = "grid";
  drawHangman(0);
  document.querySelector(".game").style.display = "grid";
  if (ch === "Country") {
    arr = randomQuestion(ch);
  } else if (ch === "Animals") {
    arr = randomQuestion(ch);
  } else if (ch === "Presidents") {
    arr = randomQuestion(ch);
  } else {
    arr = randomQuestion(ch);
  }
}
