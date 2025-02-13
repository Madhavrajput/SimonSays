 let gameSeq = [];
 let userSeq = [];
 let btns = ["yellow", "red", "green", "purple"];
 let started = false;
 let level = 0;
 let hlevel = 0;
 let h2 = document.querySelector("h2");
 document.addEventListener("keypress", function() {
    if(started == false){
    started = true;
    levelUp();
    }
 });
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
 }
 function levelUp(){

   if(level > hlevel){
      hlevel = level;
   }
   userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
 }
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length === gameSeq.length){
         setTimeout(levelUp, 1000);
      }
    }else{
      h2.innerHTML = `<h3 id='hscore'>High Score is: ${hlevel+1}</h3>Game Over! <h2 id='score'> Your Score is: ${level}</h2>Press any key to start.`;
      document.querySelector("body").style.backgroundColor = '#f00';
      setTimeout(() => {
         document.querySelector("body").style.backgroundColor = '#fff';
      }, 500);
      reset();
    }
}
 function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns( userSeq.length-1);
 }
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
 }