function play(){
    document.querySelector(".intro-page").style.display='none';
    document.querySelector(".choice-menu").style.display='grid';
}


function randomQuestion(ch){
    if(ch==="Country"){
        let i = Math.floor(Math.random()*(countries.length-1));
        return setBoard(i,ch);
    }
    else if(ch==="Animals"){
        let i = Math.floor(Math.random()*(animals.length-1));
        console.log(animals[i])
        return setBoard(i,ch);
    }
    else if(ch==="Presidents"){
        let i = Math.floor(Math.random()*(Presidents.length-1));
        return setBoard(i,ch);
    }
    else{
        let i = Math.floor(Math.random()*3);
        i==0?randomQuestion("Country"):i==1?randomQuestion("Animals"):randomQuestion("Presidents");
    }
}


function setHint(h){
    document.querySelector(".hint").textContent=h;
}


function setBoard(ind,ch){
    let answer = {};
    let question;
    if(ch==="Country"){
        question=countries[ind];
    }
    else if(ch==="Animals"){
        question=animals[ind];
    }
    else{
        question=Presidents[ind];
    }
    let q = question.name;
    let h = question.hint;
    let words = q.split(/[ ,]+/).filter(Boolean);
    let i =0;
    let f = -1;
    let letters = document.querySelectorAll(".letters");
    for(let w=0;w<words.length;w++){
        if(10-i<words[w].length){
            f=w;
            for(;i<10;i++)
            letters[i].style.border='none';
            break;
        }
        for(let c=0;c<words[w].length;c++){
            i++;
        }
        letters[i].style.border='none';
    }
    if(f!==-1){
        for(let w=f;w<words.length;w++){
            for(let c=0;c<words[w].length;c++){
                answer[i]=w;
                i++;
            }
            letters[i].style.border='none';
        }
    }
    for(;i<20;i++)
    letters[i].style.border='none';
    setHint(h);
    return [q,answer];
}



function letterClick(btn){
    return btn.textContent;
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
    document.querySelector(".game").style.display='grid';
    if(ch==="Country"){
        let arr = randomQuestion(ch);
    }
    else if(ch==="Animals"){
        let arr = randomQuestion(ch);
    }
    else if(ch==="Presidents"){
        let arr = randomQuestion(ch);
    }
    else if(ch==="Random from above"){
        let arr = randomQuestion(ch);
    }

}