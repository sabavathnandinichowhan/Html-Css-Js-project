let computerScore=0
let userScore=0
const choices=document.querySelectorAll('.choice')
const msg=document.querySelector("#play");
let userS=document.getElementById('user-score')
let computerS=document.getElementById("comp")
const genComputerChoice=()=>{
    const options=['rock','paper','scissor']
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
    //rock,paper,scissors
}
const showWinner=(userWin)=>
{
    if(userWin)
    {
        console.log('you win!')
        msg.innerText='You Win!';
        msg.style.backgroundColor='green'
        userScore+=1
        userS.innerText=userScore

    }
    else{
        console.log('computer win')
        msg.innerText='compueter win!'
        msg.style.backgroundColor='red'
        computerScore+=1
        computerS.innerText=computerScore;
    }
}
const drawGame=()=>{
    console.log('game was draw')
    msg.innerText='Draw!'
    msg.style.backgroundColor='yellow'
}
const playGame=(userChoice)=>{
    console.log("userchoice",userChoice);
    //generate computer 
    const computerChoice=genComputerChoice()
    console.log("computerchoice",computerChoice)
    if(userChoice===computerChoice)
    {
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==='rock')
        {
            //scissor,//paper
            userWin= computerChoice === 'paper'? false : true;
        }
        else if(userChoice==='paper')
        {
            userWin= computerChoice==='scissor'? false :true
        }
        else{
            userWin=computerChoice==='rock'?false:true
        }
        showWinner(userWin)
    }
}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});