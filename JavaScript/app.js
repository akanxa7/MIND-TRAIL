// let gameseq=[];
// let userseq=[];
// let btns=["yellow","red","purple","green","brown","orange","pink","blue"];
// let started=false;
// let level=0;
// let highscore = 0; // Variable to store the high score
 
// let h2=document.querySelector("h2");
// document.addEventListener("keypress",function(){

//     if(started==false){//agar abhi tak game start nhi hua hai toh  
//         console.log("game is started");//toh tab hi game start karengy
//         started=true;
//         highestscore(level);
//         levelup();//jaise hi game start level up ko call 
    
//         // updateHighscore(gameseq);
       


        
//     }
    
// });

// function gameflash(btn){     
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     },250);
// }

// function userflash(btn){     
//     btn.classList.add("userflash");
//     setTimeout(function() {
//         btn.classList.remove("userflash");
//     },250);
// }


// function levelup(){     //for developer/console
//     userseq=[];      //as level ups we set userseq to empty so it will add everycolor again for that level to get to the another
//     level++; //ye level increase karega 
//     console.log("Level up! Current level:", level); // Add this line to check level value
//     h2.innerText=`level ${level}` //ye h2 pe level show karega jahan tak user jata hai
     
//     let randidx= Math.floor(Math.random()*7);
//     let randcolor=btns[randidx];   //array indexing (randomly generated colors)
//     let randbtn=document.querySelector(`.${randcolor}`)//color ki help se class banayegey phir queryselector se button hi choose kar lengy
   
//     gameseq.push(randcolor); //as the color starts forming will add it to the gameseq array
//     console.log(gameseq);
//     gameflash(randbtn);                         //flash will occur repeatly btn flash hoga jab start mai game choose karega random button and tab bhi hoga jab user koi button ko press karega
//     // Check and display the high score
//     console.log("userseq.length:", userseq.length); // Add this line to check userseq length
//     console.log("gameseq.length:", gameseq.length); // Add this line to check gameseq length
//     // Check and display the high score
//     // if (userseq.length === gameseq.length) {
//     //     setTimeout(function() {
//     //         console.log("Updating highscore..."); // Added this line to check if updateHighscore is triggered
//     //         updateHighscore(level); // Update high score when the current level is completed
//     //     }, 100000);
//     // }
    
    
// }

// function checkAns(idx){
//     //console.log("current level=", level);
    
//     if(userseq[idx]=== gameseq[idx]){
//         if(userseq.length===gameseq.length){
//             setTimeout(levelup,1000);
//         }
//     } else {
//         h2.innerHTML=`Game over!! your score was <b>${level}</b> <br>press any key to restart.`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor="white";
//         },150);
    
//         reset();
//     }
    
// }

// function btnpress(){         //for user
//     let btn=this;
    
//     userflash(btn);
//     userColor= btn.getAttribute("id");
//     // console.log(userColor);    we ae getting right color so push it into userseq array
//     userseq.push(userColor);

//     checkAns(userseq.length-1);    //jaise hi button press hoga usse usersequence mai add kardengey and checkans ko call karengy
// }

// let allbtns=document.querySelectorAll(".btn")
// for(btn of allbtns){
//     btn.addEventListener("click",btnpress);

// }

// function reset(){
//     started=false;
//     level=0;
//     gameseq=[];
//     userseq=[];

// }

// // function updateHighscore(score) {
// //     console.log("Updating highscore to:", score); // Added this line to check score value
    
// //     highscore = Math.max(highscore, score);
// //     let highscoreElement = document.getElementById("highscore");
// //     highscoreElement++;
// //     if (highscoreElement) {
// //         highscoreElement.innerText = `Highscore: ${highscore}`;
// //     }
// // }




// // let gameseq=[];
// // let userseq=[];
// //  let btns=["yellow","red","purple","green","brown","orange","pink","blue"];
// //  let started=false;
// // let level=0;
// //  let highscore = 0; // Variable to store the high score
 
// // let h2=document.querySelector("h2");
// // document.addEventListener("keypress",function(){

// //    if(started==false){//agar abhi tak game start nhi hua hai toh  
// //        console.log("game is started");//toh tab hi game start karengy
// //        started=true;

// // //         levelup();//jaise hi game start level up ko call 
       
// // //     }
    
// // // });

// // // function gameflash(btn){     
// // //     btn.classList.add("flash");
// // //     setTimeout(function() {
// // //         btn.classList.remove("flash");
// // //     },250);
// // // }

// // // function userflash(btn){     
// // //     btn.classList.add("userflash");
// // //     setTimeout(function() {
// // //         btn.classList.remove("userflash");
// // //     },250);
// // // }


// // // function levelup(){     //for developer/console
// // //     userseq=[];      //as level ups we set userseq to empty so it will add everycolor again for that level to get to the another
// // //     level++; //ye level increase karega 
// // //     console.log("Level up! Current level:", level); // Add this line to check level value
// // // h2.innerText=`level ${level}` //ye h2 pe level show karega jahan tak user jata hai
     
// // // let randidx= Math.floor(Math.random()*7);
// // // let randcolor=btns[randidx];   //array indexing (randomly generated colors)
// // // let randbtn=document.querySelector(`.${randcolor}`)//color ki help se class banayegey phir queryselector se button hi choose kar lengy
   
