function play(){
    // alert("HI")
    document.querySelector(".intro-page").style.display='none';
    document.querySelector(".choice-menu").style.display='grid';
    // console.log(intro);
}

function choice(chosen){
    let ch = chosen.textContent;
    document.querySelector(".choice-menu").style.display='none';
    document.querySelector(".game-page").style.display='grid';
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    //Drawing board
    ctx.beginPath();
    ctx.rect(20,50,1,100);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(15,55,130,1);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(125,58,1,10);
    ctx.stroke();
    //Drawing head
    ctx.beginPath();
    ctx.arc(125,78,7,0,2*Math.PI);
    ctx.stroke();
    //Drawing torso
    ctx.beginPath();
    ctx.rect(125,87,1,20);
    ctx.stroke();
    //Drawing hands
    ctx.beginPath();
    ctx.rect(100,90,50,1);
    ctx.stroke();
    //Drawing Leg 1
    ctx.rotate(Math.PI/6);
    ctx.beginPath();
    ctx.rect(160,31,1,15);
    ctx.stroke();
    //Drawing Leg 2
    ctx.rotate(-Math.PI/3);
    ctx.beginPath();
    ctx.rect(56,157,1,15);
    ctx.stroke();
    if(ch==="Country"){
        document.querySelector(".country").style.display='grid';
    }
}