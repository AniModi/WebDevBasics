let lives = 0;
let arr = [];
let len=0;
function play(){
  document.querySelector(".intro-page").style.display = "none";
  document.querySelector(".choice-menu").style.display = "grid";
  document.querySelector(".game-over").style.display = "none";
  document.querySelector(".game-won").style.display = "none";
  let letters = document.querySelectorAll(".letters");
  for(let i=0;i<20;i++){
    letters[i].style.borderBottom = "3px solid black";
    letters[i].textContent='';
  }
  let btn = document.querySelectorAll('.characters');
  for(let i=0;i<26;i++){
    btn[i].style.textDecoration='none';
  }
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  lives=0;
  len=0;
}

function randomQuestion(ch) {
  if (ch === "Country") {
    let i = Math.floor(Math.random() * (countries.length - 1));
    return setBoard(i, ch);
  } else if (ch === "Animals") {
    let i = Math.floor(Math.random() * (animals.length - 1));
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

function gameOver(){
  document.querySelector(".game-page").style.display = "none";
  document.querySelector(".game-over").style.display = "grid";
}

function gameWon(){
  document.querySelector(".game-page").style.display = "none";
  document.querySelector(".game-won").style.display = "grid";
}


function exit(){
  window.close()
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
  return q;
}

function drawHangman(i) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  ctx.lineWidth=2;
  //Drawing board
  if (i == 0) {
    ctx.beginPath();
    ctx.resetTransform()
    ctx.moveTo(0,0);
    ctx.clearRect(0, 0, 500, 1000);
    ctx.rect(20, 50, 1, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(15, 55, 130, 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(125, 58, 1, 10);
    ctx.stroke();
  }
  else if (i == 1) {
    //Drawing head
    ctx.beginPath();
    ctx.arc(125, 78, 7, 0, 2 * Math.PI);
    ctx.stroke();
  }
  else if (i == 2) {
    //Drawing torso
    ctx.beginPath();
    ctx.rect(125, 87, 1, 20);
    ctx.stroke();
  }
  else if (i == 3) {
    //Drawing hands
    ctx.beginPath();
    ctx.rect(100, 90, 50, 1);
    ctx.stroke();
  }
  else if (i == 4) {
    //Drawing Leg 1
    ctx.rotate(Math.PI / 6);
    ctx.beginPath();
    ctx.rect(160, 31, 1, 15);
    ctx.stroke();
  } //Drawing Leg 2
  else{
    ctx.rotate(-Math.PI / 3);
    ctx.beginPath();
    ctx.rect(56, 157, 1, 15);
    ctx.stroke();
  } 
}

function letterClick(btn){
  if(btn.style.textDecoration=='line-through')return;
  let c = btn.textContent;
  btn.style.textDecoration = 'line-through';
  let q = arr.toUpperCase();
  let a = true;
  let letters = document.querySelectorAll(".letters");
  let j=0;
  for (let i = 0; i < q.length; i++,j++) {
    if(q[i]==' ' && letters[j].textContent==' ')j=9
    if (q[i] == c) {
      letters[j].textContent = c;
      len++;
      a = false;
    }
  }
  if(len===q.replace(/ /g,'').length){
    setTimeout(gameWon,300);
  }
  if (a) lives++;
  drawHangman(lives)
  if (lives >= 5) {
    setTimeout(gameOver,300);
  }
}

function choice(chosen) {
  let ch = chosen.textContent;
  document.querySelector(".choice-menu").style.display = "none";
  document.querySelector(".game-page").style.display = "grid";
  drawHangman(0);
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
