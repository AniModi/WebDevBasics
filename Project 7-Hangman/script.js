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
    ctx.lineWidth=0.5;
    ctx.beginPath();
    ctx.rect(20,50,10,100);
    ctx.stroke();
    ctx.beginPath()
    ctx.rect(15,55,130,2);
    ctx.stroke();
    ctx.beginPath()
    ctx.rect(125,58,5,10);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(127,77,7,0,2*Math.PI);
    ctx.stroke();
    if(ch==="Country"){
        document.querySelector(".country").style.display='grid';
    }
}