// // // //    console.log(randidx);
// // // //    console.log(randcolor);
// // // //    console.log(randbtn) ;               
// // //  //random btn choose  
// // //   gameseq.push(randcolor) ; //as the color starts forming will add it to the gameseq array
// // //   console.log("gameseq:", gameseq); // Add this line to check gameseq
// // //  console.log(gameseq);
// // //   gameflash(randbtn);                         //flash will occur repeatly btn flash hoga jab start mai game choose karega random button and tab bhi hoga jab user koi button ko press karega
// // // // Check and display the high score
// // // console.log("userseq.length:", userseq.length); // Add this line to check userseq length
// // // console.log("gameseq.length:", gameseq.length); // Add this line to check gameseq length
// // //    // Check and display the high score
// // //    if (userseq.length === gameseq.length) {
    
// // //     setTimeout(function() {
// // //         console.log("Updating highscore..."); // Add this line to check if updateHighscore is triggered
// // //         updateHighscore(level); // Update high score when the current level is completed
// // //     }, 1000);
// // // }

// // // }

// // // function checkAns(idx){
// // //     //console.log("current level=", level);
    
// // //     if(userseq[idx]=== gameseq[idx]){
// // //         if(userseq.length===gameseq.length){
// // //             setTimeout(levelup,1000);
// // //         }
// // //     }else{
// // //         h2.innerHTML=`Game over!! your score was <b>${level}</b> <br>press any key to restart.`;
// // //         document.querySelector("body").style.backgroundColor="red";
// // //         setTimeout(function(){
// // //          document.querySelector("body").style.backgroundColor="white";
// // //         },150);
    
// // //         reset();
// // //     }
    
            
    
// // // }

// // // function btnpress(){         //for user
// // //     let btn=this;
    
// // //     userflash(btn);
// // //     userColor= btn.getAttribute("id");
// // //     // console.log(userColor);    we ae getting right color so push it into userseq array
// // //     userseq.push(userColor);
// // //     checkAns(userseq.length-1);    //jaise hi button press hoga usse usersequence mai add kardengey and checkans ko call karengy
// // // }

// // // let allbtns=document.querySelectorAll(".btn")
// // // for(btn of allbtns){
// // //     btn.addEventListener("click",btnpress);

// // // }

// // // function reset(){
// // //     started=false;
// // //     level=0;
// // //     gameseq=[];
// // //     userseq=[];

// // // }
// function highestscore(){
//    if (userseq.length== gameseq.length){
//           let newh3=  document.createElement("h3")
//           highestscore++;
//           newh3.innerText=`Highscore:${gameseq}`;
//           document.body.appendChild(newh3);
//    }
// }
// //  function highestscore() {
// //     if (userseq.length === gameseq.length) {
// //        let existingHighscore = document.querySelector("#highscore");
// //        if (existingHighscore) {
// //           existingHighscore.innerText = `Highscore: ${userseq.length}`;
// //        } else {
// //           let newh3 = document.createElement("h3");
// //           newh3.id = "highscore"; // Assigning ID "highscore" to the new element
// //           newh3.innerText = `Highscore: ${userseq.length}`;
// //      document.body.appendChild(newh3);
// //         }
// //      }
// //  }
// // function highestscore() {
// //     // // Update highscore
// //       highscore = Math.max(highscore, userseq.length);
// //       // Display highscore
// //     let highscoreElement = document.getElementById("highscore");
// //      let h3=document.querySelector("h3")
// //      highscore++;
// //     h3.innerText = `Highscore: ${level}`;
// //  }
// // // //  // Update highscore
// // function updateHighscore(score) {
// //    console.log("Updating highscore to:", score); // Add this line to check score value
 
// //   highscore = Math.max(highscore, score);
// //      let highscoreElement = document.getElementById("highscore");
// //      if (highscoreElement) {
// //        highscoreElement.innerText = `Highscore: ${highscore}`;
// //       }
// //  }
// function changecolor(nextcolorchange){
// nextcolorchange
// }
let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green", "brown", "orange", "pink", "blue"];
let started = false;
let level = 0;
let highscore = 0; // Variable to store the high score

let h2 = document.querySelector("h2");
let highscoreElement = document.getElementById("highscore");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    console.log("Level up! Current level:", level);
    h2.innerText = `Level ${level}`;
     
    let randidx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
   
    gameseq.push(randcolor);
    gameflash(randbtn);

    setTimeout(() => {
        console.log("Checking highscore");
        updateHighscore(level);
    }, 1000);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over!! Your score was <b>${level}</b><br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
    
        reset();
    }
}

function btnpress() {
    let btn = this;
    
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}

function updateHighscore(score) {
    highscore = Math.max(highscore, score);
    if (highscoreElement) {
        highscoreElement.innerText = `Highscore: ${highscore}`;
    } else {
        highscoreElement = document.createElement("h3");
        highscoreElement.id = "highscore";
        highscoreElement.innerText = `Highscore: ${highscore}`;
        document.body.appendChild(highscoreElement);
    }
}


let startBtn = document.getElementById("btn-shadow10");
startBtn.addEventListener("click", function() {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
    }
});






document.getElementById("btn-shadow10").addEventListener('click', function() {
    // Hide the start page
    document.getElementById('start-page').style.display = 'none';
    
    // Show the game container
    document.getElementById('game-container').style.display = 'block';
});

// Add event listener for keypresses to start the game
document.addEventListener('keydown', function() {
    // Logic to start the game can go here
});







