let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#res-btn");
let newBtn=document.querySelector("#new-btn");
let msgCon=document.querySelector("#msg-con");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enbleBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledBoxes();

};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2 !="" && pos2!=""){
            if(pos1===pos2 && pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
const resetGame=()=>{
    turnO=true;
    enbleBoxes();
    msgCon.classList.add("hide");
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);